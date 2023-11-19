import api from "../api";
import { handleError } from "../utils";

const isBrowser = typeof window !== `undefined`;

export const searchForMovie = async (data) => {
    if (!isBrowser) return false;

    return await api
        .get(`/login/`, data)
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

export const saveToWatchList = async (data) => {
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

export const removeFromWatchList = async (data) => {
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

export const generateSuggestions = async (data) => {
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

const MovieService = {
    searchForMovie,
    saveToWatchList,
    removeFromWatchList,
    generateSuggestions
};

export default MovieService;