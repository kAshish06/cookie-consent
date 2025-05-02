export default function getCookies() {
  let cookies = document.cookie;
  let cookieMap = {};
  if (cookies.length) {
    cookies.split(";").forEach((cookie) => {
      let [cookieName, cookieValue] = cookie.split("=");
      cookieMap[cookieName.trim()] = JSON.parse(cookieValue);
    });
  }
  return cookieMap;
}
