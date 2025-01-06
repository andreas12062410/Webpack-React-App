# React Project with Webpack, Material-UI, and Mock API Integration

This project demonstrates proficiency in React development using Webpack, Material-UI, and mock API integration. The application provides a well-structured architecture, responsive design, and clean, maintainable code.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the App](#running-the-app)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [Error Handling](#error-handling)
- [Responsive Design](#responsive-design)
- [Contributing](#contributing)
- [License](#license)

---

## Features

- **UI Layout**:
  - Left Sidebar: Navigation with "Favorite Projects".
  - Right Section: Displays page content.

- **Project List Page**:
  - Table displaying: Project ID, Project Name, Start Date, End Date, Project Manager, and Edit Action.
  - Navigation to the Project Edit Page upon clicking the Edit button.

- **Project Edit Page**:
  - Form Fields:
    - Project ID (read-only)
    - Project Name
    - Description
    - Start Date
    - End Date
    - Project Manager
  - Updates are reflected in both the project list and "Favorite Projects" menu.

- State management using Context API.
- Error handling for API failures with user-friendly messages.
- Responsive design for mobile and desktop views.

---

## Tech Stack

- **Frontend**: React 18+
- **Bundler**: Webpack
- **UI Library**: Material-UI (MUI)
- **Styling**: Styled-components and Material-UI styling
- **State Management**: Context API with Reducer
- **Mock API**: Simulated using in-memory state
- **Date Handling**: Day.js and MUI Date Picker

---

## Getting Started

### Prerequisites

Ensure you have the following installed on your system:

- Node.js (>= 16.x)
- npm (>= 8.x) or Yarn (>= 1.22.x)

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

### Running the App

1. Start the development server:

   ```bash
   npm start
   # or
   yarn start
   ```

2. Open the app in your browser:

   ```
   http://localhost:3000
   ```

---

## Project Structure

```plaintext
src/
├── components/       # Reusable components (e.g., Table, Form, Sidebar)
├── pages/            # Page components (e.g., ProjectListPage, ProjectDetailPage)
├── store/            # Context API for state management
├── styles/           # Global styles and theme configurations
├── App.js            # Main app component
├── index.js          # Entry point
├── webpack.config.js # Webpack configuration
├── tailwind.config.js # Tailwind CSS configuration file
├── postcss.config.js  # PostCSS configuration file
└── .babelrc           # Babel configuration file
```

---

## Usage

1. Navigate to the **Project List Page** to view all projects.
2. Use the **Edit** button to navigate to the **Project Edit Page**.
3. Edit project details and save changes to see updates reflected in:
   - The project list table.
   - The "Favorite Projects" menu.

---

## Error Handling

- Displays error messages for API failures using Material-UI Snackbar.
- Validates form inputs to ensure data integrity.

---

## Responsive Design

- Uses Material-UI's responsive grid system and components for a seamless experience across devices.

---

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature-name`.
3. Commit your changes: `git commit -m 'Add some feature'`.
4. Push to the branch: `git push origin feature-name`.
5. Submit a pull request.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
