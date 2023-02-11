import React, { useState } from "react";

// Mui
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import CardMedia from "@mui/material/CardMedia";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import CircularProgress from "@mui/material/CircularProgress";

// Mui Icons
import SearchIcon from "@mui/icons-material/Search";

// Axios
import axios from "axios";

// Helmet
import { Helmet, HelmetProvider } from "react-helmet-async";

// Components
import Button from "./components/Button";
import Typography from "./components/Typography";
import Divider from "./components/Divider";

// Images
import StreamAILogo from "./assets/images/stream-ai-ght-transparent.png";

function App() {
  const [data, setData] = useState("");
  const [text, setText] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleMovieSearch = (event) => {
    event.preventDefault();
    setLoading(true);
    axios
      .post("https://stream-aight-api.onrender.com/api", { body: text })
      .then((res) => {
        setLoading(false);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <HelmetProvider>
      <Helmet>
        <title>Stream AI-ght</title>
        <link
          rel="canonical"
          href="https://http://streamaight.s3-website-us-east-1.amazonaws.com/"
        />
      </Helmet>
      <Stack sx={{ height: "100vh", width: "100vw" }}>
        <Stack sx={{ mx: 5 }}>
          <CardMedia
            component="img"
            image={StreamAILogo}
            alt="Stream AIght Logo"
            sx={{ height: 100, width: 150 }}
          />
        </Stack>

        <Divider />

        <Container sx={{ my: 5 }}>
          <Typography variant="h5" align="center" component="h1" mb bold>
            Let AI find your next movie or show
          </Typography>

          <Typography
            variant="body2"
            align="center"
            mb
            sx={{ px: { xs: 0, md: 30 } }}
          >
            Enter the title of the movies or shows you last watched and enjoyed.
            Please separate each title with a comma. The more titles you add to
            the list, the better the recommendations.
          </Typography>

          <Stack direction="row" justifyContent="center">
            <Stack sx={{ my: 3, px: 10, width: { xs: "100%", md: "50%" } }}>
              <FormControl fullWidth sx={{ my: 1 }}>
                <InputLabel htmlFor="outlined-adornment-amount">
                  Search
                </InputLabel>
                <OutlinedInput
                  startAdornment={<SearchIcon />}
                  label="Search"
                  placeholder="Breaking Bad, Narcos, Snowfall.."
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                />
              </FormControl>
              <Stack>
                <Button onClick={handleMovieSearch} title="Search" />
              </Stack>
            </Stack>
          </Stack>

          <Stack direction="row" justifyContent="center">
            {loading ? (
              <CircularProgress />
            ) : (
              <Stack sx={{ my: 2, px: 10, width: "50%" }}>
                <Typography variant="h6" align="center">
                  {data.data}
                </Typography>
              </Stack>
            )}
          </Stack>
        </Container>

        <Divider sx={{ width: "50%", alignSelf: "center", pb: 3 }} />

        <Stack sx={{ py: 5 }}>
          <Typography variant="h6" align="center">
            Built by{""}
            <a href="https://www.linkedin.com/in/masibonge-masinga-a4282a10b/">
              Masi
            </a>
          </Typography>
        </Stack>
      </Stack>
    </HelmetProvider>
  );
}

export default App;
