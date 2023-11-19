import React from "react";

// Mui
import Box from "@mui/material/Box";

const TabPanel = ({ value, index, other, children, padding, sx }) => {
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`tabpanel-${index}`}
            aria-labelledby={`tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: padding, ...sx }}>{children}</Box>
            )}
        </div>
    );
};

export default TabPanel;
