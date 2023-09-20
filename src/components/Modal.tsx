import styled from 'styled-components';

function Modal() {
	return (
		<ModalWrapper>
			<p>할 일을 삭제하시겠습니까?</p>
			<BtnWrapper>
				<button className="deleteBtn">삭제</button>
				<button className="cancelBtn">취소</button>
			</BtnWrapper>
		</ModalWrapper>
	);
}

export default Modal;

const ModalWrapper = styled.div`
	width: 311px;
	height: 152px;
	border-radius: 15px;
	display: flex;
	flex-flow: column nowrap;
	align-items: center;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	color: #1c1c1c;
	justify-content: center;

	p {
		font-size: ${({ theme }) => theme.fontSize['lg']};
	}
`;

const BtnWrapper = styled.div`
	display: flex;
	width: 186px;
	height: 19px;
	margin-top: 42px;
	align-items: center;
	justify-content: space-between;
	font-weight: ${({ theme }) => theme.fontWeight.semibold};
`;
