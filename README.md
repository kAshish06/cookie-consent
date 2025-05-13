# Cookie Consent Component

This is an app that displays a **Cookie Consent Component** built with **React** and **Tailwind CSS** that allows users to give consent for cookies and manage script insertion based on their preferences.

## Features

- **Cookie Consent Management:**
  - The component lets users consent to cookies via a modal or banner. Once the user gives consent, the necessary scripts (like analytics, marketing, etc.) are loaded dynamically.
- **Accessibility:**

  - The component is designed with accessibility in mind. It includes focus states for elements and ensures that all interactive components are navigable using a keyboard.
  - A modal and banner are designed to be screen-reader friendly, providing clear, concise messages and actions.

- **Dynamic Script Insertion:**
  - The component allows dynamic insertion of third-party scripts (e.g., Google Analytics, Facebook Pixel) only after user consent. This ensures that scripts are loaded only if the user opts in.

## Tech Stack

The app is built with the following technologies:

### 1. **React**

- **Purpose**: React is used for building the user interface. It enables efficient rendering of UI components, such as the cookie consent modal and banner, based on user interactions.

### 2. **Tailwind CSS**

- **Purpose**: Tailwind CSS is used for styling the app. It offers a utility-first approach to styling, allowing rapid prototyping and responsive designs. Tailwind is used for creating clean, modern UI elements like buttons, modals, and banners.

### 3. **Vite**

- **Purpose**: Vite is a fast, next-generation build tool. It provides a modern development environment for React applications, with fast build times, hot module reloading, and optimized production builds.
