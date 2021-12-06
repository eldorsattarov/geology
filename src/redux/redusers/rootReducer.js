import {combineReducers} from "redux";
import {carouselNewsReducer} from "./carouselNewsReducer";
import {loginReducer} from "./loginReducer";
import {accountingReducer} from "./accountingReducer";

export const rootReducer = combineReducers({
    login: loginReducer,
    news: carouselNewsReducer,
    accounting : accountingReducer
});
