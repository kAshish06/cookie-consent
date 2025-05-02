import useLocalStorage from "../hooks/useLocalStorage";
import setCookies from "../helpers/setCookies";

export default function CookieBanner({ openManageCookieModal = () => {} }) {
  const [cookieConsent, updateCookieConsent] = useLocalStorage("cookieConsent");

  if (cookieConsent) return null;
  const handleCookieBtnClick = (btnType) => {
    updateCookieConsent(true);
    if (btnType === "declineAll") {
      setCookies(false, false, false);
    }
    if (btnType === "acceptAll") {
      setCookies(true, true, true);
    }
    if (btnType === "manage") {
      openManageCookieModal(true);
    }
  };
  return (
    <>
      <div className="static-banner-container">
        <h3 className="cookie-banner-header">We set cookies</h3>
        <div className="cookie-banner-body">
          We use cookies to enhance your browsing experience and improve our
          website's performance. By continuing to use this site, you consent to
          the use of cookies. To learn more about how we use cookies and your
          options, please read our <a href="#">cookie policy</a>.
        </div>
        <div className="cookie-banner-footer">
          <div>
            <button
              className="danger-btn"
              onClick={() => handleCookieBtnClick("declineAll")}
            >
              Decline All
            </button>
          </div>
          <div>
            <button
              className="primary-btn"
              onClick={() => handleCookieBtnClick("acceptAll")}
            >
              Accept All
            </button>
            <button
              className="secondary-btn"
              onClick={() => handleCookieBtnClick("manage")}
            >
              Manage Cookies
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
