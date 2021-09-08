import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const NewsContext = createContext();

const apiKey = process.env.REACT_APP_API_KEY_NEWS_4;

export const NewsProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [articles, setArticles] = useState([]);
  const [newsTheme, setNewsTheme] = useState(["", "top-news"]);

  const todayDate = new Date().toISOString().slice(0, 10);
  console.log(todayDate);

  useEffect(() => {
    getTopNewsForTheme(newsTheme);
  }, [newsTheme]);

  const changeNewsTheme = (newTheme) => {
    setLoading(true);
    getTopNewsForTheme(newTheme);
  };

  const getTopNewsForTheme = async (newsTheme) => {
    const response = await axios.get(
      "http://localhost:8080/news/v1/" + newsTheme[0] + newsTheme[1]
    );
    // this goes to backend, gives error anyway for some reason, ask Benec?
    //const responsesWithNoTag = response.data.articles.filter(
    //  (article) => !article.description.includes("<")
    //);
    //    const responseWithNoTagAndLink = responsesWithNoTag.filter(
    //      (article) => !article.description.includes("www.")
    //    );
    setArticles(response.data.articles);
    setLoading(false);
  };
  return (
    <NewsContext.Provider
      value={{
        articles: articles,
        loading: loading,
        setArticles: setArticles,
        setLoading: setLoading,
        apiKey: apiKey,
        setNewsTheme: setNewsTheme,
        changeNewsTheme: changeNewsTheme,
      }}
    >
      {children}
    </NewsContext.Provider>
  );
};
