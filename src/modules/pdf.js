import json from "../../assets/data.json";

export default function Pdf(params) {
  const ret = document.createElement("div");
  ret.classList.add("iframe");

  const iframe = document.createElement("iframe");
  iframe.src = `${json.baseUrl}hertzschlag/pdf/${params.src}`;

  ret.appendChild(iframe);
  return ret;
}
