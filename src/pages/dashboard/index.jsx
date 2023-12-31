import React, { useState, useContext } from "react";

// Mui
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import Autocomplete from '@mui/material/Autocomplete';

// Context
import { DashboardContext } from "./context/DashboardContext";

// Helmet
import { Helmet } from "react-helmet-async";

// Components
import Typography from '../../common/components/Typography'
import Button from "../../common/components/Button";
import ContentBlock from '../../common/components/ContentBlock'
import InputField from '../../common/components/InputField'

// Utils
import { Colors } from "../../common/utils/constants";
import Tabs from "../../common/components/Tabs";
import TabPanel from "../../common/components/TabPanel";
import Watchlist from "./containers/Watchlist";
import NewMovie from "./containers/NewMovie";

const Dashboard = () => {
    const {
        isLoadingMovieSearch,
        isSuggestionsLoading,
        movieResults,
        movieSearch,
        setMovieSearch,
        setSelectedMovie,
        handleGenerateMovieSuggestions
    } = useContext(DashboardContext);
    const [activeTab, setActiveTab] = useState(0);

    const handleChange = (_event, newValue) => {
        setActiveTab(newValue);
    };

    return (
        <>
            <Helmet>
                <title>FlickView</title>
                <link
                    rel="canonical"
                    href="https://http://streamaight.s3-website-us-east-1.amazonaws.com/"
                />
            </Helmet>
            <Grid container >
                <Grid item xs={12} md={4}>
                    <ContentBlock>
                        <Stack spacing={1} sx={{ p: 3 }}>
                            <Typography bold variant="subheader" color={Colors.primary}>
                                Search for your next movie here
                            </Typography>
                            <Divider />
                            <Typography bold variant="h6" color={Colors.primary}>
                                Add your favorite movies
                            </Typography>
                            <Autocomplete
                                multiple
                                id="movie-search"
                                loading={isLoadingMovieSearch}
                                loadingText="Searching for movies..."
                                options={movieResults}
                                getOptionLabel={(option) => option.title}
                                onChange={(_event, value) => setSelectedMovie(value)}
                                renderOption={(props, option) => (
                                    <Box component="li" {...props} key={option.id}>
                                        {option.title}
                                    </Box>
                                )}
                                renderInput={(params) => (
                                    <InputField
                                        {...params}
                                        label="What movies have you enjoyed?"
                                        value={movieSearch}
                                        onChange={(event) => setMovieSearch(event.target.value)}
                                    />
                                )}
                            />
                            <Typography bold variant="paragraph" color={Colors.red}>
                                5 searches left. Upgrade for more.
                            </Typography>
                            <Button
                                onClick={handleGenerateMovieSuggestions}
                                disabled={isSuggestionsLoading}
                            >
                                Search
                            </Button>
                        </Stack>
                    </ContentBlock>
                </Grid>
                <Grid item xs={12} md={8}>
                    <Stack sx={{ p: 3 }}>
                        <ContentBlock sx={{ p: 2 }}>
                            <Tabs
                                tabs={["New", "Watchlist"]}
                                activeTab={activeTab}
                                handleTabChange={handleChange}
                            />
                            <TabPanel value={activeTab} index={0}>
                                <NewMovie />
                            </TabPanel>
                            <TabPanel value={activeTab} index={1}>
                                <Watchlist />
                            </TabPanel>
                        </ContentBlock>
                    </Stack>
                </Grid>
            </Grid>
        </>
    )
}

export default Dashboard