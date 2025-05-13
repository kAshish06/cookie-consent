import React from "react";
import CookieTypeSelector from "./CookieTypeSelector";
import setCookies from "../helpers/setCookies";
import Modal from "../components/Modal";
import Button from "../components/Button";
import { COOKIE_ACTIONS } from "../constants";

const getInitialCookieTypes = () => [
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
export default function ManageCookieModal({
  open = false,
  closeManageCookieModal = () => {},
}) {
  const [cookieTypes, setCookieTypes] = React.useState(getInitialCookieTypes());
  const updateCookieSelectionState = (index) => {
    setCookieTypes((prevCookies) => {
      return prevCookies.map((cookie, i) =>
        i === index ? { ...cookie, selected: !cookie.selected } : cookie
      );
    });
  };
  const handleDeclineAcceptAllClick = (type) => {
    if (type === COOKIE_ACTIONS.DECLINE_ALL) {
      setCookies(false, false, false);
    }
    if (type === COOKIE_ACTIONS.ACCEPT_ALL) {
      setCookies(true, true, true);
    }
    closeManageCookieModal();
  };
  const handleSaveClick = () => {
    setCookies(...cookieTypes.map((cookieType) => cookieType.selected));
    closeManageCookieModal();
  };
  return (
    <Modal
      open={open}
      body={cookieTypes.map((cookieType, index) => {
        return (
          <CookieTypeSelector
            key={cookieType.type}
            cookieType={cookieType}
            updateCookieSelectionState={() => updateCookieSelectionState(index)}
          />
        );
      })}
      footer={
        <div className="manage-cookies-modal-footer">
          <div>
            <Button
              variant="primary"
              className="primary-btn"
              onClick={() =>
                handleDeclineAcceptAllClick(COOKIE_ACTIONS.ACCEPT_ALL)
              }
            >
              Accept All
            </Button>
            <Button
              variant="secondary"
              className="secondary-btn"
              onClick={() => handleSaveClick()}
            >
              Save
            </Button>
          </div>
          <div>
            <Button
              variant="danger"
              className="danger-btn"
              onClick={() =>
                handleDeclineAcceptAllClick(COOKIE_ACTIONS.DECLINE_ALL)
              }
            >
              Decline All
            </Button>
          </div>
        </div>
      }
      onClose={closeManageCookieModal}
    />
  );
}
