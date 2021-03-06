import React from "react";
import Button from "@material-ui/core/Button";

export default function SourceButton(props) {
  return (
    <a href={props.sourceUrl} rel="noreferrer" target="_blank">
      <Button
        variant="contained"
        size="small"
        style={{
          fontSize: "9px",
          fontFamily: "Libre Franklin, sans-serif",
          background: "#E8FFCC",
          margin: "4px",
          padding: "2px 6px",
          float: "right",
        }}
        disableElevation
      >
        {props.source}
      </Button>
    </a>
  );
}
