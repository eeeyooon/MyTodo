import styled from 'styled-components';
import { TodoItemType } from '../types/todoItemType';
import { useState, useEffect } from 'react';
import { deleteTodoApi, getTodosApi, updateTodoApi } from '../utils/api';
import { TodosType } from '../types/todosType';

type TodoItemProps = {
	todoData: TodoItemType;
	setTodos: React.Dispatch<React.SetStateAction<TodosType>>;
	setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
	setModalContent: React.Dispatch<React.SetStateAction<string>>;
	setModalStatus: React.Dispatch<React.SetStateAction<boolean>>;
	modalStatus: boolean;
};

type IsCompletedProp = {
	$isCompleted: boolean;
};

function TodoItem(props: TodoItemProps) {
	const { todoData, setTodos, setOpenModal, setModalContent, modalStatus, setModalStatus } = props;
	const { id, todo, isCompleted } = todoData;
	const [newTodo, setNewTodo] = useState(todo);
	const [isEdit, setIsEdit] = useState(0);
	const [targetId, setTargetId] = useState(0);

	const handleDelete = (id: number) => {
		setOpenModal(true);
		setModalContent('삭제');
		setTargetId(id);
	};

	useEffect(() => {
		if (modalStatus && targetId !== 0) {
			handleDeleteTodo(targetId);
			setModalStatus(false);
		}
	}, [modalStatus, targetId]);

	const handleDeleteTodo = (id: number) => {
		deleteTodoApi(id)
			.then(() =>
				getTodosApi()
					.then((res) => {
						{
							setTodos(res.data);
							setOpenModal(false);
						}
					})
					.catch((e) => console.error(e)),
			)
			.catch((e) => console.error(e));
	};

	const handleUpdateTodo = (id: number, newTodo: string, isCompleted: boolean) => {
		updateTodoApi(id, newTodo, isCompleted).then(() => {
			setIsEdit(0);
			getTodosApi().then((res) => setTodos(res.data));
		});
	};

	return (
		<TodoItemWrapper $isCompleted={isCompleted}>
			{isEdit === id ? null : (
				<CheckBtn onClick={() => handleUpdateTodo(id, todo, !isCompleted)}>
					{isCompleted ? (
						<img src={process.env.PUBLIC_URL + '/assets/checked.svg'} alt="완료 아이콘" />
					) : (
						<img src={process.env.PUBLIC_URL + '/assets/check.svg'} alt="미완료 아이콘" />
					)}
				</CheckBtn>
			)}
			{isEdit === id ? (
				<EditInput
					type="text"
					name="modify-input"
					data-testid="modify-input"
					defaultValue={todo}
					onChange={(e) => setNewTodo(e.target.value)}
				/>
			) : (
				<TodoContent>{todo}</TodoContent>
			)}

			<UDBtnWrapper>
				{isCompleted ? null : isEdit ? (
					<>
						<SubmitBtn
							className="button"
							data-testid="submit-button"
							onClick={() => (newTodo !== todo ? handleUpdateTodo(id, newTodo, isCompleted) : setIsEdit(0))}
						>
							<img src={process.env.PUBLIC_URL + '/assets/update.svg'} alt="제출 아이콘" />
						</SubmitBtn>
						<CancelBtn className="button" data-testid="cancel-button" onClick={() => setIsEdit(0)}>
							<img src={process.env.PUBLIC_URL + '/assets/cancel.svg'} alt="취소 아이콘" />
						</CancelBtn>
					</>
				) : (
					<>
						<UpdateBtn className="button" data-testid="modify-button" onClick={() => setIsEdit(id)}>
							<img src={process.env.PUBLIC_URL + '/assets/edit.svg'} alt="수정 아이콘" />
						</UpdateBtn>
						<DeleteBtn
							className="button"
							data-testid="delete-button"
							onClick={() => {
								handleDelete(id);
							}}
						>
							<img src={process.env.PUBLIC_URL + '/assets/delete.svg'} alt="삭제 아이콘" />
						</DeleteBtn>
					</>
				)}
			</UDBtnWrapper>
		</TodoItemWrapper>
	);
}

export default TodoItem;

const TodoItemWrapper = styled.div<IsCompletedProp>`
	width: 345px;
	height: 53px;
	border-radius: 18px;
	display: flex;
	background-color: ${({ $isCompleted }) => ($isCompleted ? 'rgba(0, 85, 255, 0.1)' : 'rgba(53, 56, 62, 0.05)')};
	color: ${({ $isCompleted }) => ($isCompleted ? '#2E74FF' : '#35383e')};
	font-weight: ${({ theme }) => theme.fontWeight.bold};
	align-items: center;
	justify-content: space-between;
	margin-bottom: 17px;

	p {
		width: 190px;
	}

	.button > img {
		&:hover {
			background-color: rgba(0, 85, 255, 0.2);
			border-radius: 12px;
		}
	}
`;

const CheckBtn = styled.button`
	margin-left: 15px;
	width: 30px;
`;

const TodoContent = styled.p`
	line-height: 18px;
	display: flex;
	align-items: center;
	height: 45px;
	padding-top: 4px;
	padding-bottom: 4px;
	color: #35383e;
	overflow-x: hidden;
	-ms-overflow-style: none;
	scrollbar-width: none;
	&::-webkit-scrollbar {
		display: none;
	}
`;

const UDBtnWrapper = styled.div`
	width: 65px;
	display: flex;
	justify-content: space-between;
	margin-right: 11px;
`;

const EditInput = styled.input`
	border: none;
	background-color: rgba(53, 56, 62, 0);
	margin-left: 20px;
	outline: none;
	border-bottom: 2px solid rgba(0, 85, 255, 0.5);
`;

const UpdateBtn = styled.button``;
const DeleteBtn = styled.button``;
const SubmitBtn = styled.button``;
const CancelBtn = styled.button``;
