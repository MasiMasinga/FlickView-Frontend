import React from 'react'

// Mui
import Stack from '@mui/material/Stack'
import CardMedia from "@mui/material/CardMedia";
import useMediaQuery from "@mui/material/useMediaQuery";
import useTheme from "@mui/material/styles/useTheme";
import Link from "@mui/material/Link";

// Components
import Button from '../../../common/components/Button';
import NavbarDrawer from './NavbarDrawer';

// Images
import StreamAILogo from '../../../assets/images/stream-ai-ght-transparent.png'

const Navbar = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    return (
        <Stack direction="row" justifyContent="space-between" sx={{ p: 2, px: { lg: 10 } }}>
            <Stack justifyContent="center">
                <Link href='/'>
                    <CardMedia
                        component="img"
                        image={StreamAILogo}
                        alt="Stream AIght Logo"
                        sx={{ height: 40, width: 150, cursor: 'pointer' }}
                    />
                </Link>
            </Stack>
            {
                isMobile ?
                    <NavbarDrawer />
                    : (
                        <Stack direction="row" spacing={2}>
                            <Button variant='plain' href='/pricing'>Pricing</Button>
                            <Button variant='plain' href='/login'>Sign In</Button>
                            <Button href='/register'>Try for Free</Button>
                        </Stack>
                    )
            }
        </Stack>
    )
}

export default Navbar