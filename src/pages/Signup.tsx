import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import SignForm from '../components/SignForm';

function Signup() {
	const navigate = useNavigate();
	return (
		<SignupWrapper>
			<SignupHeader>Sign up</SignupHeader>
			<SignForm text={'Sign up'} url={'/signup'} />
			<NavSignin>
				<p>Already have an account?</p>
				<NavBtn
					onClick={() => {
						navigate('/signin');
					}}
				>
					sign in
				</NavBtn>
			</NavSignin>
		</SignupWrapper>
	);
}

export default Signup;

const SignupWrapper = styled.div`
	width: 375px;
	height: 812px;
	background-color: #fff;
	display: flex;
	flex-flow: column nowrap;
	align-items: center;
`;

const SignupHeader = styled.h1`
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

const NavSignin = styled.div`
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
	text-decoration-line: underline;
	color: rgba(0, 85, 255, 0.8);
`;
