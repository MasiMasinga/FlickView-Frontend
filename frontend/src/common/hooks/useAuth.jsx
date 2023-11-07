import { useState, useContext } from 'react';

// React Router Dom
import { useNavigate } from 'react-router-dom';

// Api

// Context

const useAuth = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);

    const register = async (data) => {};

    const login = async (data) => {};

    const forgotPassword = async (data) => {};

    const resetPassword = async (data) => {};

    const logout = async () => {};

    return { register, login, logout, forgotPassword, resetPassword };
};

export default useAuth;