import React from "react";

// Mui
import Box from "@mui/material/Box";

// React Router Dom
import { Outlet } from "react-router-dom";

// Components
import MainAppBar from "./components/MainAppBar";

const DashboardLayout = () => {
    return (
        <Box sx={{ display: 'flex' }}>
            <MainAppBar />
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    pt: 6,
                    width: "100%",
                    minHeight: "100vh",
                    position: "relative",
                }}
            >
                <Outlet />
            </Box>
        </Box>
    )
}

export default DashboardLayout