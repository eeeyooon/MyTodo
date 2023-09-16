import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from './style/theme';
import { GlobalStyles } from './style/global';
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import TodoList from './pages/TodoList';

function App() {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<BrowserRouter>
				<Routes>
					<Route path="/signup" element={<Signup />} />
					<Route path="/" element={<Navigate replace to="/signup" />} />
					<Route path="/signin" element={<Signin />} />
					<Route path="/todo" element={<TodoList />} />
				</Routes>
			</BrowserRouter>
		</ThemeProvider>
	);
}

export default App;
