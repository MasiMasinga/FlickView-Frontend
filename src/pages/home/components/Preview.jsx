import React from 'react'

// Mui
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'

// Mui Icons
import SearchRoundedIcon from '@mui/icons-material/SearchRounded'
import WatchLaterRoundedIcon from '@mui/icons-material/WatchLaterRounded';
import LocalMoviesRoundedIcon from '@mui/icons-material/LocalMoviesRounded';

// Components
import Typography from '../../../common/components/Typography'

// Utils
import { Colors } from '../../../common/utils/constants'

const Preview = () => {
    return (
        <Stack sx={{ px: 8 }}>
            <Grid container spacing={3}>
                <Grid item xs={12} md={4}>
                    <Stack spacing={2}>
                        <Stack alignItems="center">
                            <SearchRoundedIcon fontSize='large' sx={{ color: Colors.primary }} />
                        </Stack>
                        <Typography bold align="center" variant="paragraph" color={Colors.primary}>
                            Effortless Movie Search
                        </Typography>
                        <Typography variant="paragraph" align="center" color={Colors.primary}>
                            Your users can easily search for their favorite movies or discover new ones using our intuitive search feature.
                            With a vast database at their fingertips, finding the perfect movie is a breeze.
                        </Typography>
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack spacing={2}>
                        <Stack alignItems="center">
                            <WatchLaterRoundedIcon fontSize='large' sx={{ color: Colors.primary }} />
                        </Stack>
                        <Typography bold align="center" variant="paragraph" color={Colors.primary}>
                            Personalized Watchlist
                        </Typography>
                        <Typography variant="paragraph" align="center" color={Colors.primary}>
                            Users can create and manage their personalized watchlist.
                            Save the movies you're excited to watch, and keep track of them all in one place.
                            Never miss a film you're looking forward to again.
                        </Typography>
                    </Stack>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Stack spacing={2}>
                        <Stack alignItems="center">
                            <LocalMoviesRoundedIcon fontSize='large' sx={{ color: Colors.primary }} />
                        </Stack>
                        <Typography bold align="center" variant="paragraph" color={Colors.primary}>
                            Interactive Movie Trailers
                        </Typography>
                        <Typography variant="paragraph" align="center" color={Colors.primary}>
                            Get a sneak peek before you watch.
                            View high-quality movie trailers directly within the app.
                            Explore the visual and audio highlights of each film to make informed choices
                            and get excited about your next movie night.
                        </Typography>
                    </Stack>
                </Grid>
            </Grid>
        </Stack>
    )
}

export default Preview