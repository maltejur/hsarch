import { checkFile } from "../../utils";
import json from "../../../assets/data.json";
import Page from "../page";
import dom from "jsx-render";
import DropdownBtn from "../dropdownBtn";

export default function AusgabeHertzschlag(params) {
  const ret = document.createElement("div");

  const ausg = json.hertzschlag.find((i) => i["Ausgabe"] == params.id);

  return (
    <Page>
      <img
        class="cover"
        src={`${json.baseUrl}hertzschlag/images/${ausg["Ausgabe"]}.jpg`}
      ></img>
      <h2>HertzSCHLAG {ausg["Ausgabe"]}</h2>
      <h1>{ausg["Thema"]}</h1>
      {Object.keys(ausg).map((key) => {
        if (
          key != "yumpu" &&
          key != "Thema" &&
          key != "Cover" &&
          key != "Ausgabe" &&
          ausg[key] != null
        ) {
          return (
            <p>
              <b>{key}:</b> {ausg[key]}
            </p>
          );
        }
      })}
      <a
        class="mdc-button mdc-button--raised"
        href={`#hertzschlag/${ausg["Ausgabe"]}/pdf`}
      >
        <span class="mdc-button__ripple"></span>
        <i class="fas fa-file-pdf"></i>
        <span>PDF Anzeigen</span>
      </a>
      <DropdownBtn
        name="Download"
        icon="fas fa-download"
        menu={[
          {
            name: "Niedrige Qualität",
            onclick: () => {
              window.open(
                `${json.baseUrl}hertzschlag/pdf/compressed/${ausg["Ausgabe"]}.pdf?download`,
                "_self"
              );
            },
          },
          {
            name: "Hohe Qualität",
            onclick: () => {
              window.open(
                `${json.baseUrl}hertzschlag/pdf/${ausg["Ausgabe"]}.pdf?download`,
                "_self"
              );
            },
          },
        ]}
      />
    </Page>
  );
}
