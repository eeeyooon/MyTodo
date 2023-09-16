import styled from 'styled-components';

type SignFormProps = {
	text: string;
};

function SignForm(props: SignFormProps) {
	const { text } = props;
	return (
		<SignFormWrapper>
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
					/>
				</InputWrapper>
			</FormBox>
			<SignButton>{text}</SignButton>
		</SignFormWrapper>
	);
}

export default SignForm;

const SignFormWrapper = styled.div`
	width: 315px;
	height: 253px;
	display: flex;
	flex-flow: column nowrap;
	justify-content: space-between;
`;

const FormBox = styled.div`
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
