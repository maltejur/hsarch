import Home from "./modules/home.js";
import Ausgabe from "./modules/ausgabe.js";
import Router from "./modules/router.js";
import Impressum from "./modules/impressum.js";
import Liste from "./modules/liste.js";
import Pdf from "./modules/pdf.js";
import NProgress from "nprogress/nprogress";
import "nprogress/nprogress.css";

document.getElementById("home").appendChild(Home());

new Router(
  "#contentinner",
  {
    "": undefined,
    "ausgabe/:id": Ausgabe,
    impressum: Impressum,
    liste: Liste,
    "pdf/::src": Pdf,
  },
  {
    onpagechange: (route) => {
      if (route == "") {
        document.body.classList.remove("open");
      } else {
        document.body.classList.add("open");
      }
    },
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

window.stats = () => {
  var script = document.createElement("script");
  script.onload = function () {
    var statL = [];
    for (let i = 0; i < 3; i++) {
      var stats = new Stats();
      stats.showPanel(i);
      stats.dom.style.marginLeft = 400 + i * 85 + "px";
      statL.push(stats);
    }
    statL.forEach((stats) => {
      document.body.appendChild(stats.dom);
    });
    requestAnimationFrame(function loop() {
      statL.forEach((stats) => {
        stats.update();
      });
      requestAnimationFrame(loop);
    });
  };
  script.src = "//mrdoob.github.io/stats.js/build/stats.min.js";
  document.head.appendChild(script);
};
