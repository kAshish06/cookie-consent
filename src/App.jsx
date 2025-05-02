import React from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import CookieBanner from "./cookie-consent/CookieBanner";
import ManageCookieModal from "./cookie-consent/ManageCookieModal";
import initialiseCookieScripts from "./helpers/initialiseCookieScripts";
import "./App.css";

function App() {
  const [showManageCookieModal, setShowManageCookieModal] =
    React.useState(false);
  React.useEffect(() => {
    initialiseCookieScripts();
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
