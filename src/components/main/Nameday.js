import React, { useState, useEffect } from "react";
import axios from "axios";

const namedayApiUrl = "http://localhost:8080/nameday/v1/today";

export const Nameday = () => {
  const [nameday, setNameday] = useState("");

  useEffect(() => {
    axios.get(namedayApiUrl).then((res) => {
      setNameday(res.data.todaysNameDays);
    });
  }, []);

  if (nameday === "") {
    return <div> </div>;
  }
  return <div className="NameDay">Today's nameday(s): {nameday}</div>;
};
