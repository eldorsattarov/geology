import axios from "axios";
import {API_PATH, TOKEN_NAME} from "../../tools/constants";
import {toast} from "react-toastify";
import {updateState} from "./carouselNewsAction";

export function login(event, errors, values, history) {
    return function (dispatch) {
        axios.post("http://10.10.23.234:8000/api/register/", values)
            .then((res) => {
                console.log(res);
                // localStorage.setItem(TOKEN_NAME,res.data.password);
                const token = res.data.password;
                localStorage.setItem(TOKEN_NAME , token);
                dispatch({type: ""});
                history.push("/");
                toast.success("Muvaffaqiyatli !!!")
                console.log("token : " + token);
            })
            .catch((error) => {
                toast.error(error.response.data.message);
            });
    }
}
