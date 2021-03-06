import type { Routes } from "../models";

export default class Router {
  routes: Routes;
  el: HTMLElement;
  onpagechange: (route: string) => void;
  lazy: boolean;

  constructor(
    element: HTMLElement,
    routes: Routes,
    onpagechange: (route: string) => void,
    lazy = false
  ) {
    this.routes = routes;
    this.el = element;
    this.onpagechange = onpagechange;
    this.lazy = lazy;
    window.addEventListener("hashchange", this.onhashchange.bind(this));
    this.onhashchange();
  }

  onhashchange() {
    const hash = location.hash;
    const hashSplit = hash.slice(1).split("/");
    let didNavigate = false;
    Object.keys(this.routes).forEach(async (route) => {
      const routeSplit = route.split("/");
      if (routeSplit.length <= hashSplit.length) {
        let params = {};
        let rigthRoute = true;
        for (let i = 0; i < hashSplit.length && rigthRoute; i++) {
          if (routeSplit[i] != undefined && routeSplit[i][0] == ":") {
            if (routeSplit[i][1] == ":") {
              params[routeSplit[i].substr(2)] = hashSplit.slice(i).join("/");
              break;
            } else {
              params[routeSplit[i].substr(1)] = decodeURIComponent(
                hashSplit[i]
              );
            }
          } else if (routeSplit[i] != hashSplit[i]) rigthRoute = false;
        }

        if (rigthRoute) {
          const routeName = routeSplit[0] == "hertzschlag" ? "" : routeSplit[0];
          if (this.el.getAttribute("currentroute") != routeName || !this.lazy) {
            this.el.setAttribute("currentroute", routeName);
            let neww = this.routes[route](params);
            this.el.innerHTML = "";
            this.el.appendChild(neww);
          }
          this.onpagechange(route);
          didNavigate = true;
        }
      }
    });
    if (!this.lazy && !didNavigate) {
      this.el.innerHTML = "";
    }
    this.onpagechange(hash.slice(1));
  }
}
