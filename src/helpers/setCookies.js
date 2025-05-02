const COOKIE_MAX_AGE = 365 * 24 * 60 * 60;
export default function setCookies(essential, marketing, analytics) {
  document.cookie = `essential=${essential}; max-age=${COOKIE_MAX_AGE}; path=/`;
  document.cookie = `marketing=${marketing}; max-age=${COOKIE_MAX_AGE}; path=/`;
  document.cookie = `analytics=${analytics}; max-age=${COOKIE_MAX_AGE}; path=/`;
}
