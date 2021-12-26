import {UPDATE_STATE} from "../types/newsType";
import axios from "axios";
import {API_PATH, TOKEN_NAME} from "../../tools/constants";

export function updateState(data) {
    return {
        type: UPDATE_STATE,
        payload: data
    }
}

export const getNews = () => (dispatch) => {
    axios.get(API_PATH + "Yangiliklar/")
        .then((res) => {
            dispatch(updateState({news: res.data.results}));
            console.log(res)
        })
};
