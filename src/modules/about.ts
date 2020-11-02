export default function About() {
  const ret = document.createElement("div");
  ret.classList.add("pagewrapper");
  ret.innerHTML =
    "<div class='page'><img class='banner' src='https://files.hertzschlag.eu/hertzschlag/images/banner.jpg'></img><h1>Impressum</h1>Malte Jürgens<br>Bergmannstraße 70<br>10961 Berlin<h3>Kontakt:</h3><a href='mailto:hertzschlag@hhgym.de'>hertzschlag@hhgym.de</a><br><a href='mailto:maltejur@web.de'>maltejur@web.de</a></div>";
  return ret;
}
