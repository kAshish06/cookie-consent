import React from "react";

export default function AppDescription() {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg my-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-3">
        Cookie Consent App
      </h1>

      <p className="text-lg text-gray-600 mb-3">
        This is a <strong>Cookie Consent App</strong> built with{" "}
        <strong>React</strong> and <strong>Tailwind CSS</strong> that allows
        users to give consent for cookies and manage script insertion based on
        their preferences.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mt-3 mb-2">
        Features
      </h2>
      <ul className="list-disc list-inside space-y-2">
        <li>
          <strong className="font-medium text-gray-800">
            Cookie Consent Management:
          </strong>{" "}
          The app lets users consent to cookies via a modal or banner. Once the
          user gives consent, the necessary scripts (like analytics, marketing,
          etc.) are loaded dynamically.
        </li>
        <li>
          <strong className="font-medium text-gray-800">Accessibility:</strong>{" "}
          The app is designed with accessibility in mind. It includes focus
          states for elements and ensures that all interactive components are
          navigable using a keyboard. A modal and banner are designed to be
          screen-reader friendly, providing clear, concise messages and actions.
        </li>
        <li>
          <strong className="font-medium text-gray-800">
            Dynamic Script Insertion:
          </strong>{" "}
          The app allows dynamic insertion of third-party scripts (e.g., Google
          Analytics, Facebook Pixel) only after user consent. This ensures that
          scripts are loaded only if the user opts in.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-2">
        Tech Stack
      </h2>
      <ul className="list-disc list-inside space-y-2">
        <li>
          <strong className="font-medium text-gray-800">React:</strong> React is
          used for building the user interface. It enables efficient rendering
          of UI components, such as the cookie consent modal and banner, based
          on user interactions.
        </li>
        <li>
          <strong className="font-medium text-gray-800">Tailwind CSS:</strong>{" "}
          Tailwind CSS is used for styling the app. It offers a utility-first
          approach to styling, allowing rapid prototyping and responsive
          designs. Tailwind is used for creating clean, modern UI elements like
          buttons, modals, and banners.
        </li>
        <li>
          <strong className="font-medium text-gray-800">Vite:</strong> Vite is a
          fast, next-generation build tool. It provides a modern development
          environment for React applications, with fast build times, hot module
          reloading, and optimized production builds.
        </li>
      </ul>
    </div>
  );
}
