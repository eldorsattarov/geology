import {ENTERPRISE} from "../types/enterpriseType";
import {COLOR} from "../types/colorType";


const initialState = {
    changeColor : false
}
export const colorReducer = (state = initialState, action) => {
    if (action.type = COLOR) {
        return {
            ...state,
            ...action.payload
        }
    }
    return state;
}
