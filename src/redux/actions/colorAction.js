
import {COLOR} from "../types/colorType";


export function colorState(data) {
    return {
        type: COLOR,
        payload: data
    }
}
