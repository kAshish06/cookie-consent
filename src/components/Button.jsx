import React from "react";

const VARIANTS = {
  primary: "bg-blue-700 text-white",
  secondary: "text-black",
  danger: "bg-red-700 text-white",
};

export default function Button({
  variant,
  type = "button",
  className,
  children,
  ...remainingProps
}) {
  return (
    <button
      type={type}
      className={`${VARIANTS[variant]} px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-red-500 ${className}`}
      {...remainingProps}
    >
      {children}
    </button>
  );
}
