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

// Images
import Movie from '../../../assets/images/tWsNYbrqy1p1w6K9zRk0mSchztT.jpg'


const SuggestedMovie = ({
    movie: {
        movieName,
        image,
        year,
        description,
        likes,
        trailer
    },
    watchlist
}) => {
    return (
        <ContentBlock sx={{ p: 3 }}>
            <Stack spacing={2}>
                <Stack direction="row" spacing={3}>
                    <Stack>
                        <CardMedia
                            component="img"
                            image={image}
                            alt="Movie"
                            sx={{ width: '100px', height: '100%' }}
                        />
                    </Stack>
                    <Stack>
                        <Stack direction="row" alignItems="center" justifyContent="space-between">
                            <Typography bold variant="paragraph" color={Colors.primary}>
                                {movieName}
                            </Typography>
                            {
                                watchlist ?
                                <BookmarkRoundedIcon />

                                    :
                                    <BookmarkBorderRoundedIcon />

                            }
                        </Stack>
                        <Typography variant="paragraph" color={Colors.primary}>
                            {(year)}
                        </Typography>
                        <Typography variant="paragraph" mt>
                            {description}
                        </Typography>
                    </Stack>
                </Stack>
                <Stack direction="row" spacing={2}>
                    <Stack direction="row" spacing={1}>
                        <ThumbUpRoundedIcon fontSize='12px' sx={{ color: Colors.greyDark }} />
                        <Typography variant="subtitle">
                            {likes}% Liked this movie
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