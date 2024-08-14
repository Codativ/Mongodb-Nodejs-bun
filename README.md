# My TypeScript Project with MongoDB, Node.js, and Bun.js

This project is a web application built with TypeScript, MongoDB, Node.js, and Bun.js. The project aims to provide a scalable and efficient backend system for managing data with MongoDB, while utilizing the performance benefits of Bun.js.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
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

#MacOS
 ```bash
curl -fsSL https://bun.sh/install | bash 
```
#Windows
 ```bash
powershell -c "irm bun.sh/install.ps1|iex"
```
```bash
bun install
```


3. **Set up your environment variables:**

    Create a `.env` file in the root directory and configure the following variables:

    ```plaintext
   DB_CONNECT_USERNAME=
   DB_CONNECT_PASSWORD=
    ```

## Usage

1. **Start the development server:**

    ```bash
    npm install
    ```
     ```bash
    npm start
    ```

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
