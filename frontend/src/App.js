import LoginPage from './Login';
import LogoutPage from './Logout'
import Home from './Home';
import Trendings from './Trendings';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import ReigistrationPage from './Register';
import Ticker from './Ticker';
import News from './News';

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<main>
					<Routes>
						<Route path="/login" element={<LoginPage/>} />
						<Route path="/logout" element={<LogoutPage/>} />
						<Route path="/signup" element={<ReigistrationPage/>} />
						<Route path="/home" element={<Home/>} />
						<Route path="/trendings" element={<Trendings/>} />
						<Route path="/news" element={<News/>} />
						<Route path='/tickers/:symbol' element={<Ticker/>} />
					</Routes>
				</main>
			</div>
		</BrowserRouter>
	);
}

export default App;
