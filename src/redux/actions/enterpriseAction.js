import {ENTERPRISE} from "../types/enterpriseType";
import axios from "axios";
import {API_PATH} from "../../tools/constants";


export function enterpriseState (data) {
    return{
        type : ENTERPRISE,
        payload : data
    }
}
export const getMaqsad = () => (dispatch) =>{
    axios.get(API_PATH + "Asosiy-maqsadlar/")
        .then((res)=>{
            console.log(res)
           dispatch(enterpriseState({maqsadi: res.data.results}))
        })
}
export const getVazifalar = () => (dispatch) =>{
        axios.get(API_PATH + "Asosiy-vazifalar/")
        .then((res)=>{
            dispatch(enterpriseState({vazifasi : res.data.results}));
            console.log(res);
        })
}
