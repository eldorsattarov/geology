import {STAF} from "../types/stafType";
import axios from "axios";
import {API_PATH} from "../../tools/constants";


export function stafState (data) {
    return{
        type : STAF,
        payload : data
    }
}
export const getStaf = () => (dispatch) =>{
    axios.get(API_PATH + "Xodimlar/")
        .then((res)=>{
            console.log(res);
            dispatch(stafState({staf : res.data.results}))
        })
}
