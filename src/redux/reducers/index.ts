import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { createBrowserHistory } from "history";

import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import itemsReducers from "./items";
import cartReducer from "./cart";

const history = createBrowserHistory();
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["itemState", "cartState"],
};
export interface StoreState {
  itemsState: any;
  cartState: any;
  router: any;
}

const reducers = combineReducers<StoreState>({
  itemsState: itemsReducers,
  cartState: cartReducer,
  router: connectRouter(history),
});
// const createRootReducer = (history: any) =>
//   combineReducers({
//     router: connectRouter(history),
//     itemsState: itemsReducers,
//   });

export default persistReducer(persistConfig, reducers);
// export default reducers;
// export default createRootReducer;
