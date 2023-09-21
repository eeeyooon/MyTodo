import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

type SignFormProps = {
	text: string;
	url: string;
	navText: string;
	navTo: string;
};

function SignForm(props: SignFormProps) {
	const { text, url, navTo, navText } = props;
	const navigate = useNavigate();
	return (
		<SignFormWrapper>
			<SignupHeader>{text}</SignupHeader>
			<SignFormBox>
				<FormBox>
					<InputWrapper>
						<Label htmlFor="email-input">Email</Label>
						<InputBox type="email" id="email-input" data-testid="email-input" placeholder="example@gamil.com" />
					</InputWrapper>
					<InputWrapper>
						<Label htmlFor="password-input">Password</Label>
						<InputBox
							type="password"
							id="password-input"
							data-testid="password-input"
							placeholder="Enter Your Password"
							autoComplete="off"
						/>
					</InputWrapper>
				</FormBox>
				<SignButton
					onClick={() => {
						navigate(url);
					}}
				>
					{text}
				</SignButton>
			</SignFormBox>
			<NavSign>
				<p>{navText}</p>
				<NavBtn
					onClick={() => {
						navigate(`/${navTo}`);
					}}
				>
					{navTo}
				</NavBtn>
			</NavSign>
		</SignFormWrapper>
	);
}

export default SignForm;

const SignFormWrapper = styled.div`
	width: 375px;
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

const NavSign = styled.div`
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

const SignFormBox = styled.div`
	width: 315px;
	height: 253px;
	display: flex;
	flex-flow: column nowrap;
	justify-content: space-between;
`;

const FormBox = styled.form`
	width: 315px;
	height: 174px;
	display: flex;
	flex-flow: column nowrap;
	justify-content: space-between;
`;

const InputWrapper = styled.div`
	width: 315px;
	height: 80px;
	display: flex;
	flex-flow: column nowrap;
	justify-content: space-between;
`;

const Label = styled.label`
	color: #695c5c;
	font-size: ${({ theme }) => theme.fontSize.xl};
	padding-left: 8px;
`;

const InputBox = styled.input`
	width: 312px;
	height: 53px;
	border-radius: 18px;
	border: 1px solid rgba(0, 0, 0, 0.4);
	padding-left: 12px;

	::placeholder {
		color: rgba(0, 0, 0, 0.7);
	}
`;

const SignButton = styled.button`
	width: 312px;
	height: 48px;
	border-radius: 18px;
	color: #fff;
	background: rgba(0, 85, 255, 0.8);
`;
