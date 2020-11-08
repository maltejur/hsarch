import { MDCMenu } from "@material/menu";
import dom from "jsx-render";

export default function DropdownBtn(props: Props) {
  const dropdown = (
    <div class="mdc-menu mdc-menu-surface" style={{ "margin-top": "1.1em" }}>
      <ul
        class="mdc-list"
        role="menu"
        aria-hidden="true"
        aria-orientation="vertical"
        tabindex="-1"
      >
        {props.menu.map((el) => {
          const menuEntry = (
            <li class="mdc-list-item" role="menuitem">
              <span class="mdc-list-item__ripple"></span>
              <i
                class="fas fa-file-download"
                style={{ "margin-right": "0.5em" }}
              ></i>
              <span class="mdc-list-item__text">{el.name}</span>
            </li>
          );
          menuEntry.onclick = el.onclick;
          return menuEntry;
        })}
      </ul>
    </div>
  );

  const downloadBtn = (
    <button class="mdc-button mdc-button--raised">
      <span class="mdc-button__ripple"></span>
      <i class={props.icon}></i>
      <span>{props.name}</span>
    </button>
  );

  const menu = new MDCMenu(dropdown);
  function openDropdown() {
    console.log(menu.open);
    menu.open = true;
  }
  downloadBtn.onclick = openDropdown;

  return (
    <div className="mdc-menu-surface--anchor" style={{ display: "inline" }}>
      {downloadBtn}
      {dropdown}
    </div>
  );
}

interface Props {
  name: string;
  icon?: string;
  menu: MenuEntry[];
}

interface MenuEntry {
  name: string;
  onclick: () => void;
}
