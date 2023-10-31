import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

// Global Styles
import { Global, css } from "@emotion/react";
import CssBaseline from "@mui/material/CssBaseline";

const GlobalStyle = css`
    html {
        scroll-behavior: smooth;
    }

    body {
        font-family: "Poppins", sans-serif;
        font-weight: 400;
        margin: 0;
    }

    .SnackbarContent-root {
        .SnackbarItem-message {
            font-family: "Poppins", sans-serif;
            font-size: 14px;
        }
        .MuiSvgIcon-root {
            color: white !important;
        }
    }
`;


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Global styles={GlobalStyle} />
        <CssBaseline />
        <App />
    </React.StrictMode>,
)
