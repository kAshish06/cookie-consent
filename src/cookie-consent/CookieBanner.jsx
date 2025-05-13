import { useEffect, useRef } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import setCookies from "../helpers/setCookies";
import Button from "../components/Button";
import { COOKIE_ACTIONS } from "../constants";

export default function CookieBanner({ onManageCookieClick = () => {} }) {
  const [cookieConsent, updateCookieConsent] = useLocalStorage("cookieConsent");
  const bannerRef = useRef();

  useEffect(() => {
    if (cookieConsent === "") {
      bannerRef.current?.focus();
    }
  }, []);

  if (cookieConsent !== "") return null;

  const handleCookieBtnClick = (btnType) => {
    updateCookieConsent(true);
    switch (btnType) {
      case COOKIE_ACTIONS.DECLINE_ALL: {
        setCookies(false, false, false);
        break;
      }
      case COOKIE_ACTIONS.ACCEPT_ALL: {
        setCookies(true, true, true);
        break;
      }
      case COOKIE_ACTIONS.MANAGE: {
        onManageCookieClick(true);
        break;
      }
    }
  };
  return (
    <aside
      ref={bannerRef}
      ariarole="dialog"
      arialabel="Cookie consent banner"
      id="cookie-banner"
      tabIndex={-1}
      className="static-banner-container"
    >
      <h2 className="cookie-banner-header mb-3">We set cookies</h2>
      <div className="cookie-banner-body">
        We use cookies to enhance your browsing experience and improve our
        website's performance. By continuing to use this site, you consent to
        the use of cookies. To learn more about how we use cookies and your
        options, please read our <a href="#">cookie policy</a>.
      </div>
      <div className="cookie-banner-footer">
        <div>
          <Button
            variant="danger"
            onClick={() => handleCookieBtnClick(COOKIE_ACTIONS.DECLINE_ALL)}
          >
            Decline All
          </Button>
        </div>
        <div>
          <Button
            variant="primary"
            onClick={() => handleCookieBtnClick(COOKIE_ACTIONS.ACCEPT_ALL)}
          >
            Accept All
          </Button>
          <Button
            variant="secondary"
            onClick={() => handleCookieBtnClick(COOKIE_ACTIONS.MANAGE)}
          >
            Manage Cookies
          </Button>
        </div>
      </div>
    </aside>
  );
}
