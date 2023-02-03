import React, { useState } from "react";

// Mui
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Input from "@mui/material/Input";
import OutlinedInput from "@mui/material/OutlinedInput";

// Mui Icons
import SearchIcon from "@mui/icons-material/Search";

// Axios
import axios from "axios";

// Helmet
import { Helmet, HelmetProvider } from "react-helmet-async";

// Images
import StreamAILogo from "./assets/images/stream-ai-ght-transparent.png";

function App() {
  const [data, setData] = useState("");
  const [text, setText] = useState([]);

  const handleMovieSearch = (event) => {
    event.preventDefault();
    axios
      .post("https://stream-aight-api.onrender.com/api", { body: text })
      .then((res) => {
        console.log(res.data);
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
        <link rel="canonical" href="https://www.stream-aight.ai/" />
      </Helmet>
      <Stack sx={{ height: "100vh", width: "100vw" }}>
        <Stack sx={{ mt: 2 }}>
          <Stack sx={{ mx: 5 }}>
            <CardMedia
              component="img"
              image={StreamAILogo}
              alt="Stream AIght Logo"
              sx={{ height: 150, width: 150 }}
            />
          </Stack>
        </Stack>

        <Divider sx={{ width: "50%", alignSelf: "center" }} />

        <Container sx={{ mt: 5 }}>
          <Typography
            variant="h5"
            align="center"
            component="h1"
            gutterBottom
            sx={{ fontWeight: "bold" }}
          >
            Let AI find your next movie or show
          </Typography>

          <Typography
            variant="body2"
            align="center"
            gutterBottom
            sx={{ px: { xs: 0, md: 30 } }}
          >
            Enter the title of the movies or shows you last watched and enjoyed.
            Please separate each title with a comma. The more titles you add to
            the list, the better the recommendations.
          </Typography>

          <Stack direction="row" justifyContent="center">
            <Stack sx={{ my: 3, px: 10, width: {xs: '100%', md: "50%"} }}>
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
                <Button
                  onClick={handleMovieSearch}
                  variant="contained"
                  sx={{
                    bgcolor: "#213547",
                    borderColor: "#213547",
                    ":hover": { bgcolor: "#213547", borderColor: "#213547" },
                  }}
                >
                  Search
                </Button>
              </Stack>
            </Stack>
          </Stack>

          <Stack direction="row" justifyContent="center">
            <Stack sx={{ my: 2, px: 10, width: "50%" }}>
              <Typography
                variant="h6"
                align="center"
                component="h1"
                gutterBottom
              >
                {data.data}
              </Typography>
            </Stack>
          </Stack>
        </Container>

        <Divider sx={{ width: "50%", alignSelf: "center", pb: 5 }} />

        <Stack sx={{ py: 5 }}>
          <Typography variant="h6" align="center" component="h1" gutterBottom>
            Built by{" "}
            <a href="https://www.linkedin.com/in/andrew-oliver-/">Masi</a>
          </Typography>
        </Stack>
      </Stack>
    </HelmetProvider>
  );
}

export default App;
