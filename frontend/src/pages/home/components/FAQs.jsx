import React from 'react'

// Mui
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'

// Components
import Typography from '../../../common/components/Typography'
import ContentBlock from '../../../common/components/ContentBlock'

// Utils
import { Colors } from '../../../common/utils/constants'

const FAQs = () => {
    return (
        <Stack sx={{ px: 4, py: 2 }} spacing={2}>
            <Typography variant="h4" mt align="center" color={Colors.primary}>
                Frequently Asked Questions
            </Typography>
            <Stack direction={{ xs: "column", lg: "row" }} spacing={2}>
                <ContentBlock sx={{ width: { xs: "100%", lg: "50%" } }}>
                    <Stack sx={{ p: 3 }}>
                        <Typography bold variant="paragraph" color={Colors.primary}>
                            How does StreamAIght work?
                        </Typography>
                        <Typography variant="paragraph" color={Colors.primary}>
                            StreamAIght uses a recommendation system powered by ChatGPT
                            to provide personalized movie and show recommendations.
                            It analyzes your input, preferences, and viewing history to
                            suggest the most suitable titles for you.
                        </Typography>
                    </Stack>
                </ContentBlock>
                <ContentBlock
                    sx={{
                        height: { xs: "240px", lg: "136px" },
                        width: { xs: "100%", lg: "50%" }
                    }}
                >
                    <Stack sx={{ p: 3 }}>
                        <Typography bold variant="paragraph" color={Colors.primary}>
                            Is there a limit to the number of recommendations I can get?
                        </Typography>
                        <Typography variant="paragraph" color={Colors.primary}>
                            Yes, there is a daily limit of 5 searches for each user.
                            If you find that you need more searches, you can consider
                            upgrading to our premium subscription.
                        </Typography>
                    </Stack>
                </ContentBlock>
            </Stack>
            <Stack direction={{ xs: "column", lg: "row" }} spacing={2}>
                <ContentBlock sx={{ width: { xs: "100%", lg: "50%" } }}>
                    <Stack sx={{ p: 3 }}>
                        <Typography bold variant="paragraph" color={Colors.primary}>
                            How are the recommendations generated?
                        </Typography>
                        <Typography variant="paragraph" color={Colors.primary}>
                            Recommendations are generated using advanced algorithms that
                            analyze your added titles and viewing history. ChatGPT
                            helps us understand your preferences, and we use this
                            data to suggest movies and shows you're likely to enjoy.
                        </Typography>
                    </Stack>
                </ContentBlock>
                <ContentBlock
                    sx={{
                        height: { xs: "240px", lg: "136px" },
                        width: { xs: "100%", lg: "50%" }
                    }}
                >
                    <Stack sx={{ p: 3 }}>
                        <Typography bold variant="paragraph" color={Colors.primary}>
                            Do I need an account to use the app?
                        </Typography>
                        <Typography variant="paragraph" color={Colors.primary}>
                            Yes, you'll need to create an account to access the full range
                            of features and receive personalized recommendations.
                            Account creation is simple and quick.
                        </Typography>
                    </Stack>
                </ContentBlock>
            </Stack>
        </Stack>
    )
}

export default FAQs