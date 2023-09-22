import styled from 'styled-components';
import SignForm from '../components/SignForm';

function Signup() {
	return (
		<SignupWrapper>
			<SignForm page={'signup'} navText={'Already have an account?'} />
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
