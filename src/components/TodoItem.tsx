import styled from 'styled-components';
import { TodoItemType } from '../types/todoItemType';
import { useState } from 'react';
import { deleteTodoApi, getTodosApi, updateTodoApi } from '../utils/api';
import { TodosType } from '../types/todosType';

type TodoItemProps = {
	todoData: TodoItemType;
	setTodos: React.Dispatch<React.SetStateAction<TodosType>>;
};

type IsCompletedProp = {
	$isCompleted: boolean;
};

function TodoItem(props: TodoItemProps) {
	const { todoData, setTodos } = props;
	const { id, todo, isCompleted } = todoData;
	const [newTodo, setNewTodo] = useState('');
	const [isEdit, setIsEdit] = useState(0);

	const handleDeleteTodo = (id: number) => {
		deleteTodoApi(id)
			.then(() =>
				getTodosApi()
					.then((res) => setTodos(res.data))
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
				<CheckBtn>
					{isCompleted ? (
						<img src={process.env.PUBLIC_URL + '/assets/checked.svg'} alt="완료 아이콘" />
					) : (
						<img src={process.env.PUBLIC_URL + '/assets/check.svg'} alt="미완료 아이콘" />
					)}
				</CheckBtn>
			)}
			{isEdit === id ? (
				<input
					type="text"
					data-testid="modify-input"
					defaultValue={todo}
					onChange={(e) => setNewTodo(e.target.value)}
				/>
			) : (
				<p>{todo}</p>
			)}

			<UDBtnWrapper>
				{isCompleted ? null : isEdit ? (
					<>
						<SubmitBtn
							data-testid="submit-button"
							onClick={() => (newTodo !== todo ? handleUpdateTodo(id, newTodo, isCompleted) : setIsEdit(0))}
						>
							<img src={process.env.PUBLIC_URL + '/assets/edit.svg'} alt="제출 아이콘" />
						</SubmitBtn>
						<CancelBtn data-testid="cancel-button" onClick={() => setIsEdit(0)}>
							<img src={process.env.PUBLIC_URL + '/assets/delete.svg'} alt="취소 아이콘" />
						</CancelBtn>
					</>
				) : (
					<>
						<UpdateBtn data-testid="modify-button" onClick={() => setIsEdit(id)}>
							<img src={process.env.PUBLIC_URL + '/assets/edit.svg'} alt="수정 아이콘" />
						</UpdateBtn>
						<DeleteBtn data-testid="delete-button" onClick={() => handleDeleteTodo(id)}>
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
`;

const CheckBtn = styled.button`
	margin-left: 15px;
	width: 30px;
`;

const UDBtnWrapper = styled.div`
	width: 65px;
	display: flex;
	justify-content: space-between;
	margin-right: 11px;
`;

const UpdateBtn = styled.button``;

const DeleteBtn = styled.button``;

const SubmitBtn = styled.button``;
const CancelBtn = styled.button``;
