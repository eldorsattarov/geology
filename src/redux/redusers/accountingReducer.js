import {ACCOUNTING} from "../types/accountingType";


const initialState = {
    accounting : []
}

export const accountingReducer = (state=initialState,action) =>{
    if (action.types = ACCOUNTING){
        return{
            ...state,
            ...action.payload
        }
    }
    return state
}
