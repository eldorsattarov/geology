import {UPDATE_STATE} from "../types/newsType";

const initialState = {
    open : false,
    news : [],
    selectedNews : []
}

export const carouselNewsReducer = (state = initialState, action) => {
    if (action.type = UPDATE_STATE) {
        return {
            ...state,
            ...action.payload
        }
    }
    return state;
}
