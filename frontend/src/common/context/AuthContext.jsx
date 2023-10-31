import { useState, useEffect, createContext } from "react";


export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const loadAuthUser = () => { }

    let value = {
        user,
        isAuthenticated,
        setIsAuthenticated,
        loadAuthUser,
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};
