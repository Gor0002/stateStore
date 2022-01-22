import {SAVE_USER_LIST} from './action';
import {LOADER} from './action'

export const saveUserList = (payload) =>{
    return {
        type: SAVE_USER_LIST,
        payload, 
    }
}

export const acLoader = (payload) =>{
    return {
        type: LOADER,
        payload, 
    }
}