import { styled } from "@mui/material/styles";

// Utils
import { Colors } from "../../utils/constants"

// Mui
import Stack from "@mui/material/Stack";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CardMedia from "@mui/material/CardMedia";

// Components
import Button from '../../components/Button'

// Images
import StreamAILogo from '../../../assets/images/dark-stream-ai-ght.png'

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
    backgroundColor: Colors.greyLight,
    boxShadow: "none",
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: 240,
        width: `calc(100% - ${240}px)`,
        transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const MainAppBar = ({ open = false }) => {
    return (
        <AppBar position="fixed" open={open}>
            <Toolbar sx={{ bgcolor: Colors.primary }}>
                <CardMedia
                    component="img"
                    image={StreamAILogo}
                    alt="Stream AIght Logo"
                    sx={{ height: 40, width: 150, cursor: 'pointer' }}
                />
                <Stack
                    direction="row"
                    justifyContent="flex-end"
                    sx={{ width: "100%" }}
                    spacing={2}
                >
                    <Stack
                        direction="row"
                        alignItems="center"
                        justifyContent="flex-end"
                        spacing={2}
                    >
                        <Button variant="secondary">
                            Logout
                        </Button>
                        <Button
                            sx={{
                                bgcolor: Colors.accent,
                                color: Colors.white,
                                ":hover": {
                                    bgcolor: Colors.accent,
                                },
                            }}
                        >
                            Upgrade to Pro
                        </Button>
                    </Stack>
                </Stack>
            </Toolbar>
        </AppBar>
    );
};

export default MainAppBar;