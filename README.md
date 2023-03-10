# My First React App

![GitHub last commit](https://img.shields.io/github/last-commit/JoyZadan/first-react-app?color=fuschia&style=for-the-badge)
![GitHub contributors](https://img.shields.io/github/contributors/JoyZadan/first-react-app?color=purple&style=for-the-badge)
![GitHub language count](https://img.shields.io/github/languages/count/JoyZadan/first-react-app?color=blue&style=for-the-badge)
![GitHub top language](https://img.shields.io/github/languages/top/JoyZadan/first-react-app?color=yellow&style=for-the-badge)

---
## Project Brief
### Project Description
As part of your React journey, you've been hired by a client to develop a frontend portfolio website using React.
![project brief](./documentation/project-brief.png)

**Learning Objectives**
1. Create a *Navigation Menu*
2. Create a *User Sign In form* displaying different content based on user interactions
3. Create an *API-Loaded Image List* complete with title, author and description text
4. Create an *Interactive Search Field*

---
## Overview: Learning how to set up a React Application using a tool called npx
To get the most out of React we need to couple it with an open source, JavaScript runtime called **NodeJS**.
We will be using **node** to:
* run our development server while we're writing React code
* handle transpiling JSX (converting our React code) to vanilla JavaScript so it can run in the browser
* allow us to use the Node Package Manager (npm) to install packages and extensions for our React apps

In the React project example we looked at previously, we used the command `npm start` to start the React app.
**Npm** is a tool that is distributed with NodeJS which allows us to:
* install and uninstall packages
* run a development server
* create and destroy React applications

While it's not an absolute requirement to use Node, React and Node are often tightly coupled, so we'll be using Node and npm throughout this series.

[Learn more about NPM here](https://www.npmjs.com/)

---
## How to create your first React App
* Create a repository on GitHub
* Create a GitPod workspace from it
* Use the npx command inside your workspace to create your react application (node is already installed with GitPod)
`npx create-react-app my-app --use-npm`

???**npx** executes node packages and comes pre-bundled with **npm** which is pre-bundled with **Node**
These three tools together make it easy to create React applications with this simple `create-react-app` command.

With running the `npx create-react-app my-app --use-npm` command completed, npx has created a react app in the **my-app** folder. Everything that **npm** installed went into the **node_modules** folder and this is where React will look for any packages it needs.

To run the **my-app**: <br/>
`cd my-app`<br/>
`npm start`

Just like that, we now have a complete React app ready to go and we're ready to start creating our own components `create-react-app` is a great little tool that gives us all the boiler plate code needed to start a React app and many  developers like to start here to get their apps up and running, and then just delete anything they don't need and make adjustments as required.

**NOTE:**
* If you are using GitPod, you have to add the `--use-npm` when running the `create-react-app` command because by default, GitPod will use **yarn**, a different package manager.
* To stop the server, use **CTRL/CMD + C**

---
## React Developer Tools
Install React Developer Tools from Chrome Extensions.

The reason we need the React developer tools is because sometimes we want to be able to examine and tweak the actual React application we're building, rather than the HTML it generates.

The first thing to notice with React Developer Tools is that it's a great way to identify a site that uses React. Whenever you're on a site that uses React, the icon will be lit up in either blue or orange.
* ???? If it's blue, it means that the site is running the production build of React, which is the optimized version.
* ???? If it's orange it means that it's running the unoptimized development version.

---
Next: See [**React Components**](https://github.com/JoyZadan/ci-react-core-react-components)

---

Next: Also [**Using Functional Components Challenge**](https://github.com/JoyZadan/react-challenges)

---

