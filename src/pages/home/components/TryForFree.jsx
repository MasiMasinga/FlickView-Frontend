import React from 'react'

// Mui
import Stack from '@mui/material/Stack'

// Components
import ContentBlock from '../../../common/components/ContentBlock'
import Typography from '../../../common/components/Typography'
import Button from '../../../common/components/Button'

// Utils
import { Colors } from '../../../common/utils/constants'

const TryForFree = () => {
    return (
        <Stack alignItems="center" sx={{ p: 4, width: "100%" }}>
            {/* <ContentBlock
                sx={{
                    p: 3,
                    bgcolor: Colors.primary,
                    width: { xs: "400px", lg: "700px" }
                }}
            >
                <Typography variant="h4" align="center" color={Colors.white}>
                    Try for Free
                </Typography>
                <Typography variant="paragraph" align="center" color={Colors.greyLight}>
                    Get started with StreamAIght today
                </Typography>
                <Stack justifyContent="center" sx={{ p: 3 }}>
                    <Button variant='secondary' href='/register'>
                        Try for Free
                    </Button>
                </Stack>
            </ContentBlock> */}
        </Stack>
    )
}

export default TryForFree