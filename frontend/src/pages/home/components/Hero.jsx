import React from 'react'

// Mui
import Stack from '@mui/material/Stack'

// Components
import Button from '../../../common/components/Button'
import Typography from '../../../common/components/Typography'

// Utils
import { Colors } from '../../../common/utils/constants'

const Hero = () => {
    return (
        <Stack
            spacing={3}
            alignItems="center"
            justifyContent="center"
            sx={{
                p: { xs: 4, lg: 3 },
                height: { lg: '600px' }
            }}
        >
            <Typography
                align="center"
                variant="h2"
                color={Colors.primary}
                sx={{
                    maxWidth: '700px',
                    fontWeight: 700,
                    lineHeight: { xs: '1', lg: '1.375' },
                    letterSpacing: '-.05em',
                }}
            >
                Find your next movie or show 10x faster 🍿
            </Typography>
            <Typography
                align="center"
                bold
                color={Colors.greyDark}
                variant="h5"
                sx={{ maxWidth: '750px', lineHeight: '1.75rem' }}
            >
                Let AI find your next movie or show in seconds. Get 10 personalized recommendations
                based on movies and shows you've watched and enjoyed.
            </Typography>
            <Button href="/register">
                Try For Free!
            </Button>
        </Stack>
    )
}

export default Hero