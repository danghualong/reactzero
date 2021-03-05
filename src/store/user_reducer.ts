import { UserStateAction } from '../auth'
import { User } from '../entity'
import {Constants} from "../constants"

export default (user: User={id:0,name:"anonymous",token:"",isOnline:false}, action: UserStateAction) => {
    switch (action.type) {
        case Constants.LOGIN_USER_ACTION:
            return action.user;
        case Constants.LOGOFF_USER_ACTION:
            if (user && user.id === action.id) {
                user.id = 0;
                user.isOnline = false;
                user.name = "anonymous";
                user.token = "";
            }
            return user;
        default:
            return user;
    }
};