import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from './style/theme';
import { GlobalStyles } from './style/global';
import Signup from './pages/Signup';

function App() {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<BrowserRouter>
				<Routes>
					<Route path="/signup" element={<Signup />} />
				</Routes>
			</BrowserRouter>
		</ThemeProvider>
	);
}

export default App;
