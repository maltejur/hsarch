export default function HeaderHertzschlag() {
  const el = document.createElement("div");

  el.innerHTML = `
  <a href="#hertzblatt">
    <h1>hertz heute / HertzBLATT Archiv</h1>
  </a>
  <nav>
    <a href="#" style="margin-left: 25px">HertzSCHLAG</a>
  </nav>
  `;

  return el;
}
