export default function getCookies() {
  let cookies_of_interest = ["essential", "marketing", "analytics"];
  let cookies = document.cookie;
  let cookieMap = {};
  if (cookies.length) {
    cookies.split(";").forEach((cookie) => {
      let [cookieName, cookieValue] = cookie
        .split("=")
        .map((item) => item.trim());
      if (cookies_of_interest.includes(cookieName)) {
        cookieMap[cookieName] = JSON.parse(cookieValue);
      }
    });
  }
  return cookieMap;
}
