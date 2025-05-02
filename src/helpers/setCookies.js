const COOKIE_MAX_AGE = 365 * 24 * 60 * 60;
export default function setCookies(essential, marketing, analytics) {
  let cookies = { essential, marketing, analytics };
  for (let key in cookies) {
    document.cookie = `${key}=${cookies[key]}; max-age=${COOKIE_MAX_AGE}; path=/`;
  }
}
