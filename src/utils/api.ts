import axiosInstance from './instance';

type SignProps = {
	email: string;
	password: string;
};

type TodoProps = {
	id: number;
	todo: string;
	isCompleted: boolean;
};

const signupApi = ({ email, password }: SignProps) => {
	console.log(email, password);
	return axiosInstance.post('/auth/signup', { email, password });
};

const signinApi = ({ email, password }: SignProps) => axiosInstance.post('/auth/signin', { email, password });

const CreateTodoApi = (todo: string) => {
	axiosInstance.post('/todos', { todo });
};
const GetTodosApi = () => {
	axiosInstance.get('/todos');
};

const UpdateTodoApi = ({ id, todo, isCompleted }: TodoProps) =>
	axiosInstance.put(`/todos/${id}`, {
		todo,
		isCompleted,
	});

const DeleteTodoApi = (id: number) => axiosInstance.delete(`/todos/${id}`);

export { signupApi, signinApi, CreateTodoApi, GetTodosApi, UpdateTodoApi, DeleteTodoApi };
