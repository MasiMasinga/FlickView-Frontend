import React from 'react'

// Mui
import Stack from '@mui/material/Stack'

// Components
import ContentBlock from '../../../common/components/ContentBlock'
import Typography from '../../../common/components/Typography'

// Utils
import { Colors } from '../../../common/utils/constants'

const MovieSuggestionNotice = () => {
    return (
        <ContentBlock
            sx={{
                p: 2,
                height: { xs: '140px', md: '100px' },
                maxWidth: '550px'
            }}
        >
            <Stack>
                <Typography bold variant="subheader" align="center" color={Colors.primary}>
                    Your movie suggestions will appear here
                </Typography>
                <Typography variant="paragraph" align="center" color={Colors.primary}>
                    Fill in the fields on the left side, press the search button
                    and our AI will suggest movies for you!
                </Typography>
            </Stack>
        </ContentBlock>
    )
}

export default MovieSuggestionNotice