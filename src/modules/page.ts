export default function Page(content: HTMLElement) {
  const el = document.createElement("div");

  el.classList.add("page");
  el.innerHTML =
    '<div class="back" onclick="window.history.back()"><i class="fas fa-arrow-left" aria-hidden="true"></i></div>';
  el.appendChild(content);

  return el;
}
