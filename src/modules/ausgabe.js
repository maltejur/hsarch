import { checkFile } from "./utils.js";
import json from "../../assets/data.json";

export default function Ausgabe(params) {
  const ret = document.createElement("div");
  ret.classList.add("page");

  const ausg = json.hertzschlag.find((i) => i["Ausgabe"] == params.id);

  ausg["Cover"] = ausg["Ausgabe"] + ".jpg";
  let pagehtml = `
  <a class="back" onclick="window.history.back()">
    <i class="fas fa-arrow-left"></i>
  </a><br><br>
  <img class="cover" src="${json.baseUrl}hertzschlag/images/${ausg["Cover"]}"></img>
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
        <a class="button" href="#pdf/compressed/${ausg["Ausgabe"]}.pdf">
          <i class="fas fa-file-pdf"></i>PDF Anzeigen
        </a>
        <button>
          <i class="fas fa-download"></i>Download
          <div class="dropdown">
            <a href="${json.baseUrl}hertzschlag/pdf/compressed/${ausg["Ausgabe"]}.pdf" download="hertzschlag_${ausg["Ausgabe"]}_lq.pdf">
              <i class="fas fa-file-download"></i>Niedrige Qualität
            </a>
            <a href="${json.baseUrl}hertzschlag/pdf/${ausg["Ausgabe"]}.pdf" download="hertzschlag_${ausg["Ausgabe"]}_hq.pdf">
              <i class="fas fa-file-download"></i>Hohe Qualität
            </a>
          </div>
        </button>
        `;
      }
    }
  );

  ret.innerHTML = pagehtml;
  return ret;
}