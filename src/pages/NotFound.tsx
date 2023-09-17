import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function NotFound() {
	const navigate = useNavigate();
	return (
		<NotFoundWrapper>
			<h1>Not Found :&#40;</h1>
			<HomeBtn
				onClick={() => {
					navigate('/');
				}}
			>
				Go to Home
			</HomeBtn>
		</NotFoundWrapper>
	);
}

export default NotFound;

const NotFoundWrapper = styled.div`
	width: 375px;
	height: 812px;
	background-color: #fff;
	display: flex;
	flex-flow: column nowrap;
	align-items: center;
	justify-content: center;

	h1 {
		font-weight: ${({ theme }) => theme.fontWeight.bold};
		font-size: ${({ theme }) => theme.fontSize['5xl']};
	}
`;

const HomeBtn = styled.button`
	color: rgba(0, 85, 255, 0.6);
	text-decoration-line: underline;
	font-weight: ${({ theme }) => theme.fontWeight.semibold};
	margin-top: 30px;
	margin-bottom: 20px;
`;
