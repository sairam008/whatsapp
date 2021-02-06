import React from "react";
import "./css/App.css";
import Sidebar from "./components/Sidebar";
import Chat from "./components/Chat";
import Login from "./components/Login";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useStateValue } from "./components/StateProvider";

function App() {
	const [{ user }, dispatch] = useStateValue();
	return (
		<div className="app">
			{!user ? (
				<Login />
			) : (
				<div className="app__body">
					<BrowserRouter>
						<Sidebar />
						<Switch>
							<Route path="/rooms/:roomId">
								<Chat />
							</Route>
							<Route path="/"></Route>
						</Switch>
					</BrowserRouter>
				</div>
			)}
		</div>
	);
}

export default App;
