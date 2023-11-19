import React, { useContext } from 'react'

// Context
import { DashboardContext } from '../context/DashboardContext'

// Mui
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'

// Components
import ContentBlock from '../../../common/components/ContentBlock'
import SuggestedMovie from './SuggestedMovie'
import WatchlistNoDataNotice from '../components/WatchlistNoDataNotice'
import Loader from '../../../common/components/Loader'


const Watchlist = () => {
    const { dataLoading, watchlist } = useContext(DashboardContext)

    return (
        <ContentBlock
            sx={{
                p: 2,
                bgcolor: '#E2E8F0',
                display: 'flex',
                borderRadius: 0,
                height: watchlist.length > 0 ? '100%' : 'calc(100vh - 170px)'
            }}
        >
            {
                dataLoading ? (
                    <Loader />
                ) : watchlist.length > 0 ? (
                    watchlist.map((movie, index) => (
                        <Grid item xs={12} md={6} key={index}>
                            <SuggestedMovie movie={movie} />
                        </Grid>
                    ))
                ) : (
                    <Stack
                        alignItems="center"
                        justifyContent="center"
                        sx={{ width: '100%', p: 3 }}
                    >
                        <WatchlistNoDataNotice />
                    </Stack>
                )
            }
        </ContentBlock>
    )
}

export default Watchlist