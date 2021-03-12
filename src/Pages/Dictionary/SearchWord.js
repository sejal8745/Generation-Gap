import React, { useEffect, useState } from "react";
import axios from "axios";
// import "./SearchWord.css";
import Container from "@material-ui/core/Container";
import Header from "../../Components/DicHeader/Header";
import Definition from "../../Components/Definitions/Definition";
import { Switch, withStyles } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";

function SearchWord() {
  const [word, setWord] = useState("");
  const [meanings, setMeanings] = useState([]);
  const [languages, setLanguages] = useState("en");
  const [LightTheme, setLightTheme] = useState(false);

  const DarkMode = withStyles({
    switchBase: {
      color: grey[300],
      "&$checked": {
        color: grey[500],
      },
      "&$checked + $track": {
        backgroundColor: grey[500],
      },
    },
    checked: {},
    track: {},
  })(Switch);

  const dictionaryApi = async () => {
    try {
      const data = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/${languages}/${word}`
      );

      console.log(data);
      setMeanings(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  // console.log(meanings);

  useEffect(() => {
    dictionaryApi();
    // eslint-disable-next-line
  }, [word, languages]);

  return (
    <div
      className="searchWord"
      style={{
        height: "100vh",
        backgroundColor: LightTheme ? "#fff" : "#282c34",
        color: LightTheme ? "black": "whitesmoke",
        transition: "all 0.5s linear",
      }}
    >
      <Container className="container" maxWidth="md">
        <div
          style={{ position: "absolute", top: 0, right: 15, paddingTop: 10 }}
        >
          <span>{LightTheme ? "Light" : "Dark"} Mode</span>
          <DarkMode
            checked={LightTheme}
            onChange={() => setLightTheme(!LightTheme)}
          />
        </div>
        <Header
          languages={languages}
          setLanguages={setLanguages}
          word={word}
          setWord={setWord}
          LightTheme={LightTheme}
        />
        {meanings && (
          <Definition word={word} meanings={meanings} languages={languages} LightTheme={LightTheme} />
        )}{" "}
      </Container>
    </div>
  );
}

export default SearchWord;
