import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { routerMiddleware } from "connected-react-router"; //, ConnectedRouter
import { createBrowserHistory } from "history";
import { composeWithDevTools } from "redux-devtools-extension";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import reducers from "./redux/reducers";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import { BrowserRouter } from "react-router-dom"; //instead of connectedrouter for now

const history = createBrowserHistory();
const middlewares = [thunk, routerMiddleware(history)];

// import createRootReducer from "reducers";
// const store = createStore(
//   createRootReducer(history),
//   composeWithDevTools(applyMiddleware(...middlewares))
// );
// const store = createStore(reducers, applyMiddleware(...middlewares));
const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(...middlewares))
);
export const persistor = persistStore(store);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <App />
          {/* <ConnectedRouter history={history}>{routes}</ConnectedRouter> */}
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
// ReactDOM.render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <PersistGate persistor={persistor}>
//         <App />
//       </PersistGate>
//     </Provider>
//   </React.StrictMode>,
//   document.getElementById("root")
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
