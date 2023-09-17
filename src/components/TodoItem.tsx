import styled from 'styled-components';

function TodoItem() {
	return (
		<TodoItemWrapper>
			<CheckBtn>
				<img src={process.env.PUBLIC_URL + '/assets/check_disable.svg'} alt="미완료 아이콘" />
			</CheckBtn>
			<p>오후 2시에 운동 가기</p>
			<UDBtnWrapper>
				<UpdateBtn>
					<img src={process.env.PUBLIC_URL + '/assets/edit.svg'} alt="수정 아이콘" />
				</UpdateBtn>
				<DeleteBtn>
					<img src={process.env.PUBLIC_URL + '/assets/delete.svg'} alt="삭제 아이콘" />
				</DeleteBtn>
			</UDBtnWrapper>
		</TodoItemWrapper>
	);
}

export default TodoItem;

const TodoItemWrapper = styled.div`
	width: 345px;
	height: 53px;
	border-radius: 18px;
	display: flex;
	background-color: rgba(53, 56, 62, 0.05);
	color: #35383e;
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
