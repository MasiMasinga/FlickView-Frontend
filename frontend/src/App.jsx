import React from 'react'

// Mui Context
import { ThemeProvider } from "@mui/material/styles";

// Context
import { StateProvider } from "./common/context/StateContext";
import { AuthProvider } from "./common/context/AuthContext";

// React Helmet
import { HelmetProvider } from "react-helmet-async";

// Snackbar
import { SnackbarProvider } from "notistack";

// Theme
import theme from "./common/theme/theme";

// Routes
import PageRoutes from "./routes/routes";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <HelmetProvider>
                <SnackbarProvider maxSnack={3}>
                    <StateProvider>
                        <AuthProvider>
                            <PageRoutes />
                        </AuthProvider>
                    </StateProvider>
                </SnackbarProvider>
            </HelmetProvider>
        </ThemeProvider>
    );
}

export default App;
