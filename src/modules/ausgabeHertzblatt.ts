import { checkFile } from "./utils";
import json from "../../assets/data.json";
import Page from "./page";

export default function AusgabeHertzblatt(params) {
  const ret = document.createElement("div");

  const ausg = json.hertzblatt.find((i) => i["Name"] == params.id);

  if (ausg) {
    let pagehtml = `
    <img class="cover" src="${json.baseUrl}hertzblatt/images/${ausg.Name}.jpg"></img>
    <h1>HertzBLATT ${ausg["Name"]}</h1>
    `;
    for (let i in ausg) {
      if (ausg[i] != null) {
        pagehtml = pagehtml + "<p><b>" + i + ":</b> " + ausg[i] + "</p>";
      }
    }
    checkFile(`${json.baseUrl}hertzblatt/pdf/${ausg["Name"]}.pdf`).then(
      (exists) => {
        if (exists) {
          ret.innerHTML +=
            // prettier-ignore
            `
          <a class="button" href="#hertzblatt/${ausg["Name"]}/pdf">
            <i class="fas fa-file-pdf"></i>PDF Anzeigen
          </a>
          <button>
            <i class="fas fa-download"></i>Download
            <div class="dropdown">
              <a onclick="window.open('${json.baseUrl}hertzblatt/pdf/compressed/${ausg["Name"]}.pdf?download', '_self');">
                <i class="fas fa-file-download"></i>Niedrige Qualität
              </a>
              <a onclick="window.open('${json.baseUrl}hertzblatt/pdf/${ausg["Name"]}.pdf?download', '_self');">
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
