export default async function Home() {
  const ret = document.createElement("div");
  ret.classList.add("grid");
  let html = "";

  const response = await fetch("data.json");
  const json = await response.json();

  json.hs.forEach((i) => {
    html += `
      <a class="module" href="#ausgabe/${i.Ausgabe}">
          <img src="${json.baseUrl}hs/images/${i.Ausgabe}.jpg" class="moduleImg"></img>
          <div class="moduleLabel">
              <h3>HS ${i.Ausgabe}</h3>
              <h2>${i.Thema}</h2>
          </div>
      </a>`;
  });

  ret.innerHTML = html;

  return ret;
}
