import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const NewsContext = createContext();

export const NewsProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [articles, setArticles] = useState([]);
  const [newsTheme, setNewsTheme] = useState(["", "top-news"]);
  const [articlesLength, setArticlesLength] = useState(0);
  const [articlesIndex, setArticlesIndex] = useState(0);

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
    setArticles(response.data.articles);
    setArticlesLength(response.data.articles.length);
    setLoading(false);
  };
  return (
    <NewsContext.Provider
      value={{
        articles: articles,
        loading: loading,
        setArticles: setArticles,
        setLoading: setLoading,
        setNewsTheme: setNewsTheme,
        changeNewsTheme: changeNewsTheme,
        articlesLength: articlesLength,
        articlesIndex: articlesIndex,
        setArticlesIndex: setArticlesIndex,
      }}
    >
      {children}
    </NewsContext.Provider>
  );
};
