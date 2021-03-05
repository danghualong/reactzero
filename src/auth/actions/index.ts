import { ActionTypes, Constants } from "../../constants"
import { User } from "../../entity";

interface LoginUserAction{
    type:ActionTypes.LoginUserActionType
    user:User
}

interface LogoffUserAction{
    type: ActionTypes.LogoffUserActionType
    id:number
}

// 声明联合类型
export type UserStateAction = LoginUserAction | LogoffUserAction

export function createLoginUserAction(user: User): LoginUserAction{
    return {
        type: Constants.LOGIN_USER_ACTION,
        user:user,
    }
}

export function createLogoffUserAction(id:number): LogoffUserAction{
    return {
        type: Constants.LOGOFF_USER_ACTION,
        id,
    }
}