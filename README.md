# Web Testing with WebdriverIO and Cucumber

This project provides a boilerplate setup for running automated tests on native applications using WebdriverIO and the Cucumber frameworks. The tests can be executed on Chrome, Firefox, Edge and Safari browsers.

## Prerequisites

- Node.js (>=18) and npm: Make sure you have Node.js and npm installed on your machine.

## Setup

1. Clone the repository:

   ```
   git clone https://github.com/Exemplify777/web-wdio-cucumber
   ```

2. Install dependencies:

   ```
   npm install
   ```
3. Configure the project:

   - Open `config/wdio.shared.conf.ts` file and update the desired capabilities for Chrome, Firefox, Edge and Safari browsers, including ....
   - Adjust the `cucumberOpts` in the `config/wdio.shared.conf.ts` file to match your feature files and step definitions location.

4. Create a `.env` file with local environment configurations. You can use the provided `.env.example` file as a template.

## Usage

- Run tests on Chrome browser:

  ```
  npm run test:chrome"
  ```

- Run tests on Firefox browser:

  ```
  npm run test:firefox
  ```

- Run tests on Edge browser:

  ```
  npm run test:edge
  ```

- Run tests on Safari browser:

  ```
  npm run test:safari
  ```

## Project Structure

```
├── config/
│   ├── wdio.shared.conf.ts       # WebdriverIO shared configuration file
├── docs/                         # Directory containing project documentation
│   ├── FAQ.md                    # FAQ documentation
├── reports/                      # Directory containing generated reports
├── tests/
│   ├── features/                 # Directory containing feature files
│   ├── src/
│   │   ├── helpers/              # Directory containing helper functions
│   │   ├── pageobjects/          # Directory containing page objects
│   │   └── step-definitions/     # Directory containing step definitions
├── .env                          # Local environment configurations
├── .env.example                  # Example variables for .env file
├── wdio.conf.ts                  # WebdriverIO configuration file (using TypeScript)
├── package.json                  # Node.js dependencies and scripts
└── README.md                     # Project documentation
```

- `config/`: This directory contains the Android and iOs configurations and shared configuration file (`wdio.shared.conf.ts`) where you can update the desired capabilities and other shared configurations.
- `docs/`: This directory contains additional project documentation.
- `reports/`: This directory contains the generated reports for test execution results.
- `tests/`: This directory contains the main test-related files.
  - `features/`: This directory contains the feature files written in Gherkin syntax that describe the behavior of your web application.
  - `src/helpers/`: This directory contains helper functions that can be used across your step definitions or test specifications.
  - `src/pageobjects/`: This directory contains page objects that represent the different pages or components of web application.
  - `src/step-definitions/`: This directory contains the step definitions that map the steps in feature files to actual code implementation using WebdriverIO's API.
- `.env`: This file should contain local environment configurations specific to your machine. You can use the provided `.env.example` file as a template.

Feel free to modify the project structure and customize the configuration files according to your specific requirements.

## License

This project is licensed under the [MIT License](LICENSE).

Please refer to the individual documentation of WebdriverIO and Cucumber for more details on how to write tests, implement step definitions, and leverage the available features.

For any additional information or questions, please contact [exemplify777x@gmail.com].

Happy testing!

