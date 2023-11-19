import { useState, useEffect, createContext } from "react";

export const DashboardContext = createContext();

export const DashboardProvider = ({ children }) => {
    const [dataLoading, setDataLoading] = useState(false)
    const [movieSearch, setMovieSearch] = useState('')
    const [watchlist, setWatchlist] = useState([])
    const [searchCredits, setSearchCredits] = useState(0)

    useEffect(() => {
        handleGetWatchlist();
        handleGetSearchCredits();
    }, []);

    const handleMovieSearch = async () => { };

    const handleGetWatchlist = async () => { };

    const handleGetSearchCredits = async () => { };

    const handleUpgradeToPro = async () => { };

    let value = {
        dataLoading,
        movieSearch,
        watchlist,
        searchCredits,
        handleMovieSearch,
        handleGetWatchlist,
        handleUpgradeToPro
    }

    return (
        <DashboardContext.Provider value={value}>
            {children}
        </DashboardContext.Provider>
    );
};
