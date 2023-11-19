import React from 'react'

// Mui
import Stack from '@mui/material/Stack'

// Components
import ContentBlock from '../../../common/components/ContentBlock'
import Typography from '../../../common/components/Typography'

// Utils
import { Colors } from '../../../common/utils/constants'

const WatchlistNoDataNotice = () => {
    return (
        <ContentBlock sx={{ p: 2, height: '100px', maxWidth: '550px' }}>
            <Stack>
                <Typography bold variant="subheader" align="center" color={Colors.primary}>
                    Your watchlist will appear here
                </Typography>
                <Typography variant="paragraph" align="center" color={Colors.primary}>
                    Add movies to your watchlist by clicking the bookmark icon
                    on the movie card!
                </Typography>
            </Stack>
        </ContentBlock>

    )
}

export default WatchlistNoDataNotice