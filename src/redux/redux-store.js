import {createStore, combineReducers, applyMiddleware} from "redux"
import thunkMiddleware from "redux-thunk"; 
import testsReducer from "./tests-reducer"
import {reducer as formReducer} from "redux-form";

let reducers = combineReducers({
    tests : testsReducer,
    form: formReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;