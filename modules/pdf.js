export default async function Pdf(params) {
  const response = await fetch("data.json");
  const json = await response.json();

  const ret = document.createElement("div");
  ret.classList.add("iframe");

  const iframe = document.createElement("iframe");
  iframe.src = `${json.baseUrl}hs/pdf/${params.src}`;

  ret.appendChild(iframe);
  return ret;
}
