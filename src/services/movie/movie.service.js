import api from "../api";
import { handleError } from "../utils";

const isBrowser = typeof window !== `undefined`;

export const saveToWatchList = async (data) => {
    if (!isBrowser) return false;

    return await api
        .post(`/watchlist/`, data)
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
        .delete(`/watchlist/`, data)
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

export const searchForMovie = async (query) => {
    if (!isBrowser) return false;

    return await api
        .post(`/movie/search`, query)
        .then(function (response) {
            if (response.status === 200) {
                return {
                    status: true,
                    data: response.data.movie,
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
        .post(`/movie/suggestion`, data)
        .then(function (response) {
            if (response.status === 200) {
                return {
                    status: true,
                    data: response.data.suggestion,
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