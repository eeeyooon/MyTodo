import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { signinApi, signupApi } from '../utils/api';
import isEmailValid from '../utils/isEmailValid';
import isPasswordVaild from '../utils/isPasswordVaild';
import axiosInstance from '../utils/instance';
import Toast from './Toast';

type SignFormProps = {
	page: string;
	navText: string;
};

function SignForm(props: SignFormProps) {
	const { page, navText } = props;
	const navigate = useNavigate();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [toastMsg, setToastMsg] = useState('');
	const [openToast, setOpenToast] = useState(false);

	const token = localStorage.getItem('access_token');

	useEffect(() => {
		if (token) navigate('/todo');
	}, [token]);

	useEffect(() => {
		if (toastMsg.length > 0) {
			setOpenToast(true);
		}
	}, [toastMsg]);

	useEffect(() => {
		if (openToast) {
			const timer = setTimeout(() => {
				setOpenToast(false);
				if (toastMsg === '회원가입을 성공하였습니다.') {
					setToastMsg('');
					navigate('/signin');
				} else {
					setToastMsg('');
				}
			}, 1500);

			return () => clearTimeout(timer);
		}
	}, [navigate, openToast, toastMsg]);

	const handleSignup = async (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();

		await signupApi({ email, password })
			.then((res) => {
				setToastMsg(res.status === 201 ? '회원가입을 성공하였습니다.' : '회원가입을 실패하였습니다.');
			})
			.catch((e) => {
				console.error(e.response.data.message);
				setToastMsg(e.response.data.message);
			});
	};

	const handleSignin = async (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();

		await signinApi({ email, password })
			.then((res) => {
				localStorage.setItem('access_token', res.data.access_token);
				localStorage.setItem('userEmail', email.slice(0, email.indexOf('@')));
				axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${res.data.access_token}`;
				navigate('/todo');
			})
			.catch((e) => {
				console.error(e);
				setToastMsg(
					e.response.status === 401
						? '이메일과 비밀번호가 유효하지 않습니다.'
						: e.response.status === 404
						? '존재하지 않는 이메일입니다.'
						: '로그인에 실패하였습니다.',
				);
			});
	};

	return (
		<SignFormWrapper>
			{openToast && (
				<ModalBackground
					onClick={() => {
						setOpenToast(false);
					}}
				/>
			)}
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
							placeholder="example@gmail.com"
						/>
						{email && !isEmailValid(email) ? <ErrorMsg>이메일 형식을 확인해주세요.</ErrorMsg> : null}
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
						{password && !isPasswordVaild(password) ? <ErrorMsg>비밀번호는 8자 이상이어야 합니다.</ErrorMsg> : null}
					</InputWrapper>
				</FormBox>
				<SignButton
					onClick={page === 'signin' ? handleSignin : handleSignup}
					data-testid={page + '-button'}
					disabled={!isEmailValid(email) || !isPasswordVaild(password)}
				>
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
			{openToast && (
				<ToastWrapper>
					<Toast modalContent={toastMsg} />
				</ToastWrapper>
			)}
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
	height: 273px;
	display: flex;
	flex-flow: column nowrap;
	justify-content: space-between;
`;

const FormBox = styled.form`
	width: 315px;
	height: 210px;
	display: flex;
	flex-flow: column nowrap;
	justify-content: space-between;
`;

const InputWrapper = styled.div`
	width: 315px;
	height: 100px;
	display: flex;
	flex-flow: column nowrap;
	justify-content: flex-start;
`;

const Label = styled.label`
	color: #695c5c;
	font-size: ${({ theme }) => theme.fontSize.xl};
	padding-left: 8px;
	margin-bottom: 5px;
`;

const InputBox = styled.input`
	width: 312px;
	height: 50px;
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

const ErrorMsg = styled.p`
	padding-left: 5px;
	padding-top: 5px;
	height: 25px;
	color: rgba(0, 85, 255, 0.8);
`;

const ToastWrapper = styled.div`
	z-index: 20;
	position: absolute;
	transform: translate(0, 0);
	top: 35%;
`;

const ModalBackground = styled.div`
	background-color: #a8a8a8;
	position: fixed;
	width: 375px;
	height: 812px;
	opacity: 0.65;
	z-index: 10;
`;
