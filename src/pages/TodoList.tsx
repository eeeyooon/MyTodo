import styled from 'styled-components';
import TodoItem from '../components/TodoItem';
import TodoInput from '../components/TodoInput';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createTodoApi, getTodosApi } from '../utils/api';
import { TodoItemType } from '../types/todoItemType';
import { TodosType } from '../types/todosType';
import axiosInstance from '../utils/instance';
import Modal from '../components/Modal';

function TodoList() {
	const token = localStorage.getItem('access_token');
	const navigate = useNavigate();
	const user = localStorage.getItem('userEmail');
	const [todo, setTodo] = useState('');
	const [todos, setTodos] = useState<TodosType>([]);
	const [openModal, setOpenModal] = useState(false);

	useEffect(() => {
		if (token) {
			getTodosApi()
				.then((res) => {
					setTodos(res.data);
					axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
				})
				.catch((e) => console.error(e));
		} else {
			navigate('/signin');
		}
	}, [token]);

	const handleCreateTodo = () => {
		createTodoApi(todo).then(() => {
			setTodo('');
			getTodosApi().then((res) => setTodos(res.data));
		});
	};

	return (
		<>
			<TodoListWrapper>
				{openModal && <ModalBackground onClick={() => setOpenModal(false)} />}
				<TodoHeaderWrapper>
					<TodoHeader>Todo List</TodoHeader>
					<p>{user}</p>
				</TodoHeaderWrapper>
				<TodoItemWrapper>
					{todos.map((todoItem: TodoItemType) => {
						return <TodoItem key={todoItem.id} todoData={todoItem} setTodos={setTodos} setOpenModal={setOpenModal} />;
					})}
				</TodoItemWrapper>
				<TodoInputWrapper>
					<TodoInput
						todo={todo}
						handleCreateTodo={handleCreateTodo}
						setOpenModal={setOpenModal}
						onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTodo(e.target.value)}
					/>
				</TodoInputWrapper>
				{openModal && (
					<ModalWrapper>
						<Modal setOpenModal={setOpenModal} />
					</ModalWrapper>
				)}
			</TodoListWrapper>
		</>
	);
}

export default TodoList;

const TodoListWrapper = styled.div`
	width: 375px;
	height: 812px;
	background-color: #fff;
	display: flex;
	flex-flow: column nowrap;
	align-items: center;
	position: relative;
`;

const TodoHeaderWrapper = styled.div`
	height: 170px;
	display: flex;
	align-items: flex-start;
	flex-flow: column nowrap;
	margin-left: 28px;
	margin-top: 72px;

	p {
		font-weight: ${({ theme }) => theme.fontWeight.bold};
		font-size: ${({ theme }) => theme.fontSize['xl']};
		color: rgba(53, 56, 62, 0.5);
		color: rgba(0, 85, 255, 0.6);
		margin-left: 10px;
	}
`;

const TodoHeader = styled.h1`
	height: 47px;
	width: 375px;
	font-weight: ${({ theme }) => theme.fontWeight.bold};
	font-size: ${({ theme }) => theme.fontSize['5xl']};
`;

const TodoItemWrapper = styled.div`
	height: 500px;
	overflow-y: auto;
	-ms-overflow-style: none;
	scrollbar-width: none;
	&::-webkit-scrollbar {
		display: none;
	}
`;

const TodoInputWrapper = styled.div`
	height: 145px;
`;

const ModalBackground = styled.div`
	background-color: #a8a8a8;
	position: fixed;
	width: 375px;
	height: 812px;
	opacity: 0.65;
	z-index: 10;
`;

const ModalWrapper = styled.div`
	z-index: 20;
	position: absolute;
	transform: translate(0, 0);
	top: 45%;
`;
