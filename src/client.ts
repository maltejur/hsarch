import * as sapper from "@sapper/app";
import "./global.css";
import "@fortawesome/fontawesome-free/js/all.min.js";

sapper.start({
  target: document.querySelector("#sapper"),
});
