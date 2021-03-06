import { UserStateAction } from '../auth'
import { User } from '../entity'
import { Constants } from "../constants"

const defaultUser = {
    id : 0,
    isOnline : false,
    name : "anonymous",
    token : "",
}

const userReducer= (user: User=defaultUser, action: UserStateAction) => {
    console.log("usrReducer:", user, action);
    switch (action.type) {
        case Constants.LOGIN_USER_ACTION:
            return { ...user, ...action.user };
        case Constants.LOGOFF_USER_ACTION:
            if (user && user.id === action.id) {
                return { ...user, ...defaultUser };
            }
            return user;
        default:
            return user;
    }
};

export default userReducer;