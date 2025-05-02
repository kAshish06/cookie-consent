export default function addScript(id, src) {
  if (!document.getElementById(id)) {
    const scriptTag = document.createElement("script");
    scriptTag.setAttribute("src", src);
    scriptTag.setAttribute("type", "module");
    scriptTag.setAttribute("id", id);
    let body = document.querySelector("body");
    body.appendChild(scriptTag);
  }
}
