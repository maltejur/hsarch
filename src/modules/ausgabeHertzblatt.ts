import { checkFile } from "./utils";
import json from "../../assets/data.json";
import Page from "./page";

export default function AusgabeHertzblatt(params) {
  const ret = document.createElement("div");

  const ausg = json.hertzblatt.find((i) => i["Ausgabe"] == params.id);

  if (ausg) {
    let pagehtml = `
    <img class="cover" src="${json.baseUrl}hertzblatt/images/${ausg.Ausgabe}.jpg"></img>
    <h1>HertzBLATT ${ausg["Name"]}</h1>
    `;
    for (let i in ausg) {
      if (ausg[i] != null && !["Web", "Ausgabe", "Name"].includes(i)) {
        pagehtml = pagehtml + "<p><b>" + i + ":</b> " + ausg[i] + "</p>";
      }
    }
    if (ausg.Web)
      pagehtml += `<a class="button" href="${ausg.Web}">
    <i class="fas fa-link"></i>Link
  </a>`;
    checkFile(`${json.baseUrl}hertzblatt/pdf/${ausg.Ausgabe}.pdf`).then(
      (exists) => {
        if (exists) {
          ret.innerHTML +=
            // prettier-ignore
            `
          <a class="button" href="#hertzblatt/${ausg.Ausgabe}/pdf">
            <i class="fas fa-file-pdf"></i>PDF Anzeigen
          </a>
          <button>
            <i class="fas fa-download"></i>Download
            <div class="dropdown">
              <a onclick="window.open('${json.baseUrl}hertzblatt/pdf/compressed/${ausg.Ausgabe}.pdf?download', '_self');">
                <i class="fas fa-file-download"></i>Niedrige Qualität
              </a>
              <a onclick="window.open('${json.baseUrl}hertzblatt/pdf/${ausg.Ausgabe}.pdf?download', '_self');">
                <i class="fas fa-file-download"></i>Hohe Qualität
              </a>
            </div>
          </button>
          `;
        }
      }
    );

    ret.innerHTML = pagehtml;
  }
  return Page(ret);
}
