import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function Signup() {
	const naviagte = useNavigate();
	return (
		<SignupWrapper>
			<SignupHeader>회원가입</SignupHeader>
			<NavButton
				onClick={() => {
					naviagte('/signin');
				}}
			>
				로그인
			</NavButton>
			<NavButton
				onClick={() => {
					naviagte('/todo');
				}}
			>
				Todo
			</NavButton>
		</SignupWrapper>
	);
}

export default Signup;

const SignupWrapper = styled.div`
	width: 375px;
	height: 812px;
	background-color: #fff;
`;

const SignupHeader = styled.h1`
	color: blueviolet;
	font-size: ${({ theme }) => theme.fontSize['xl']};
	font-weight: ${({ theme }) => theme.fontWeight.semibold};
`;

const NavButton = styled.button`
	width: 100px;
	padding: 8px;
	background-color: bisque;
	margin: 10px;
	border-radius: 15px;
	font-weight: ${({ theme }) => theme.fontWeight.semibold};
`;
