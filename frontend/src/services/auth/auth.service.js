import api from "../api";
import { handleError } from "../utils";

const isBrowser = typeof window !== `undefined`;

export const register = async (data) => {
    if (!isBrowser) return false;

    return await api
        .post(`/login/`, data)
        .then(function (response) {
            if (response.status === 200) {
                return {
                    status: true,
                    data: response.data,
                };
            }
        })
        .catch(function (error) {
            return handleError(error);
        });
};

export const login = async (data) => {
    if (!isBrowser) return false;

    return await api
        .post(`/login/`, data)
        .then(function (response) {
            if (response.status === 200) {
                return {
                    status: true,
                    data: response.data,
                };
            }
        })
        .catch(function (error) {
            return handleError(error);
        });
};

export const logout = async (data) => {
    if (!isBrowser) return false;

    return await api
        .post(`/logout/`, data)
        .then(function (response) {
            if (response.status === 201) {
                return {
                    status: true,
                    data: response.data,
                };
            }
        })
        .catch(function (error) {
            return handleError(error);
        });
};

const AuthService = {
    register,
    login,
    logout,
};

export default AuthService;