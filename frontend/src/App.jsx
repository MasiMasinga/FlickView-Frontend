import React from 'react'

// Mui Context
import { ThemeProvider } from "@mui/material/styles";

// Context
import { StateProvider } from "./common/context/StateContext";
import { AuthProvider } from "./common/context/AuthContext";

// Snackbar
import { SnackbarProvider } from "notistack";

// Theme
import theme from "./common/theme/theme";

// Routes
import PageRoutes from "./routes/routes";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <SnackbarProvider maxSnack={3}>
                <StateProvider>
                    <AuthProvider>
                        <PageRoutes />
                    </AuthProvider>
                </StateProvider>
            </SnackbarProvider>
        </ThemeProvider>
    );
}

export default App;
