import { combineReducers, createStore } from "redux";
import counterReducer from "./reducers/counterReducer";
import todoReducer from "./reducers/todoReducer";

const rootReducer = combineReducers({
  counterReducer,
  todoReducer,
});

const store = createStore(rootReducer);

export default store;
