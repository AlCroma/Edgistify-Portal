import { combineReducers } from "redux";
import errorReducer from "./errorReducer";
import authRedcuer from './authReducers';
import postReducer from './postReducer'

export default combineReducers({
    errors: errorReducer,
    auth: authRedcuer,
    post: postReducer
})