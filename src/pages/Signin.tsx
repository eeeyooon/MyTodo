import styled from 'styled-components';
import SignForm from '../components/SignForm';

function Signin() {
	return (
		<SigninWrapper>
			<SignForm text={'Sign In'} url={'/signup'} navText="Don't have an account?" navTo={'signup'} />
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
