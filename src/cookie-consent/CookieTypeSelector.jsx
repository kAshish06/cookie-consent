import Toggle from "../components/Toggle";

export default function CookieTypeSelector({
  cookieType: { type, description, selected, disabled },
  updateCookieSelectionState,
}) {
  return (
    <div className="cookie-type-container">
      <div className="cookie-type-header-container">
        <span className="cookie-type-name">{type}</span>
        <Toggle
          checked={selected}
          disabled={disabled}
          onChange={(event) => updateCookieSelectionState(event)}
        />
      </div>
      <div>{description}</div>
    </div>
  );
}
