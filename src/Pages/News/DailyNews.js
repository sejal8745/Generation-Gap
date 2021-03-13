import React from "react";
import { NewsContextProvider } from "./NewsContext";
import "./DailyNews.css";
import News from "../../Components/News/News";

function DailyNews() {
  return (
    <NewsContextProvider>
      <News />
    </NewsContextProvider>
  );
}

export default DailyNews;