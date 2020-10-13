import {createStore, combineReducers, applyMiddleware} from "redux"
import thunkMiddleware from "redux-thunk"; 
import testsReducer from "./tests-reducer"


let reducers = combineReducers({
    tests : testsReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;