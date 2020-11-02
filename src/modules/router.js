export default class Router {
  constructor(element, routes, { onpagechange = () => {} }) {
    this.routes = routes;
    this.el = document.querySelector(element);
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
      for (let i = 0; i < hashSplit.length; i++) {
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
