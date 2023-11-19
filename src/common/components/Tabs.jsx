import React from "react";

// Components
import Button from "./Button";

// Mui
import Box from "@mui/material/Box";
import MuiTabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        "aria-controls": `simple-tabpanel-${index}`,
    };
}

const Tabs = ({
    tabs,
    activeTab,
    handleTabChange,
    actionBtnTitle = "",
    onActionBtnClick,
}) => {
    return (
        <Box
            sx={{
                borderBottom: 1,
                borderColor: "divider",
                display: "flex",
                flexDirection: { xs: "column-reverse", sm: "row" },
                justifyContent: "space-between",
            }}
        >
            <MuiTabs
                value={activeTab}
                onChange={handleTabChange}
                aria-label="tabs"
                sx={{ mt: actionBtnTitle !== "" ? 2 : 0 }}
            >
                {tabs.map((tab, index) => (
                    <Tab key={index} label={tab} {...a11yProps(index)} />
                ))}
            </MuiTabs>
            {actionBtnTitle !== "" && (
                <Button
                    sx={{ height: "fit-content" }}
                    onClick={onActionBtnClick}
                >
                    {actionBtnTitle}
                </Button>
            )}
        </Box>
    );
};

export default Tabs;
