import { useState, useContext } from 'react';

// React Router Dom
import { useNavigate } from 'react-router-dom';

// Api
import AuthService from '../../services/auth/auth.service';

// Context
import { StateContext } from '../../common/context/StateContext'

const useAuth = () => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const { setNotificationMessage } = useContext(StateContext)

    const register = async (data) => {
        setLoading(true);
        const { status } = await AuthService.register(data);
        if (status === 201) {
            setNotificationMessage({
                message: "User registered successfully. Please login to continue.",
                severity: "success",
            });
            navigate("/login");
        } else {
            setNotificationMessage({
                message: "Something went wrong. Please try again.",
                severity: "error",
            });
        }
    };

    const login = async (data) => {
        setLoading(true);
        const { status } = await AuthService.login(data);
        if (status === 200) {
            setUser(data);
            setNotificationMessage({
                message: "User logged in successfully.",
                severity: "success",
            });
            navigate("/dashboard");
        } else {
            setNotificationMessage({
                message: "Something went wrong. Please try again.",
                severity: "error",
            });
        }
    };

    const forgotPassword = async (data) => {
        setLoading(true);
        const { status } = await AuthService.forgotPassword(data);
        if (status === 200) {
            setNotificationMessage({
                message: "Password reset link sent to your email.",
                severity: "success",
            });
        } else {
            setNotificationMessage({
                message: "Something went wrong. Please try again.",
                severity: "error",
            });
        }
    };

    const resetPassword = async (data) => {
        setLoading(true);
        const { status } = await AuthService.resetPassword(data);
        if (status === 200) {
            setNotificationMessage({
                message: "Password reset successfully. Please login with your new password.",
                severity: "success",
            });
            navigate("/login");
        } else {
            setNotificationMessage({
                message: "Something went wrong. Please try again.",
                severity: "error",
            });
        }
    };

    const logout = async () => {
        setLoading(true);
        const { status } = await AuthService.logout();
        if (status === 200) {
            setUser(null);
            setNotificationMessage({
                message: "User logged out successfully.",
                severity: "success",
            });
            navigate("/login");
        } else {
            setNotificationMessage({
                message: "Something went wrong. Please try again.",
                severity: "error",
            });
        }
    };

    return { loading, user, register, login, logout, forgotPassword, resetPassword };
};

export default useAuth;