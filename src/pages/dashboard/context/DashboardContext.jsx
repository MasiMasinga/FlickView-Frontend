import { useState, useEffect, useContext, createContext } from "react";

// Movie Service
import MovieService from "../../../services/movie/movie.service";

// Context
import { StateContext } from "../../../common/context/StateContext";

export const DashboardContext = createContext();

export const DashboardProvider = ({ children }) => {
    const { setNotificationMessage } = useContext(StateContext);
    const [dataLoading, setDataLoading] = useState(false);
    const [watchlist, setWatchlist] = useState([])
    const [searchCredits, setSearchCredits] = useState(0);

    const [movieSearch, setMovieSearch] = useState("");
    const [movieResults, setMovieResults] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState("");
    const [suggestedMovies, setSuggestedMovies] = useState([]);
    const [recommendedMovies, setRecommendedMovies] = useState([]);
    const [isLoadingMovieSearch, setIsLoadingMovieSearch] = useState(false);
    const [isSuggestionsLoading, setIsSuggestionsLoading] = useState(false);

    useEffect(() => {
        handleGetSearchCredits();
    }, []);

    useEffect(() => {
        handleMovieSearch();
    }, [movieSearch]);

    useEffect(() => {
        if (suggestedMovies) {
            handleSearchForAllMovies();
        }
    }, [suggestedMovies]);

    const handleMovieSearch = async () => {
        setIsLoadingMovieSearch(true);
        const response = await MovieService.searchForMovie({ searchQuery: movieSearch })
        if (response) {
            setMovieResults(response.data);
            setIsLoadingMovieSearch(false);
        } else {
            setIsLoadingMovieSearch(false);
        }
    };

    const handleGenerateMovieSuggestions = async () => {
        setIsSuggestionsLoading(true);
        const response = await MovieService.generateSuggestions({ searchQuery: selectedMovie[0]?.title })
        if (response) {
            const moviesArray = response.data.split('\n');
            const formattedMovies = moviesArray.map(movie => movie.replace(/^\d+\.\s/, '').trim());
            setSuggestedMovies(formattedMovies);
            setIsSuggestionsLoading(false);
        } else {
            setIsSuggestionsLoading(false);
        }
    };

    const handleSearchForAllMovies = async () => {
        setDataLoading(true);

        for (const movie of suggestedMovies) {
            const response = await MovieService.searchForMovie({ searchQuery: movie });
            if (response) {
                setRecommendedMovies(response.data);
            }
        }
        setDataLoading(false);
    };

    const handleAddMovieToWatchlist = async () => { };

    const handleRemoveMovieFromWatchlist = async () => { };

    const handleGetSearchCredits = async () => { };

    const handleUpgradeToPro = async () => { };

    let value = {
        dataLoading,
        recommendedMovies,
        isSuggestionsLoading,
        isLoadingMovieSearch,
        movieSearch,
        setMovieSearch,
        movieResults,
        setSelectedMovie,
        suggestedMovies,
        watchlist,
        searchCredits,
        handleUpgradeToPro,
        handleAddMovieToWatchlist,
        handleRemoveMovieFromWatchlist,
        handleGenerateMovieSuggestions,
    }

    return (
        <DashboardContext.Provider value={value}>
            {children}
        </DashboardContext.Provider>
    );
};
