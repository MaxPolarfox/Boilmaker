import { createStore, applyMiddleware } from "redux";
import redusers from "./reducers/reducers";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
const store = createStore(
  redusers,
  applyMiddleware(thunkMiddleware, createLogger())
);
export default store;
