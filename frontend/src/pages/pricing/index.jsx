import React from 'react'

// Mui
import Stack from '@mui/material/Stack'
import Divider from '@mui/material/Divider'

// Mui Icons
import CheckRoundedIcon from '@mui/icons-material/CheckRounded'

// Components
import Navbar from '../home/components/Navbar'
import Footer from '../home/components/Footer'
import Typography from '../../common/components/Typography'
import Button from '../../common/components/Button'
import ContentBlock from '../../common/components/ContentBlock'

// Utils
import { Colors } from '../../common/utils/constants'

const Pricing = () => {
    return (
        <>
            <Navbar />
            <Stack
                spacing={3}
                alignItems="center"
                justifyContent="center"
                sx={{
                    p: { xs: 4, lg: 3 },
                }}
            >
                <Typography
                    align="center"
                    variant="h3"
                    color={Colors.primary}
                    sx={{
                        maxWidth: '700px',
                        fontWeight: 700,
                        lineHeight: { xs: '1', lg: '1.375' },
                        letterSpacing: '-.05em',
                    }}
                >
                    Stop scrolling through "curated" lists looking for the perfect movie
                </Typography>
                <Typography
                    align="center"
                    bold
                    color={Colors.greyDark}
                    variant="h5"
                    sx={{ maxWidth: '750px', lineHeight: '1.75rem' }}
                >
                    If you're looking for a movie but are tired of scrolling through endless results,
                    let our AI generate a personalized list in seconds.
                    Find the perfect movie based on what you like and make movie night a hit.
                </Typography>
                <Button href="/register">
                    First 5 Searches Free. Try Now!
                </Button>
            </Stack>
            <Stack justifyContent="center" sx={{ py: 3 }}>
                <Stack direction={{ xs: "column", lg: "row" }} justifyContent="center" spacing={3} sx={{ p: { xs: 3, lg: 0 } }}>
                    <ContentBlock sx={{ p: 3, height: { xs: "400px", lg: "500px" }, width: { xs: "100%", lg: '500px' } }}>
                        <Stack spacing={2}>
                            <Typography variant="h5">
                                👋 Trial
                            </Typography>
                            <Divider />
                            <Typography variant="h3">
                                Free
                            </Typography>
                            <Button
                                href="/register"
                                sx={{
                                    bgcolor: Colors.accent,
                                    borderColor: Colors.accent,
                                    "&:hover": {
                                        bgcolor: Colors.accent,
                                        borderColor: Colors.accent,
                                    },
                                }}
                            >
                                Try for Free
                            </Button>
                            <Typography bold color={Colors.greyDark} sx={{ textTransform: 'uppercase' }}>
                                What you get:
                            </Typography>
                            <Stack spacing={2}>
                                <Stack direction="row" spacing={1}>
                                    <CheckRoundedIcon fontSize='small'
                                        sx={{ p: '4px', bgcolor: Colors.green, borderRadius: '12px', color: Colors.white }}
                                    />
                                    <Typography variant="link" sx={{ fontWeight: 400 }}>
                                        5 personalized searches
                                    </Typography>
                                </Stack>
                                <Stack direction="row" spacing={1}>
                                    <CheckRoundedIcon fontSize='small'
                                        sx={{ p: '4px', bgcolor: Colors.green, borderRadius: '12px', color: Colors.white }} />
                                    <Typography variant="link" sx={{ fontWeight: 400 }}>
                                        Personal AI movie picker
                                    </Typography>
                                </Stack>
                            </Stack>
                        </Stack>
                    </ContentBlock>
                    <ContentBlock sx={{ p: 3, height: "500px", width: { xs: "100%", lg: '500px' } }}>
                        <Stack spacing={2}>
                            <Typography variant="h5">
                                🎥 Unlimited Pass
                            </Typography>
                            <Divider />
                            <Stack direction="row" alignItems="baseline" spacing={1}>
                                <Typography variant="h3">
                                    R100
                                </Typography>
                                <Typography variant="paragraph" sx={{ alignItems: "baseline" }}>
                                    one-time payment
                                </Typography>
                            </Stack>
                            <Button href="/register">
                                Buy Now
                            </Button>
                            <Typography bold color={Colors.greyDark} sx={{ textTransform: 'uppercase' }}>
                                What you get:
                            </Typography>
                            <Stack spacing={2}>
                                <Stack direction="row" spacing={1}>
                                    <CheckRoundedIcon fontSize='small'
                                        sx={{ p: '4px', bgcolor: Colors.green, borderRadius: '12px', color: Colors.white }}
                                    />
                                    <Typography variant="link" sx={{ fontWeight: 400 }}>
                                        Lifetime AI access
                                    </Typography>
                                </Stack>
                                <Stack direction="row" spacing={1}>
                                    <CheckRoundedIcon fontSize='small'
                                        sx={{ p: '4px', bgcolor: Colors.green, borderRadius: '12px', color: Colors.white }}
                                    />
                                    <Typography variant="link" sx={{ fontWeight: 400 }}>
                                        Always access to your watchlist
                                    </Typography>
                                </Stack>
                                <Stack direction="row" spacing={1}>
                                    <CheckRoundedIcon fontSize='small'
                                        sx={{ p: '4px', bgcolor: Colors.green, borderRadius: '12px', color: Colors.white }}
                                    />
                                    <Typography variant="link" sx={{ fontWeight: 400 }}>
                                        Unlimited movie searches
                                    </Typography>
                                </Stack>
                                <Stack direction="row" spacing={1}>
                                    <CheckRoundedIcon fontSize='small'
                                        sx={{ p: '4px', bgcolor: Colors.green, borderRadius: '12px', color: Colors.white }}
                                    />
                                    <Typography variant="link" sx={{ fontWeight: 400 }}>
                                        Personalized AI movie picker
                                    </Typography>
                                </Stack>
                                <Stack direction="row" spacing={1}>
                                    <CheckRoundedIcon fontSize='small'
                                        sx={{ p: '4px', bgcolor: Colors.green, borderRadius: '12px', color: Colors.white }}
                                    />
                                    <Typography variant="link" sx={{ fontWeight: 400 }}>
                                        One-time payment
                                    </Typography>
                                </Stack>
                                <Stack direction="row" spacing={1}>
                                    <CheckRoundedIcon fontSize='small'
                                        sx={{ p: '4px', bgcolor: Colors.green, borderRadius: '12px', color: Colors.white }}
                                    />
                                    <Typography variant="link" sx={{ fontWeight: 400 }}>
                                        No subscription
                                    </Typography>
                                </Stack>
                            </Stack>
                        </Stack>
                    </ContentBlock>
                </Stack>
            </Stack>
            <Footer />
        </>
    )
}

export default Pricing