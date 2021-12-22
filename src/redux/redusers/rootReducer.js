import {combineReducers} from "redux";
import {carouselNewsReducer} from "./carouselNewsReducer";
import {loginReducer} from "./loginReducer";
import {accountingReducer} from "./accountingReducer";
import {enterpriseReducer} from "./enterpriseReducer";
import {stafReducer} from "./stafReducer";
import {colorReducer} from "./colorReducer";

export const rootReducer = combineReducers({
    login: loginReducer,
    news: carouselNewsReducer,
    accounting : accountingReducer,
    enterprise : enterpriseReducer,
    staf : stafReducer,
    changeColor : colorReducer
});
