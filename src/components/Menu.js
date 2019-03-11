import React from "react";
import { Link } from "gatsby";
import ReactDOM from "react-dom";

const style = mobile => {
  return mobile
    ? {}
    : {
        position:'sticky',
        top:'0',
        transformOrigin: "top left",
        transform: "rotate(-90deg) translateX(-100%)",
        width: "100vh",
        display: "flex",
        justifyContent: "space-around"
      };
};

const Menu = ({locale, mobile, location }) => {
  return (
    <div style={style(mobile)}>
      <Link to={locale === "en" ? "/about" : "/fr/about"}>
        <p>{locale === "en" ? "about" : "a propos"}</p>
      </Link>
      <Link to={locale === "en" ? "/" : "/fr"}>
        <p>{locale === "en" ? "home" : "chez nous"}</p>
      </Link>
      <Link to={locale === "en" ? "/fr" : "/"}>
        <p>{locale === "en" ? "fr" : "en"}</p>
      </Link>
    </div>
  );
};

export default Menu;
