import { USER, TOKEN } from "../constants/constants"
import { User } from "../entity"

function save(user: User) {
    if (user) {
        sessionStorage.setItem(USER, JSON.stringify(user));
        sessionStorage.setItem(TOKEN, user.token);
    }
}

function getToken():string|null {
    return sessionStorage.getItem(TOKEN);
}

function getUser():User|null {
    const strUser = sessionStorage.getItem(USER);
    if (strUser) {
        return JSON.parse(strUser);
    }
    return null;
}

function clear() {
    sessionStorage.removeItem(USER);
    sessionStorage.removeItem(TOKEN);
}

export {
    save,
    getToken,
    getUser,
    clear,
}