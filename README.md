# HomePage

> This project centralizes information I want to a single webpage <br/>
> [Live - HomePage](https://home-page.ryan-brock.com/)

Screenshots:
![preview](/screenshots/main.png)
![settings](/screenshots/settings.png)
![concerts](/screenshots/concerts.png)
![matches](/screenshots/matches.png)

---

## 📚 Table of Contents

- [What's My Purpose?](#-whats-my-purpose)
- [How to Use](#-how-to-use)
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

## 🚦 How to Use

Pages

- `Home Page`
    - Navigation Banner - quick navigation to all pages and a few links
        - `Home` - goes to home page
        - `Settings` - goes to settings page
        - `Links` - goes to links page, this holds links/bookmarks I need
        - `Concerts` - goes to concerts page, this holds a table of concerts attended
        - `Matches` - goes to matches page, this holds a table of matches (Basketball, Football, Hockey, etc) attended
        - `Directory` - link to [Ryan's Website Directory](https://directory.ryan-brock.com/)
        - `Homarr` - link to local network Hommar docker image
    - Media Search
        - use this to see if the movie (or tv show) is in my collection
        - Refresh button - refreshes database with source (will take a minute or so to fully update)
    - GDQ Banner
        - this shows the upcoming GDQ event (is yellow when event is LIVE)
    - Sports Widgets
        - Basketball - shows today's or upcoming basketball games
        - Football - shows today's or upcoming football games
        - MMA - shows today's or upcoming mma events
    - Auction Widget
- `Settings`
  - Title - Title displayed on home page
  - Refresh Rate - how often the website should update information on it
  - Show Basketball Games - YES/NO option to display basketball widget
  - Show Football Games - YES/NO option to display football widget
  - Show MMA Fights - YES/NO option to display mma widget
  - Show Auction - YES/NO option to display auction widget
  - Which Basketball Games - Today/Upcoming option to swap from displaying only today's games or the soonest found games (could be today)
  - Which Football Games - Today/Upcoming option to swap from displaying only today's games or the soonest found games (could be today)
  - Which MMA Fights - Today/Upcoming option to swap from displaying only today's fights or the soonest found fights (could be today)
  - Color - the accent color of the website (buttons)
  - Apply Button - apply changes to settings made
  - Reset Everything Button - reset all settings to default
- `Links` 
    - holds links/bookmarks I need so I don't have to save bookmarks to new browsers/computers
- `Concerts`
    - holds a table of concerts attended for quick access and filtering
- `Matches`
    - holds a table of matches (Basketball, Football, Hockey, etc) attended for quick access and filtering

Screenshots:
![preview](/screenshots/main.png)
![settings](/screenshots/settings.png)
![concerts](/screenshots/concerts.png)
![matches](/screenshots/matches.png)

---

## 🛠 Technologies

- Framework: `Angular 12`
- Testing: `Karma`
- Deployment: `GitHub Pages`

---

## 🚀 Getting Started (Local Setup)

* Install [node](https://nodejs.org/en) - v16 is needed
* Clone [repo](https://github.com/rbrock44/home-page)

---

### Run Locally

```
npm install
npm start
```

---

### Test

- Unit
    - `ng test` || `npm run test`
- Integration
    - `ng e2e` || `npm run e2e`

---

### Github Hooks

- Build
    - Trigger: On Push to Main
    - Action(s): Builds application then kicks off gh page action to deploy build output

---

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

---

### Deploy

Run `npm run prod` to build and deploy the project. Make sure to be on `master` and that it is up to date before running the command. It's really meant to be a CI/CD action

---
