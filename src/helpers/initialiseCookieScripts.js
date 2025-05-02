import getCookies from "./getCookies";
import addScript from "./addScript";
import { SCRIPT_MAP } from "../cookieScripts";

export default function initialiseCookieScripts() {
  let cookieMap = getCookies();
  for (let cookie in cookieMap) {
    if (cookieMap[cookie]) {
      SCRIPT_MAP[cookie] && addScript(cookie, SCRIPT_MAP[cookie]);
    }
  }
}
