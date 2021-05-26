import React, { useState } from "react";
import {
	BrowserRouter as Router,
	Redirect,
	Route,
	Switch,
} from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { YMaps } from "react-yandex-maps";

import MainPage from "../../pages/MainPage";
import OrderPage from "../../pages/OrderPage";
import rootReducer from "../../store/reducers";

import "@fontsource/roboto";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import "./App.scss";


const BASENAME = "/carsharing";

const store = createStore(rootReducer, composeWithDevTools());

function App() {
	const [menuActive, setMenuActive] = useState(false);

	return (
		<Provider store={store}>
			<div className="App">
				<YMaps>
					<Router basename={BASENAME}>
						<Switch>
							<Route
								exact
								path="/"
								render={(props) => (
									<MainPage
										menuActive={menuActive}
										setMenuActive={setMenuActive}
									/>
								)}
							/>
							<Route
								path="/order"
								render={(props) => (
									<OrderPage
										menuActive={menuActive}
										setMenuActive={setMenuActive}
									/>
								)}
							/>

							<Redirect from="/order" to="/order/location" />
						</Switch>
					</Router>
				</YMaps>
			</div>
		</Provider>
	);
}

export default App;
