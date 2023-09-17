import styled from 'styled-components';
import SignForm from '../components/SignForm';
import { useNavigate } from 'react-router-dom';

function Signin() {
	const navigate = useNavigate();
	return (
		<SigninWrapper>
			<SigninHeader>Sign in</SigninHeader>
			<SignForm text={'Sign In'} url={'/signup'} />
			<NavSignup>
				<p>Don&apos;t have an account?</p>
				<NavBtn
					onClick={() => {
						navigate('/signup');
					}}
				>
					sign up
				</NavBtn>
			</NavSignup>
		</SigninWrapper>
	);
}

export default Signin;

const SigninWrapper = styled.div`
	width: 375px;
	height: 812px;
	background-color: #fff;
	display: flex;
	flex-flow: column nowrap;
	align-items: center;
`;

const SigninHeader = styled.h1`
	width: 315px;
	height: 47px;
	font-weight: ${({ theme }) => theme.fontWeight.bold};
	font-size: ${({ theme }) => theme.fontSize['5xl']};
	color: #35383e;
	display: flex;
	align-items: flex-start;
	margin-top: 164px;
	margin-bottom: 57px;
`;

const NavSignup = styled.div`
	width: 270px;
	height: 24px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-top: 37px;

	& p {
		color: rgba(0, 0, 0, 0.6);
		font-size: ${({ theme }) => theme.fontWeight.medium};
	}
`;

const NavBtn = styled.button`
	border-bottom: 1px solid rgba(0, 85, 255, 0.8);
	color: rgba(0, 85, 255, 0.8);
`;
