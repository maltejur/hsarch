import Home from "./components/hertzschlag/home";
import HomeHertzblatt from "./components/hertzblatt/home";
import AusgabeHertzschlag from "./components/hertzschlag/ausgabe";
import AusgabeHertzblatt from "./components/hertzblatt/ausgabe";
import HeaderHertzschlag from "./components/hertzschlag/header";
import HeaderHertzblatt from "./components/hertzblatt/header";
import Router from "./router";
import About from "./components/about";
import Liste from "./components/hertzschlag/liste";
import Pdf from "./components/pdf";
import NProgress from "nprogress/nprogress";
import "nprogress/nprogress.css";
import "./material.scss";
// import "material-components-web/dist/material-components-web.min.js";
// import "material-components-web/dist/material-components-web.min.css";

new Router(
  document.querySelector("#contentinner"),
  {
    "hertzschlag/:id": AusgabeHertzschlag,
    "hertzschlag/:id/pdf": Pdf,
    "hertzschlag/liste": Liste,
    "hertzblatt/:id": AusgabeHertzblatt,
    "hertzblatt/:id/pdf": (params) => Pdf(params, "hertzblatt"),
    about: About,
  },
  () => {}
);

new Router(
  document.querySelector("#home"),
  {
    "": Home,
    hertzschlag: Home,
    "hertzschlag/::": Home,
    hertzblatt: HomeHertzblatt,
    "hertzblatt/::": HomeHertzblatt,
  },
  (route) => {
    if (route == "" || route == "hertzschlag" || route == "hertzblatt") {
      document.body.classList.remove("open");
    } else {
      document.body.classList.add("open");
    }
  },
  true
);

new Router(
  document.querySelector("#innerHeader"),
  {
    "": HeaderHertzschlag,
    hertzschlag: HeaderHertzschlag,
    "hertzschlag/::": HeaderHertzschlag,
    hertzblatt: HeaderHertzblatt,
    "hertzblatt/::": HeaderHertzblatt,
  },
  () => {},
  true
);

// Entfert Ladebalken
document.addEventListener("readystatechange", (event) => {
  if (document.readyState == "complete") {
    NProgress.done();
  }
});

document.getElementById("back").addEventListener("click", () => {
  window.location.hash = document
    .getElementById("home")
    .getAttribute("currentroute");
});

// Startet Ladebalken
NProgress.configure({ showSpinner: false });
NProgress.start();
NProgress.inc();
