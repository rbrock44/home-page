# HomePage

> This project centralizes information I want to a single webpage <br/>
> [Live - HomePage](https://home-page.ryan-brock.com/)

---

## 📚 Table of Contents

- [What's My Purpose?](#-whats-my-purpose)
- [Technologies](#-technologies)
- [Getting Started (Local Setup)](#-getting-started-local-setup)
  - [Run Locally](#run-locally)
  - [Test](#test)
  - [GitHub Hooks](#github-hooks)
  - [Build](#build)
  - [Deploy](#deploy)

---

## 🧠 What's My Purpose?

This single-page angular web application was created to centralize the information I wanted to a single webpage. It communicates with [Home Page Api](https://github.com/rbrock44/home-page-api) for Basketball, Football, MMA and Auction data. It was expanded to hold the concerts attended and matches (think sports games, like Cardinals vs Cubs (baseball)). Overall it's a very handy tool used daily in my life 

---

## 🛠 Technologies

List the tools, languages, or frameworks used.

- Framework: `Angular 12`
- Testing: `Karma`
- Deployment: `GitHub Pages`

---

## 🚀 Getting Started (Local Setup)

* Install [node](https://nodejs.org/en) - v16 is needed
* Clone [repo](https://github.com/rbrock44/home-page)

### Run Locally

```
npm install
npm start
```

### Test

- Unit
    - `ng test` || `npm run test`
- Integration
    - `ng e2e` || `npm run e2e`

### Github Hooks

- Build
    - Trigger: On Push to Main
    - Action(s): Builds application then kicks off gh page action to deploy build output

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

### Deploy

Run `npm run prod` to build and deploy the project. Make sure to be on `master` and that it is up to date before running the command. It's really meant to be a CI/CD action
