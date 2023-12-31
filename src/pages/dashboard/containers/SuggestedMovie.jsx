import React from 'react'

// Mui 
import Stack from '@mui/material/Stack'
import CardMedia from '@mui/material/CardMedia'
import IconButton from '@mui/material/IconButton'

// Mui Icons
import BookmarkRoundedIcon from '@mui/icons-material/BookmarkRounded';
import BookmarkBorderRoundedIcon from '@mui/icons-material/BookmarkBorderRounded'
import ThumbUpRoundedIcon from '@mui/icons-material/ThumbUpRounded';
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';

// Components
import ContentBlock from '../../../common/components/ContentBlock'
import Typography from '../../../common/components/Typography'

// Utils
import { Colors } from '../../../common/utils/constants';
import { truncate } from '../../../common/utils/helpers'

const SuggestedMovie = ({
    movie: {
        original_title,
        poster_path,
        release_date,
        overview,
        popularity
    },
    watchlist,
}) => {
    return (
        <ContentBlock sx={{ p: 3 }}>
            <Stack spacing={2}>
                <Stack direction="row" spacing={3}>
                    <Stack>
                        <CardMedia
                            component="img"
                            image={import.meta.env.VITE_APP_IMAGE_URL + poster_path}
                            alt="Movie"
                            sx={{ width: '100px', height: '100%', objectFit: 'contain' }}
                        />
                    </Stack>
                    <Stack>
                        <Stack direction="row" alignItems="center" justifyContent="space-between">
                            <Typography bold variant="paragraph" color={Colors.primary}>
                                {original_title}
                            </Typography>
                            {
                                watchlist ?
                                    <BookmarkRoundedIcon />
                                    :
                                    <BookmarkBorderRoundedIcon />

                            }
                        </Stack>
                        <Typography variant="paragraph" color={Colors.primary}>
                            {release_date}
                        </Typography>
                        <Typography variant="paragraph" mt>
                            {truncate(overview, 140)}
                        </Typography>
                    </Stack>
                </Stack>
                <Stack direction="row" spacing={2}>
                    <Stack direction="row" spacing={1}>
                        <ThumbUpRoundedIcon fontSize='12px' sx={{ color: Colors.greyDark }} />
                        <Typography variant="subtitle">
                            {popularity}% Liked this movie
                        </Typography>
                    </Stack>
                    <Stack direction="row" spacing={1}>
                        <PlayArrowRoundedIcon fontSize='12px' sx={{ color: Colors.greyDark }} />
                        <Typography variant="subtitle">
                            Play Trailer
                        </Typography>
                    </Stack>
                </Stack>
            </Stack>
        </ContentBlock>
    )
}

export default SuggestedMovie