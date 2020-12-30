const isUserLoggedIn = () => {
    const logged = localStorage.getItem('logged');
    if (logged) return true;
    return false;
}

const getUserLogin = () => {
    const user = localStorage.getItem('user');
    return JSON.parse(user);
}

const setUserLogin = (user) => {
    localStorage.setItem('logged', true);
    localStorage.setItem('user', JSON.stringify(user));
}

const setUserLogout = () => {
    localStorage.removeItem('logged');
    localStorage.removeItem('user');
}

export {
    isUserLoggedIn,
    getUserLogin,
    setUserLogout,
    setUserLogin
}