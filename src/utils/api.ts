import axiosInstance from './instance';

type ApiProps = {
	email: string;
	password: string;
};

const signupApi = ({ email, password }: ApiProps) => axiosInstance.post('/auth/signup', { email, password });

const signinApi = ({ email, password }: ApiProps) => axiosInstance.post('/auth/signin', { email, password });

export { signupApi, signinApi };
