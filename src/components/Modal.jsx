import React, { useEffect } from "react";
import { createPortal } from "react-dom";

export default function Modal({ open, header, body, footer, onClose }) {
  const portalRoot = document.getElementById("modal");

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open, onClose]);

  if (!open) return null;
  const modal = (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        className="bg-white rounded-lg shadow-xl max-w-lg p-6"
        onClick={(e) => e.stopPropagation()}
      >
        {header && (
          <div id="modal-title" className="text-xl font-semibold mb-4">
            {header}
          </div>
        )}
        <div id="modal-description" className="modal-body mb-4">
          {body}
        </div>
        <div className="modal-footer">{footer}</div>
      </div>
    </div>
  );

  return createPortal(modal, portalRoot);
}
