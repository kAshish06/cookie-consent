export default function Toggle({ checked, disabled, onChange = () => {} }) {
  return (
    <label className="toggle">
      <input
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={onChange}
      />
      <span className="slider"></span>
    </label>
  );
}
