import React from "react";
import CookieBanner from "./cookie-consent/CookieBanner";
import ManageCookieModal from "./cookie-consent/ManageCookieModal";
import initialiseCookieScripts from "./helpers/initialiseCookieScripts";
import AppDescription from "./app-description/AppDescription";
import "./App.css";

function App() {
  const [isManageCookieModalOpen, setIsManageCookieModalOpen] =
    React.useState(false);
  React.useEffect(() => {
    initialiseCookieScripts();
  }, []);
  const closeManageCookieModal = () => {
    setIsManageCookieModalOpen(false);
  };
  return (
    <>
      <AppDescription />
      <CookieBanner
        onManageCookieClick={() => setIsManageCookieModalOpen(true)}
      />
      <ManageCookieModal
        open={isManageCookieModalOpen}
        closeManageCookieModal={closeManageCookieModal}
      />
    </>
  );
}

export default App;
