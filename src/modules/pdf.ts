import json from "../../assets/data.json";
import type { Params } from "../models";

export default function Pdf(params: Params, type = "hertzschlag") {
  const ret = document.createElement("div");
  ret.classList.add("iframe");

  const iframe = document.createElement("iframe");
  iframe.src = `${json.baseUrl}${type}/pdf/compressed/${params.id}.pdf`;

  ret.appendChild(iframe);
  return ret;
}
