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
          id={`toggle-${type}`}
          checked={selected}
          disabled={disabled}
          onChange={(event) => updateCookieSelectionState(event)}
          data-testid={`cookie-toggle-${type.toLowerCase()}`}
        />
      </div>
      <div>{description}</div>
    </div>
  );
}
