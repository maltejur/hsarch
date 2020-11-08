import json from "../../../assets/data.json";
import Page from "../page";

export default function Liste() {
  const ret = document.createElement("div");

  let listehtml =
    "<h1>Artikelliste</h1><table><tr><th>Ausgabe</th><th>Thema</th></tr>";
  json.hertzschlag.forEach((i) => {
    listehtml =
      listehtml +
      "<tr onclick='window.location=\"#hertzschlag/" +
      i["Ausgabe"] +
      "\"'><td><a href='#hertzschlag/" +
      i["Ausgabe"] +
      "'>" +
      i["Ausgabe"] +
      "</a></td><td><a href='#hertzschlag/" +
      i["Ausgabe"] +
      "'>" +
      i["Thema"] +
      "</a></td></tr>";
  });
  listehtml = listehtml + "</table>";

  ret.innerHTML = listehtml;
  return Page(ret);
}
