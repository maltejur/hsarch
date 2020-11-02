import { checkFile } from "./utils";
import json from "../../assets/data.json";
import Page from "./page";

export default function AusgabeHertzschlag(params) {
  const ret = document.createElement("div");

  const ausg = json.hertzschlag.find((i) => i["Ausgabe"] == params.id);

  let pagehtml = `
  <img class="cover" src="${json.baseUrl}hertzschlag/images/${ausg["Ausgabe"]}.jpg"></img>
  <h2>HertzSCHLAG ${ausg["Ausgabe"]}</h2>
  <h1>${ausg["Thema"]}</h1>
  `;
  for (let i in ausg) {
    if (
      i != "yumpu" &&
      i != "Thema" &&
      i != "Cover" &&
      i != "Ausgabe" &&
      ausg[i] != null
    ) {
      pagehtml = pagehtml + "<p><b>" + i + ":</b> " + ausg[i] + "</p>";
    }
  }
  checkFile(`${json.baseUrl}hertzschlag/pdf/${ausg["Ausgabe"]}.pdf`).then(
    (exists) => {
      if (exists) {
        ret.innerHTML +=
          // prettier-ignore
          `
        <a class="button" href="#hertzschlag/${ausg["Ausgabe"]}/pdf">
          <i class="fas fa-file-pdf"></i>PDF Anzeigen
        </a>
        <button>
          <i class="fas fa-download"></i>Download
          <div class="dropdown">
            <a onclick="window.open('${json.baseUrl}hertzschlag/pdf/compressed/${ausg["Ausgabe"]}.pdf?download', '_self');">
              <i class="fas fa-file-download"></i>Niedrige Qualität
            </a>
            <a onclick="window.open('${json.baseUrl}hertzschlag/pdf/${ausg["Ausgabe"]}.pdf?download', '_self');">
              <i class="fas fa-file-download"></i>Hohe Qualität
            </a>
          </div>
        </button>
        `;
      }
    }
  );

  ret.innerHTML = pagehtml;
  return Page(ret);
}
