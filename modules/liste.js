export default async function Liste() {
  const ret = document.createElement("div");
  ret.classList.add("page");

  const response = await fetch("data.json");
  const json = await response.json();

  let listehtml =
    "<a class='back' onclick='window.history.back()'><i class='fas fa-arrow-left'></i></a><h1>Artikelliste</h1><table><tr><th>Ausgabe</th><th>Thema</th></tr>";
  json.hs.forEach((i) => {
    listehtml =
      listehtml +
      "<tr onclick='window.location=\"#ausgabe/" +
      i["Ausgabe"] +
      "\"'><td><a href='#ausgabe/" +
      i["Ausgabe"] +
      "'>" +
      i["Ausgabe"] +
      "</a></td><td><a href='#ausgabe/" +
      i["Ausgabe"] +
      "'>" +
      i["Thema"] +
      "</a></td></tr>";
  });
  listehtml = listehtml + "</table>";

  ret.innerHTML = listehtml;
  return ret;
}
