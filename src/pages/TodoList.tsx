import styled from 'styled-components';
import TodoItem from '../components/TodoItem';
import TodoInput from '../components/TodoInput';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createTodoApi, getTodosApi } from '../utils/api';
import { TodoItemType } from '../types/todoItemType';
import { TodosType } from '../types/todosType';
import axiosInstance from '../utils/instance';

function TodoList() {
	const token = localStorage.getItem('access_token');
	const navigate = useNavigate();
	const user = localStorage.getItem('userEmail');
	const [todo, setTodo] = useState('');
	const [todos, setTodos] = useState<TodosType>([]);

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
		<TodoListWrapper>
			<TodoHeaderWrapper>
				<TodoHeader>Todo List</TodoHeader>
				<p>{user}의 to do list입니다.</p>
			</TodoHeaderWrapper>
			<TodoItemWrapper>
				{todos.map((todoItem: TodoItemType) => {
					return <TodoItem key={todoItem.id} todoData={todoItem} setTodos={setTodos} />;
				})}
			</TodoItemWrapper>
			<TodoInputWrapper>
				<TodoInput
					todo={todo}
					handleCreateTodo={handleCreateTodo}
					onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTodo(e.target.value)}
				/>
			</TodoInputWrapper>
		</TodoListWrapper>
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
		margin-left: 5px;
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
