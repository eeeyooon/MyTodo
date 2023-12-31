import styled from 'styled-components';

type InputProps = {
	onChange: React.ChangeEventHandler<HTMLInputElement>;
	todo: string;
	handleCreateTodo: () => void;
	setOpenToast: React.Dispatch<React.SetStateAction<boolean>>;
	setModalContent: React.Dispatch<React.SetStateAction<string>>;
};

function TodoInput(props: InputProps) {
	const { onChange, todo, handleCreateTodo, setOpenToast, setModalContent } = props;

	const handleNoTodo = () => {
		setOpenToast(true);
		setModalContent('할 일을 입력해주세요.');
	};
	return (
		<TodoInputBox>
			<TodoInputFormWrapper>
				<TodoInputForm
					data-testid="new-todo-input"
					name="new-todo-input"
					type="text"
					placeholder="Your Task Here..."
					onChange={onChange}
					value={todo}
				/>
				<button data-testid="new-todo-add-button" onClick={todo ? handleCreateTodo : handleNoTodo}>
					<img src={process.env.PUBLIC_URL + '/assets/send.svg'} alt="전송 아이콘" />
				</button>
			</TodoInputFormWrapper>
		</TodoInputBox>
	);
}

export default TodoInput;

const TodoInputBox = styled.div`
	width: 345px;
	height: 35px;
	color: rgba(53, 56, 62, 0.5);
	text-align: center;
	border-bottom: 2px solid rgba(53, 56, 62, 0.1);
`;

const TodoInputFormWrapper = styled.div`
	width: 315px;
	height: 26px;
	display: flex;
	justify-content: space-between;
	margin: 15px;
`;

const TodoInputForm = styled.input`
	border: none;
	width: 300px;
	font-size: ${({ theme }) => theme.fontSize['xl']};
	font-weight: ${({ theme }) => theme.fontWeight.bold};
	color: #35383e;
	outline: none;

	::placeholder {
		color: rgba(53, 56, 62, 0.8);
	}
`;
