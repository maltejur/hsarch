import Home from "./modules/home";
import HomeHertzblatt from "./modules/homeHertzblatt";
import AusgabeHertzschlag from "./modules/ausgabeHertzschlag";
import AusgabeHertzblatt from "./modules/ausgabeHertzblatt";
import HeaderHertzschlag from "./modules/headerHertzschlag";
import HeaderHertzblatt from "./modules/headerHertzblatt";
import Router from "./modules/router";
import About from "./modules/about";
import Liste from "./modules/liste";
import Pdf from "./modules/pdf";
import NProgress from "nprogress/nprogress";
import "nprogress/nprogress.css";

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
