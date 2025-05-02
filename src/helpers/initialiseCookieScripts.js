import getCookies from "./helpers/getCookies";
import addScript from "./helpers/addScript";
import SCRIPT_MAP from "./cookieScripts";

export default function initialiseCookieScripts() {
  let cookieMap = getCookies();
  for (let cookie in cookieMap) {
    if (cookieMap[cookie]) {
      SCRIPT_MAP[cookie] && addScript(cookie, SCRIPT_MAP[cookie]);
    }
  }
}
