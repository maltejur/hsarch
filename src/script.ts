import Home from "./modules/home";
import Ausgabe from "./modules/ausgabeHertzschlag";
import Router from "./modules/router";
import Impressum from "./modules/impressum";
import Liste from "./modules/liste";
import Pdf from "./modules/pdf";
import NProgress from "nprogress/nprogress";
import "nprogress/nprogress.css";

document.getElementById("home").appendChild(Home());

new Router(
  document.querySelector("#contentinner"),
  {
    "": undefined,
    "hertzschlag/:id": Ausgabe,
    "hertzschlag/:id/pdf": Pdf,
    "hertzschlag/liste": Liste,
    impressum: Impressum,
  },
  (route) => {
    if (route == "") {
      document.body.classList.remove("open");
    } else {
      document.body.classList.add("open");
    }
  }
);

// Entfert Ladebalken
document.addEventListener("readystatechange", (event) => {
  if (document.readyState == "complete") {
    NProgress.done();
  }
});

// Startet Ladebalken
NProgress.configure({ showSpinner: false });
NProgress.start();
NProgress.inc();
