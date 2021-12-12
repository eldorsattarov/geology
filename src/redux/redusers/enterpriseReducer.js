import {ENTERPRISE} from "../types/enterpriseType";

const initialState = {
    maqsadi : [],
    vazifasi : []
}

export const enterpriseReducer = (state = initialState, action) => {
    if (action.type = ENTERPRISE) {
        return {
            ...state,
            ...action.payload
        }
    }
    return state;
}
