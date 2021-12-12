import {ACCOUNTING} from "../types/accountingType";
import axios from "axios";
import {API_PATH} from "../../tools/constants";
import {updateState} from "./carouselNewsAction";

export function accountingState(data) {
    return {
        type: ACCOUNTING,
        payload: data
    }
}

export const getAccounting = () => (dispatch) =>{
    axios.get(API_PATH + "Buhgalteriya/")
        .then((res)=>{
           console.log(res);
           dispatch(accountingState({accounting : res.data.results}));
        })
}
