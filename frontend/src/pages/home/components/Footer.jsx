import React from 'react'

// Mui
import Stack from '@mui/material/Stack'
import CardMedia from '@mui/material/CardMedia'
import Divider from '@mui/material/Divider'

// Images
import StreamAightLogo from '../../../assets/images/stream-ai-ght-transparent.png'

// Utils
import { Colors } from '../../../common/utils/constants'

const Footer = () => {
    return (
        <Stack justifyContent="center" sx={{ px: 3, width: '100%' }}>
            <Divider sx={{ bgcolor: Colors.primary, height: '2px' }} />
            <Stack alignItems="center">
                <CardMedia
                    component="img"
                    image={StreamAightLogo}
                    alt="Stream AIght Logo"
                    sx={{ height: 100, width: 150, cursor: 'pointer' }}
                />
            </Stack>
        </Stack>
    )
}

export default Footer