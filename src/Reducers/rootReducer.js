import {contactReducer} from "./contactReducers";
import {combineReducers} from "redux";

export const rootReducer = combineReducers({
    contacts: contactReducer,
});