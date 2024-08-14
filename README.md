# My TypeScript Project with MongoDB, Node.js, and Bun.js

This project is a web application built with TypeScript, MongoDB, Node.js, and Bun.js. The project aims to provide a scalable and efficient backend system for managing data with MongoDB, while utilizing the performance benefits of Bun.js.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Scripts](#scripts)
- [Project Structure](#project-structure)
- [Technologies](#technologies)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/your-repo-name.git
    cd your-repo-name
    ```

2. **Install dependencies using Bun:**

    ```bash
    bun install
    ```

3. **Set up your environment variables:**

    Create a `.env` file in the root directory and configure the following variables:

    ```plaintext
    MONGODB_URI=<your-mongodb-connection-string>
    PORT=<your-preferred-port>
    ```

## Usage

1. **Start the development server:**

    ```bash
    bun run dev
    ```

    The server will start on the port specified in the `.env` file.

2. **Build the project for production:**

    ```bash
    bun run build
    ```

3. **Run the production build:**

    ```bash
    bun run start
    ```

## Scripts

- **`bun run dev`**: Starts the development server with hot-reloading.
- **`bun run build`**: Compiles TypeScript files and prepares the project for production.
- **`bun run start`**: Runs the compiled project in production mode.
- **`bun run lint`**: Lints the TypeScript code using ESLint.

## Project Structure

```plaintext
├── src/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── services/
│   ├── app.ts
│   └── index.ts
├── .env
├── .eslintrc.json
├── .gitignore
├── package.json
├── tsconfig.json
└── README.md
