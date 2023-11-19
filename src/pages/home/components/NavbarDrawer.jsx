import React, { useState } from "react";

// Mui
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";

// Mui Icons
import MenuIcon from "@mui/icons-material/Menu";

// Components
import Button from "../../../common/components/Button";

// Utils
import { Colors } from "../../../common/utils/constants";

function NavbarDrawer() {
    const [openDrawer, setOpenDrawer] = useState(false);
    return (
        <>
            <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
                <List sx={{ width: '250px' }}>
                    <ListItem onClick={() => setOpenDrawer(false)}>
                        <Button href="/register" fullWidth>
                            Try for Free
                        </Button>
                    </ListItem>
                    <ListItem
                        onClick={() => setOpenDrawer(false)}
                        sx={{ justifyContent: "center" }}
                    >
                        <Button href='/login' fullWidth variant="plain">
                            Sign In
                        </Button>
                    </ListItem>
                    <Divider />
                    <ListItem onClick={() => setOpenDrawer(false)}>
                        <ListItemButton href="/pricing">
                            <ListItemText>Pricing</ListItemText>
                        </ListItemButton>
                    </ListItem>
                    <Divider />
                </List>
            </Drawer>
            <IconButton disableFocusRipple onClick={() => setOpenDrawer(!openDrawer)}>
                <MenuIcon sx={{ color: Colors.black }} />
            </IconButton>
        </>
    );
}
export default NavbarDrawer;