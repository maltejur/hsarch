export default function HeaderHertzschlag() {
  const el = document.createElement("div");

  el.innerHTML = `
  <a href="#">
    <h1>HertzSCHLAG Archiv</h1>
  </a>
  <nav>
    <a href="#hertzblatt" style="margin-left: 25px">HertzBLATT</a>
    <a href="#hertzschlag/liste" style="margin-left: 25px">Alle Ausgaben</a>
  </nav>
  `;

  return el;
}
