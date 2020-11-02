import type { Routes } from "../models";

export default class Router {
  routes: Routes;
  el: HTMLElement;
  onpagechange: (route: string) => void;

  constructor(
    element: HTMLElement,
    routes: Routes,
    onpagechange: (route: string) => void
  ) {
    this.routes = routes;
    this.el = element;
    this.onpagechange = onpagechange;
    window.addEventListener("hashchange", this.onhashchange.bind(this));
    this.onhashchange();
  }

  onhashchange() {
    const hash = location.hash;
    const hashSplit = hash.slice(1).split("/");
    Object.keys(this.routes).forEach(async (route) => {
      const routeSplit = route.split("/");
      let params = {};
      let rigthRoute = true;
      for (let i = 0; i < routeSplit.length; i++) {
        if (routeSplit[i] != undefined && routeSplit[i][0] == ":") {
          if (routeSplit[i][1] == ":") {
            params[routeSplit[i].substr(2)] = hashSplit.slice(i).join("/");
            break;
          } else {
            params[routeSplit[i].substr(1)] = decodeURIComponent(hashSplit[i]);
          }
        } else if (routeSplit[i] != hashSplit[i]) rigthRoute = false;
      }

      if (rigthRoute) {
        if (this.routes[route]) {
          let neww = this.routes[route](params);
          this.el.innerHTML = "";
          this.el.appendChild(neww);
        }
        this.onpagechange(route);
      }
    });
  }
}
