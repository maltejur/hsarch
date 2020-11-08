import dom from "jsx-render";

export default function Page(props) {
  return (
    <div class="page">
      <div class="back" onclick="window.history.back()">
        <i class="fas fa-arrow-left" aria-hidden="true"></i>
      </div>
      {props.children}
    </div>
  );
}
