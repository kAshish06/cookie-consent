export default function Toggle({ checked, disabled, onChange = () => {} }) {
  return (
    <label className="inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        role="switch"
        aria-checked={checked}
        aria-disabled={disabled}
        checked={checked}
        disabled={disabled}
        onChange={(e) => onChange(e.target.checked)}
        className="sr-only"
      />
      <span
        className={`w-11 h-6 flex items-center flex-shrink-0 p-1 rounded-full transition-colors duration-300
          ${checked ? "bg-blue-600" : "bg-gray-300"}
          ${disabled ? "opacity-50 cursor-not-allowed" : ""}
        `}
      >
        <span
          className={`bg-white w-4 h-4 rounded-full shadow-md transform duration-300
            ${checked ? "translate-x-5" : "translate-x-0"}
          `}
        />
      </span>
    </label>
  );
}
