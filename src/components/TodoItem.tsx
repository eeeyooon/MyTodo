import styled from 'styled-components';

type TodoItemProps = {
	id: number;
	todo: string;
	isCompleted: boolean;
};

type IsCompletedProp = {
	$isCompleted: boolean;
};
function TodoItem(props: TodoItemProps) {
	const { id, todo, isCompleted } = props;

	return (
		<TodoItemWrapper $isCompleted={isCompleted} key={id}>
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
						<UpdateBtn>
							<img src={process.env.PUBLIC_URL + '/assets/edit.svg'} alt="수정 아이콘" />
						</UpdateBtn>
						<DeleteBtn>
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
