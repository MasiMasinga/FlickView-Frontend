import React, { useState } from "react";

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
      <div className="mx-auto w-screen px-6 relative">
        <div className="py-4">
          <div className="flex justify-start">
            <a href="/">
              <img
                src={StreamAILogo}
                className="h-36 w-auto"
                alt="Stream AIght Logo"
              />
            </a>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="w-2/4	border border-black-800" />
      </div>

      <main className="mb-80">
        <div className="container mx-auto m-12">
          <h1 className="font-sans text-3xl font-bold text-center mb-4">
            Let AI find your next movie or show
          </h1>
          <p className="font-sans text-lg text-center px-24">
            Enter the title of the movies or shows you last watched and enjoyed.
            Please separate each title with a comma. The more titles you add to
            the list, the better the recommendations.
          </p>
          <form
            className="flex justify-center mt-8"
            onSubmit={handleMovieSearch}
          >
            <input
              className="p-2.5 w-2/5 border-2 border-black-600 rounded-tl-md	rounded-bl-md rounded-tr-none	rounded-br-none"
              type="text"
              name="title"
              placeholder="Breaking Bad, Narcos, Snowfall.."
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <button
              className="bg-neutral-800 text-white rounded-bl-none rounded-tl-none"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
        <div className="flex justify-center">
          <ul className="my-2">
            <li className="px-60">{data.data}</li>
          </ul>
        </div>
      </main>
      <footer className="p-6">
        <div className="flex justify-center">
          <div className="w-2/4	border border-black-800" />
        </div>
        <div className="p-4 m-4 flex justify-center">
          <p>
            Built by:
            <a
              href="https://masimasinga.netlify.app/"
              className="text-stone-800 mx-1"
            >
              Masi
            </a>
          </p>
        </div>
      </footer>
    </HelmetProvider>
  );
}

export default App;
