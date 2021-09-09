import "../../App.css";
import React, { useContext } from "react";
import { ButtonGroup, Button } from "@material-ui/core";
import { NewsContext } from "./NewsContext";
import AuthorButton from "./AuthorButton";
import SourceButton from "./SourceButton";

export const MainNews = () => {
  const altImage = require("../../resources/images/placeholder.png");

  const context = useContext(NewsContext);

  const changeNews = (incrementer) => {
    if (incrementer === "next") {
      context.setArticlesIndex(
        (context.articlesIndex + 1) % context.articles.length
      );
    } else {
      context.setArticlesIndex(
        (context.articlesIndex + context.articles.length - 1) %
          context.articles.length
      );
    }
  };

  if (context.loading) {
    return <div>Loading....</div>;
  }

  return (
    <div
      style={{
        justifyContent: "center",
        position: "relative",
      }}
    >
      <ButtonGroup
        aria-label="primary button group"
        style={{
          margin: "0 5px 10px 5px",
          // justifyContent: "center",
          width: "100%",
          position: "absolute",
          top: "6px",
          left: "2px",
        }}
      >
        <Button
          variant="contained"
          disabled={context.articlesIndex === 0 ? true : false}
          onClick={() => changeNews("previous")}
          size="small"
          style={{
            fontSize: "10px",
            fontFamily: "EB Garamond, sans-serif",
          }}
        >
          Previous
        </Button>
        <Button
          variant="contained"
          disabled={
            context.articlesIndex === context.articles.length - 1 ? true : false
          }
          onClick={() => changeNews("next")}
          size="small"
          style={{
            fontSize: "10px",
            fontFamily: "EB Garamond, sans-serif",
          }}
        >
          Next
        </Button>
      </ButtonGroup>

      <img
        src={
          context.articles[context.articlesIndex]?.urlToImage ??
          altImage.default
        }
        alt=""
        style={{
          width: "100%",
          height: "45vh",
          objectFit: "cover",
          marginBottom: "6px",
        }}
      ></img>

      <AuthorButton
        author={context.articles[context.articlesIndex]?.author ?? "No author"}
      />
      <SourceButton
        source={
          context.articles[context.articlesIndex]?.source.name ?? "No source"
        }
        sourceUrl={context.articles[context.articlesIndex]?.url ?? "No data"}
      />
      <a
        className="link"
        href={context.articles[context.articlesIndex]?.url ?? "No data"}
        target="_blank"
        rel="noreferrer"
      >
        <h2>{context.articles[context.articlesIndex]?.title ?? "No title"}</h2>
      </a>
      <p>
        {context.articles[context.articlesIndex]?.description ?? "No content"}
      </p>
    </div>
  );
};

export default MainNews;
