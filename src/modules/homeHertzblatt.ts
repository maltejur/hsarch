import json from "../../assets/data.json";

export default function HomeHertzblatt() {
  const ret = document.createElement("div");
  ret.classList.add("grid");
  let html = "";

  json.hertzblatt.forEach((i) => {
    html += `
      <a class="module" href="#hertzblatt/${i.Name}">
          <img src="${json.baseUrl}hertzblatt/images/${i.Name}.jpg" class="moduleImg"></img>
          <div class="moduleLabel">
              <h2>${i.Name}</h2>
          </div>
      </a>`;
  });

  ret.innerHTML = html;

  return ret;
}
