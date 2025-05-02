import React from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import CookieBanner from "./cookie-consent/CookieBanner";
import ManageCookieModal from "./cookie-consent/ManageCookieModal";
import getCookies from "./helpers/getCookies";
import addScript from "./helpers/addScript";
import "./App.css";
const SCRIPT_MAP = {
  essential: "/js/essentials.js",
  marketing: "/js/marketing.js",
  analytics: "/js/analytics.js",
};
function App() {
  const [showManageCookieModal, setShowManageCookieModal] =
    React.useState(false);
  React.useEffect(() => {
    let cookieMap = getCookies();
    for (let cookie in cookieMap) {
      if (cookieMap[cookie]) {
        SCRIPT_MAP[cookie] && addScript(cookie, SCRIPT_MAP[cookie]);
      }
    }
  }, []);
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <CookieBanner openManageCookieModal={setShowManageCookieModal} />
      <ManageCookieModal
        open={showManageCookieModal}
        close={() => {
          setShowManageCookieModal(false);
        }}
      />
    </>
  );
}

export default App;
