import {ENTERPRISE} from "../types/enterpriseType";
import {STAF} from "../types/stafType";


const intialState = {
    staf : []
}

export const stafReducer = (state=intialState , action) =>{
    if (action.type = STAF) {
        return {
            ...state,
            ...action.payload
        }
    }
    return state
}
