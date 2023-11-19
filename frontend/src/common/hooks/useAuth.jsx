import { useState, useContext } from 'react';

// React Router Dom
import { useNavigate } from 'react-router-dom';

// Api
import AuthService from '../../services/auth/auth.service';

// Context
import { StateContext } from '../../common/context/StateContext'

const useAuth = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const { setNotificationMessage } = useContext(StateContext)

    const register = async (data) => { };

    const login = async (data) => { };

    const forgotPassword = async (data) => { };

    const resetPassword = async (data) => { };

    const logout = async () => { };

    return { register, login, logout, forgotPassword, resetPassword };
};

export default useAuth;