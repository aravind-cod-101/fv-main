import {
    createAction
} from '@reduxjs/toolkit';

import {
    setUserLogin,
    setUserLogout
} from '../../util/localStorage';

const login = createAction("login");
const logout = createAction("logout");

const loginUser = (user) => {
    setUserLogin(user);
    return {
        type: login.type,
        payload: {
            ...user,
            logged: true,
        }
    }
}

const logoutUser = () => {
    setUserLogout();
    return {
        type: logout.type,
    }
}

export {
    loginUser,
    logoutUser,
    login,
    logout,
};