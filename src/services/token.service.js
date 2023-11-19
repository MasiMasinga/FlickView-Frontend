const USER_KEY = "credibox-user";

const setUser = (user) => {
    localStorage.setItem(USER_KEY, JSON.stringify(user));
};

const getUser = () => {
    return JSON.parse(localStorage.getItem(USER_KEY));
};

const getLocalRefreshToken = () => {
    const user = getUser();
    return user?.refresh;
};

const getLocalAccessToken = () => {
    const user = getUser();
    return user?.access;
};

const updateLocalAccessToken = (token) => {
    const user = getUser();
    user.access = token;
    setUser(user);
};

const updateUser = (updatedDetails) => {
    let user = getUser();
    const newUser = {
        ...user,
        ...updatedDetails,
    };
    setUser(newUser);
};

const removeUser = () => {
    localStorage.removeItem(USER_KEY);
};

const TokenService = {
    getLocalRefreshToken,
    getLocalAccessToken,
    updateLocalAccessToken,
    getUser,
    setUser,
    updateUser,
    removeUser,
};
export default TokenService;