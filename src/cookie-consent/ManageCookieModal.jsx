import React from "react";
import { createPortal } from "react-dom";
import CookieTypeSelector from "./CookieTypeSelector";
import setCookies from "../helpers/setCookies";

const cookie_types = [
  {
    type: "Essentials",
    description:
      "These cookies are essential for proper functioning of our service and can not be disabled",
    selected: true,
    disabled: true,
  },
  {
    type: "Marketing",
    description:
      "These cookies allow us to show you advertisements relevent to you through advertising partners.",
    disabled: false,
    selected: false,
  },
  {
    type: "Analytics",
    description:
      "These cookies collect information about how you use our services or potential errors you encounter. Based on this we are able to improve your experience or react to issues.",
    disabled: false,
    selected: false,
  },
];
export default function ManageCookieModal({ open = false, close = () => {} }) {
  const [cookieTypes, setCookieTypes] = React.useState(cookie_types);
  if (!open) return null;
  const updateCookieSelectionState = (index) => {
    let newCookieTypes = [...cookieTypes];
    newCookieTypes[index].selected = !newCookieTypes[index].selected;
    setCookieTypes(newCookieTypes);
  };
  const handleDeclineAcceptAllClick = (type) => {
    if (type === "declineAll") {
      setCookies(false, false, false);
    }
    if (type === "acceptAll") {
      setCookies(true, true, true);
    }
    close();
  };
  const handleSaveClick = () => {
    setCookies(...cookieTypes.map((cookieType) => cookieType.selected));
    close();
  };
  const portalRoot = document.getElementById("modal");
  const modal = (
    <div className="modal-container">
      <div className="modal-body">
        {cookieTypes.map((cookieType, index) => {
          return (
            <CookieTypeSelector
              key={cookieType.type}
              cookieType={cookieType}
              updateCookieSelectionState={() =>
                updateCookieSelectionState(index)
              }
            />
          );
        })}
      </div>
      <div className="modal-footer">
        <div>
          <button
            className="primary-btn"
            onClick={() => handleDeclineAcceptAllClick("acceptAll")}
          >
            Accept All
          </button>
          <button className="secondary-btn" onClick={() => handleSaveClick()}>
            Save
          </button>
        </div>
        <div>
          <button
            className="danger-btn"
            onClick={() => handleDeclineAcceptAllClick("declineAll")}
          >
            Decline All
          </button>
        </div>
      </div>
    </div>
  );
  return createPortal(modal, portalRoot);
}
