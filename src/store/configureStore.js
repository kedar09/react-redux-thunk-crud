import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { reducer } from "../reducers/employee.reducer";

const rootReducer = combineReducers({
  reducer,
});
const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;
export default () => {
  let store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
  );
  return { store };
};
