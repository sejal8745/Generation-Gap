import {
  createMuiTheme,
  MenuItem,
  TextField,
  ThemeProvider,
} from "@material-ui/core";
import React from "react";
import "./Header.css";
import Languages from "../../Components/Categories/Languages";

const Header = ({ languages, setLanguages, word, setWord, LightTheme}) => {
  const darkTheme = createMuiTheme({
    palette: {
      primary: {
        main: LightTheme?"#000": "#fff",
      },
      type: LightTheme?"light": "dark",
    },
  });


  const handleChange =(languages) => {
 setLanguages(languages);
 setWord("");
  }
  return (
    <div className="head">
      <span className="name">{word ? word : "Word Hunt"}</span>
      <div className="inputs">
        <ThemeProvider theme={darkTheme}>
          <TextField
            className="search"
            label="Search a Word"
            // label="Standard"
            value={word}
            onChange={(e) => setWord(e.target.value)}
          />
          <TextField
           className="select"
            select
            value={languages}
            onChange={(e) => handleChange(e.target.value)}
            label="Language"
          >
            {Languages.map((option) => (
              <MenuItem key={option.label} value={option.label}>
                {option.value}
              </MenuItem>
            ))}
          </TextField>
        </ThemeProvider>
      </div>
    </div>
  );
};

export default Header;
