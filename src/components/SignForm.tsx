import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { signinApi, signupApi } from '../utils/api';

type SignFormProps = {
	page: string;
	navText: string;
};

function SignForm(props: SignFormProps) {
	const { page, navText } = props;
	const navigate = useNavigate();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const token = localStorage.getItem('access_token');

	useEffect(() => {
		console.log(token);
		if (token) navigate('/todo');
	}, [token]);

	const handleSignup = () => {
		signupApi({ email, password })
			.then((res) => {
				console.log(email, password);
				console.log(res.status === 201 ? '회원가입을 성공하였습니다.' : '회원가입을 실패하였습니다.');
				navigate('/signin');
			})
			.catch((e) => console.error(e.response.data.message));
	};

	const handleSignin = () => {
		signinApi({ email, password })
			.then((res) => {
				localStorage.setItem('access_token', res.data.access_token);
				navigate('/todo');
				console.log(res.data);
			})
			.catch((e) => console.error(e));
	};

	return (
		<SignFormWrapper>
			<SignupHeader>{page === 'signin' ? 'Sign In' : 'Sign Up'}</SignupHeader>
			<SignFormBox>
				<FormBox>
					<InputWrapper>
						<Label htmlFor="email-input">Email</Label>
						<InputBox
							type="email"
							id="email-input"
							data-testid="email-input"
							onChange={(e) => setEmail(e.target.value)}
							placeholder="example@gamil.com"
						/>
					</InputWrapper>
					<InputWrapper>
						<Label htmlFor="password-input">Password</Label>
						<InputBox
							type="password"
							id="password-input"
							data-testid="password-input"
							onChange={(e) => setPassword(e.target.value)}
							placeholder="Enter Your Password"
							autoComplete="off"
						/>
					</InputWrapper>
				</FormBox>
				<SignButton onClick={page === 'signin' ? handleSignin : handleSignup} data-testid={page + '-button'}>
					{page === 'signin' ? 'Sign In' : 'Sign Up'}
				</SignButton>
			</SignFormBox>
			<NavSign>
				<p>{navText}</p>
				<NavBtn
					onClick={() => {
						page === 'signin' ? navigate('/signup') : navigate('/signin');
					}}
				>
					{page === 'signin' ? 'signup' : 'signin'}
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
