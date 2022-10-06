import React from 'react';
import { Route, BrowserRouter} from 'react-router-dom';
import MainPage from './MainPage';
import BookPage from './BookPage';

function App() {
	return (
		<BrowserRouter>
			<Route path="/books/:bookName">
				<BookPage />
			</Route>
			<Route exact path="/books">
				<MainPage />
			</Route>
			<Route exact path="/">
				<MainPage />
			</Route>
		</BrowserRouter>
	);
}

export default App;
