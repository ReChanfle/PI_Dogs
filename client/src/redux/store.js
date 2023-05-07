import { createStore,applyMiddleware,compose } from "redux";
import reducer from "./reducer";
import  thunkMiddleware  from "redux-thunk";

const store = createStore(reducer,applyMiddleware(thunkMiddleware));

export default store;