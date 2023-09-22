import axiosInstance from './instance';

type SignProps = {
	email: string;
	password: string;
};

const signupApi = ({ email, password }: SignProps) => {
	console.log(email, password);
	return axiosInstance.post('/auth/signup', { email, password });
};

const signinApi = ({ email, password }: SignProps) => axiosInstance.post('/auth/signin', { email, password });

const createTodoApi = (todo: string) => {
	return axiosInstance.post('/todos', { todo });
};
const getTodosApi = () => {
	return axiosInstance.get('/todos');
};

const updateTodoApi = (id: number, todo: string, isCompleted: boolean) =>
	axiosInstance.put(`/todos/${id}`, {
		todo,
		isCompleted,
	});

const deleteTodoApi = (id: number) => axiosInstance.delete(`/todos/${id}`);

export { signupApi, signinApi, createTodoApi, getTodosApi, updateTodoApi, deleteTodoApi };
