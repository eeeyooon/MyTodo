import styled from 'styled-components';
import TodoItem from '../components/TodoItem';
import TodoInput from '../components/TodoInput';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function TodoList() {
	const token = localStorage.getItem('access_token');
	const navigate = useNavigate();

	useEffect(() => {
		if (!token) navigate('/signin');
	}, [token]);

	return (
		<TodoListWrapper>
			<TodoHeaderWrapper>
				<TodoHeader>Todo List</TodoHeader>
				<p>User의 to do list입니다.</p>
			</TodoHeaderWrapper>
			<TodoItemWrapper>
				<TodoItem />
				<TodoItem />
				<TodoItem />
			</TodoItemWrapper>
			<TodoInputWrapper>
				<TodoInput />
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
