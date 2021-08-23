import React, { useState, useEffect } from "react";
import axios from "axios";

export const News = () => {
  const [articlesIndex, setArticlesIndex] = useState(0);

  const [articles, setArticles] = useState([{}]);

  useEffect(() => {
    getTopNews();
  }, []);

  const getTopNews = () => {
    axios
      .get(
        "https://newsapi.org/v2/everything?q=everything&apiKey=803b1f20229542109d3b21b58d162064"
      )
      .then((response) => {
        setArticles(response.data.articles);
      });
  };

  return (
    <div>
      <img
        src={articles[articlesIndex].urlToImage}
        alt={articles[articlesIndex]?.source?.name ?? "Loading..."}
      />
      <a href={articles[articlesIndex]?.url ?? "Loading..."}>
        {articles[articlesIndex]?.title ?? "Title loading..."}
      </a>
      <p>{articles[articlesIndex]?.description ?? "Content loading..."}</p>
    </div>
  );
};

export default News;
