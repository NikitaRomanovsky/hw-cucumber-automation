# hw-cucumber-automation

## 🚀 Project Overview
This repository implements **UI Component Testing** for specific web application pages and flows using **Cucumber.js, WebdriverIO (WDIO), and TypeScript**. The project tests small isolated UI components and page interactions (e.g., login pages, checkbox handling, or dynamic element interactions).

These tests simulate user interactions to validate specific features and components across multiple UI states.

---

## 🛠️ **Technologies & Tools**
- **Cucumber.js** - Behavior-driven development (BDD) framework for defining test scenarios in Gherkin syntax.  
- **WebdriverIO (WDIO)** - Browser automation tool for testing UI interactions and page flows.  
- **TypeScript** - Statically-typed superset of JavaScript for better type safety and developer experience.  
- **Custom Commands** - Reusable commands encapsulated into `browser.addCommand` for clean interaction logic.  

---

## 📂 **Features**

This project implements tests for:

- Login page interactions  
- Checkbox interactions and dynamic UI state handling  
- Dynamic elements adding and deletion  
- Keys Interaction
- Users Interaction  

---

## 💻 **Setup Instructions**

### 1. Clone the repository
git clone https://github.com/NikitaRomanovsky/hw-cucumber-automation.git

### 2. Install dependencies
yarn install

### 3. Running Tests
#### Each feature file uses respective tags (@tag) to isolate test runs. Replace tagName with the desired tag
yarn test @tagName
#### Run all test cases
yarn wdio
