import styled from 'styled-components';
import { TodoItemType } from '../types/todoItemType';
import { useState } from 'react';
import { deleteTodoApi, getTodosApi } from '../utils/api';
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
	const [isEdit, setIsEdit] = useState(false);

	const handleDeleteTodo = (id: number) => {
		deleteTodoApi(id)
			.then(() =>
				getTodosApi()
					.then((res) => setTodos(res.data))
					.catch((e) => console.error(e)),
			)
			.catch((e) => console.error(e));
	};

	return (
		<TodoItemWrapper $isCompleted={isCompleted}>
			<CheckBtn>
				{isCompleted ? (
					<img src={process.env.PUBLIC_URL + '/assets/checked.svg'} alt="완료 아이콘" />
				) : (
					<img src={process.env.PUBLIC_URL + '/assets/check.svg'} alt="미완료 아이콘" />
				)}
			</CheckBtn>
			<p>{todo}</p>
			<UDBtnWrapper>
				{isCompleted ? null : (
					<>
						<UpdateBtn data-testid="modify-button">
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
