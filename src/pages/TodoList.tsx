import styled from 'styled-components';
import TodoItem from '../components/TodoItem';

function TodoList() {
	return (
		<TodoListWrapper>
			<h1>Todo List</h1>
			<TodoItem />
			<TodoItem />
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
