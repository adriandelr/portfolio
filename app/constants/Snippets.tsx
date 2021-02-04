export const SNIPPETS: any = [
  {
    title: "General",
    data: [
      {
        title: "Common Technology Definitions",
        content: `
**Lodash** is by far the most widely used common JavaScript Utility library. It provides utility functions for common programming tasks using the functional programming pattern. It offers helpful modular utility in JavaScript data selection, consistency, and performance in cross-environment iteration support for arrays, and objects. It makes JavaScript coding easier and cleaner.

Node Package Manager(**NPM**) is used to pull, and generate packages pointing from remote node modules that containing helpful dependencies, or features used in the app.

We use **Cordova**, a platform for developing, and building hybrid mobile applications using web development technologies. It compiles to iOS/Android platforms, and runs web sources from a WebView.

**Aurelia** is a TypeScript based SPA framework for developing web applications. Similar to Angular, it has routing, source compilation, a model-view composition, data binding, extensible HTML, SPA, UI Composition, etc.

**Framework7** is a UI Mobile Framework to create common web elements to give a more native feel with its styles, and interactions on menus, buttons, modals, lists, etc. similar to Ionic. _Together it features custom **DOM7** library for DOM manipulation that uses the same jQuery syntax.

**Gulp** is used to automate chaining task executions of builds, or compilation of scripts.

**Swiper** is a JavaScript Library we used for slides of gallery, and pages.

**Less**, a pre-processor that extends, and compiles to CSS, its functions such as variables, mixins, nesting, operations, and functions.

**Markdown** is a markup language that formats plain text. The formatted text is then converted into another language, such as HTML.

**Expo** is an open-source platform for making universal native apps for Android, iOS, and the web with JavaScript and React.
        `,
      },
      {
        title: "SDLC Phases [Explained]: How to Craft Great Software in 2021",
        content:
          "Building software is a process. As such it needs a well-defined goal, means to accomplish it and ways to measure, maintain and improve the results. The different approaches to software development provide all that. They’re not all cut from the same cloth, though. Depending on your circumstances, you may need to opt for wildly different approaches.",
        link: "https://techjury.net/blog/sdlc-phases/",
      },
      {
        title: "What is Scrum and Agile? A quick guide to Agile vs Scrum",
        content: `
**Agile** software development methodology is more adaptable to changes as there is no in-depth planning at the beginning of a project rather there are changing requirements throughout the course of the project. A constant feedback from the end users is encouraged. In agile, there is an incremental and iterative development approach. The work is prioritized on the basis of business or customer value. There are cross-functional teams that work on the iterations of the product over a period of time. Each iteration is focused on producing a working product.

**Scrum** is the most popular approach to implement agile. It helps to manage software development with an iterative approach. There are fixed-length iterations known as a sprint that allows shipping software frequently. A sprint lasts one to two weeks and at the end of each sprint, the stakeholders and team members conduct a meeting to plan the next steps.
        `,
        link: "https://reqtest.com/agile-blog/agile-scrum-guide/",
      },
      {
        title:
          "Continuous Integration Automation in 2021 – Hindsight is now really 2020",
        content:
          "A CI/CD pipeline automates your software delivery process. The pipeline builds code, runs tests (CI), and safely deploys a new version of the application (CD).  That is the pretty standard definition that most Engineers would agree with.  Okay, maybe not every engineer and at least 5 would strongly disagree.  I don’t know why, but they just do.  You know who you are.",
        link:
          "https://www.tapqa.com/continuous-integration-automation-in-2021-hindsight-is-now-really-2020/",
      },
      {
        title: "Top 5 CI/CD Tools to Look Out for in 2021",
        content:
          "Automation and continuous integration/continuous development (CI/CD) can have a huge positive impact on how developers and IT operations work. For example, one of the key takeaways from GitLab’s  2020 Global DevSecOps Survey was how CI/CD tools are enabling dev and ops to be more productive by eliminating the need for manual intervention in tasks such as testing, dependency checks, merging code, and pushing from one environment to another.",
        link:
          "https://jfrog.com/knowledge-base/top-5-ci-cd-tools-to-look-out-for-in-2021/",
      },
      {
        title: "NPM Commands",
        content: `
- **npm start** - Run local server
- **npm install** - Installs project package dependencies listed in *package.json*
- **npm update** - Updates platform source files
- **npm run (script)** - This will run compiled commands under *scripts* in *package.json*
- **npm list -g --depth=0** - Check list of globally installed modules
- **npm view <package> version/s** - Specify package version, or information
- **npm list** - List all known npm modules
- **npm update** - Updates all existing modules to the most recent version
        `,
      },
      {
        title: "Git Commands",
        content: `
It is preferred to use VSCode's Integraded Source Control, or Fork.

- **git init** - Set version control system to current directory
- **git clone (branch) (path/to/repository)** - Copy existing remote or local repository to your working directory
- **git remote add origin (server)** - Add a remote repository server to sync changes
- **git add (path/to/file)** - Add selected modified files to the list of commits
- **git add .** - Add all modified, and non tracked changes
- **git add -u** - Only add modified tracked files
- **git reset -- (path/to/file)** - Exclude added file from stage
- **git clean -fd** - Remove untracked files from stage
- **git commit -m (message)** - After adding changes to stage, commit files and message for head/master
- **git push origin (branch)** - Upload committed changes
- **git pull** - Download latest branch files
- **git checkout -b (new_branch_feature_name)** - Create and switch to a new branch where we can work on a specific new feature
- **git checkout -- (path/to/file)** - Undo changes, based from recent commit
- **git status** - Check changes in working directory
- **git log** - Check version history
- **git merge (branch)** - Merges remote branch(master) to your active local branch
- **git rm (filename)** - Deletes a local file
- **git update-index --assume-unchanged (path/to/file)** - Ignore files to be added to commits
- **git update-index --no-assume-unchanged (path/to/file)** - Ignore files to be added to commits
        `,
      },
    ],
  },
  {
    title: "Windows",
    data: [
      {
        title: "Productivity Tools",
        content: `
Apps
- Atom
- VSCode
- Pixie
        `,
      },
    ],
  },
  {
    title: "Mac",
    data: [
      {
        title: "Show Hidden Files",
        content: `
**Shortcut**
> Toggle "CMD + Shift + ."

**Command**
To show all hidden files and folders, that start with a ‘.’ , back to Terminal in OSX 10.9 Mavericks:
\`\`\`
defaults write com.apple.finder AppleShowAllFiles -boolean true; killall Finder
\`\`\`

Getting back to cleanliness:
\`\`\`
defaults write com.apple.finder AppleShowAllFiles -boolean false; killall Finder
\`\`\`
        `,
      },
      {
        title: "Productivity Tools",
        content: `
Apps
- The Unarchiver
- Forklift
- PandaPow
- Alpha Channel Remover
- xScope
        `,
      },
    ],
  },
  {
    title: "HTML",
    data: [
      {
        title:
          "HTML5 Basics For Everyone Tired Of Reading About Deprecated Code",
        content:
          "HyperText Markup Language, is the language used for web documents. It is not a programming language, but rather a language that identifies the meaning, purpose, and structure of text within a document.",
        link: "https://html.com/html5/",
      },
      {
        title: "In-Depth HTML 5 Tutorials for 2021 | egghead.io",
        content:
          "HTML 5 is the structure of our web pages. It is the markup that represents the DOM (document object model).",
        link: "https://egghead.io/q/html",
      },
      {
        title: "10 Best HTML and CSS Courses for Beginners in 2021",
        content:
          "Hello guys, if you want to learn HTML and CSS in 2021 to become a web designer, or a frontend developer and looking for the best HTML 5 and CSS 3 courses then you have come to the right place. In the past, I have shared the best free courses to learn HTML and CSS, and in this article, you have a selection of the best courses you can have to learn a lot about HTML5 and CSS3 online.",
        link:
          "https://medium.com/javarevisited/10-best-html-and-css-courses-for-beginners-in-2021-6757eec00032",
      },
    ],
  },
  {
    title: "JavaScript / TypeScript",
    data: [
      {
        title: "Lodash",
        content:
          "A modern JavaScript utility library delivering modularity, performance & extras.",
        link: "https://lodash.com/",
      },
      {
        title: "Timeout",
        content: `
**JavaScript**
> setTimeout(function(){ 
alert("Sup!"); 
}, 2000);

**TypeScript**
> setTimeout(() => { 
console.log('hi'); 
}, 500);
                `,
      },
      {
        title: "Understanding ‘Variable Shadowing’ with JavaScript",
        content: "What is ‘variable shadowing’ and why it should be avoided.",
        link:
          "https://medium.com/@mayuminishimoto/understanding-variable-shadowing-with-javascript-58fc108c8f03",
      },
    ],
  },
  {
    title: "CSS",
    data: [
      {
        title: "Flexbox Malven",
        content: "A simple visual cheatsheet for flexbox",
        link: "https://flexbox.malven.co/",
      },
      {
        title: "Common Screen Resolution",
        content:
          "Website Dimensions: These Are The Most Common Screen Resolutions To Design For",
        link: "https://www.designrush.com/trends/website-dimensions",
      },
    ],
  },
  {
    title: "React Native",
    data: [
      {
        title: "What is React Native?",
        content:
          "React Native (also known as RN) is a popular JavaScript-based mobile app framework that allows you to build natively-rendered mobile apps for iOS and Android. The framework lets you create an application for various platforms by using the same codebase.",
      },
      {
        title: "Platform Packages",
        content: `
Notable Packages
- Expo
- React Native Appearance
- React Native Elements
- React Native Reanimated
- React Native Gesture Handler
- React Native Safe Area Context
- React Native UI Lib
- React Native Image Viewier
- React Native Snap Carousel
- React Native Vector Icons
- React Native InAppBrowser
- React Native Toggle
- React Native Markdown Display
- React Native Tailwind
- React NativeBase
- React Paper
        `,
      },
      {
        title: "Hooks API Reference",
        content:
          "This page describes the APIs for the built-in Hooks in React.",
        link: "https://reactjs.org/docs/hooks-reference.html",
      },
      {
        title: "The 5 React Native Component Libraries You Should Know in 2018",
        content:
          "Until 2018 we have much many different design pattern and component for React Native but on all of the list, I think this 5 case very important to learn and use in your app.",
        link:
          "https://medium.com/@aras.emami/the-5-react-native-component-libraries-you-should-know-in-2018-f0520d7eb99f",
      },
      {
        title: "React Native Dark Mode Done Right!",
        content:
          "A dead-simple approach to theming and dark mode in react native.",
        link:
          "https://medium.com/@ratebseirawan/react-native-dark-mode-done-right-13f83b39a4ca",
      },
      {
        title: "10 Awesome React Native UI Component Libraries You Should Know",
        content:
          "With the increase in the demand for mobile applications, a large number of enterprises are shifting their focus towards mobile app development. Introduction of new technologies, platforms, and frameworks is allowing mobile app developers to create revolutionary mobile apps. Cross-Platform App Development has gained a lot of popularity in recent times as it enables developers to develop apps for multiple platforms like Android, iOS, Windows with a single code base.",
        link:
          "https://medium.com/javascript-in-plain-english/10-awesome-react-native-ui-component-libraries-you-should-know-cd3296d99c0b",
      },
      {
        title:
          "Creating an embedded browser with React-Native using react-native-webview",
        content:
          "In this tutorial, I will show you how to add an embedded browser into your RN mobile app, just like facebook does in their app.",
        link:
          "https://medium.com/codesight/creating-an-embedded-browser-with-react-native-aea42b54740",
      },
      {
        title: "React Native Carousel",
        content:
          "In this piece, I am going to build a beautiful and effective carousel on React Native. If you don’t know what is Carousel, it is a dynamic scrolling list of elements in horizontal order, where the previous and next elements are partially visible.",
        link:
          "https://medium.com/javascript-in-plain-english/react-native-carousel-4df6db1c3303",
      },
      {
        title:
          "React-native-snap-carousel not compatible with React Native Web causing TypeError",
        content:
          "Getting the error TypeError: Cannot read property 'style' of undefined when running expo web. I think it’s to do with ViewPropTypes being deprecated. How can I fix this for web? I’m currently using Expo and React Native.",
        link:
          "https://forums.expo.io/t/react-native-snap-carousel-not-compatible-with-react-native-web-causing-typeerror/45131",
      },
      {
        title: "Pure functional components in React",
        content:
          "React is an open-source, frontend JavaScript library for building user interface components. One of the most popular frontend libraries of 2020, React has almost 3 million users and a massive developer community and runs on a wide range of platforms, from the web to mobile devices.",
        link: "https://blog.logrocket.com/react-pure-components-functional/",
      },
      {
        title: "useCallback vs useMemo",
        content:
          "What is the difference between useCallBack and useMemo? And why do useMemo and useCallback expect a function? If you’ve worked with React Hooks, you might have asked yourself these questions.",
        link:
          "https://medium.com/@jan.hesters/usecallback-vs-usememo-c23ad1dc60",
      },
      {
        title: "useState in React: A complete guide?",
        content:
          "useState is a Hook that allows you to have state variables in functional components. You pass the initial state to this function and it returns a variable with the current state value (not necessarily the initial state) and another function to update this value.",
        link:
          "https://blog.logrocket.com/a-guide-to-usestate-in-react-ecb9952e406c/",
      },
      {
        title: "Will React Classes Get Deprecated Because of Hooks?",
        content:
          "React Hooks are a complete and better replacement for Classes. Will React Classes stay with us much longer?",
        link:
          "https://blog.bitsrc.io/will-react-classes-get-deprecated-because-of-hooks-bb62938ac1f5",
      },
      {
        title: "How to typescript react native list refs",
        content:
          "VirtualLists (i.e. SectionList, FlatList) have always been dificult for me to describe in typescript, but the following seems to work.",
        link:
          "https://til.hashrocket.com/posts/cgukffdr1n-how-to-typescript-react-native-list-refs",
      },
      {
        title: "Automatic Versioning for React Native Apps",
        content: "You need to update your app's version to 1.0.0.",
        link:
          "https://dev.to/osamaqarem/automatic-versioning-for-react-native-apps-2bf3",
      },
      {
        title: "Testing react native with testing library",
        content:
          "Integration tests are the easiest way to start testing your applications, simply because they are pretty straightforward.",
        link:
          "https://dev.to/gabrieleloy/testing-react-native-with-testing-library-1caa",
      },
    ],
  },
  {
    title: "Ionic",
    data: [
      {
        title: "What is Ionic?",
        content: `
Ionic Framework is an open source UI toolkit for building performant, high-quality mobile and desktop apps using web technologies — HTML, CSS, and JavaScript — with integrations for popular frameworks like Angular, React, and Vue.

- Built using HTML, JS ,CSS, and Angular, recently on React
- Code once, deploy everywhere
- Free and open source
- Built on top of Cordova
- Could be fast as native app
        `,
      },
      {
        title: "Platform Packages",
        content: `
Notable Packages
- aurelia-cli
- gulp
- less
- typescript
- typings
- cordova-plugin-app-version
- cordova-plugin-network-information
- ionic-plugin-keyboard
- cordova-plugin-contacts
- cordova-plugin-whitelist
- cordova-plugin-file
- cordova-plugin-device
- cordova-plugin-geolocation
- cordova-plugin-inappbrowser
- phonegap-plugin-push
- cordova-plugin-iroot
- cordova-plugin-apprate
- cordova-support-google-services
        `,
      },
      {
        title: "End-to-end Testing Mobile Apps with Ionic and Cypress",
        content:
          "Ionic Framework is a free, open-source framework for developing native mobile applications using web development frameworks like Angular, React, and (coming soon!) Vue. Mobile applications developed in Ionic Framework run in a browser during development. Because of this, we can use Cypress to perform tests on the functionality of mobile applications before they are built for a native device.",
        link:
          "https://www.cypress.io/blog/2020/07/08/end-to-end-testing-mobile-apps-with-ionic-and-cypress/",
      },
      {
        title:
          "How to Implement Google Analytics in Ionic 5 Application using Ionic Native and Cordova Plugins",
        content:
          "This tutorial is going to help you learn how to implement Google Analytics in Ionic 5 and Angular application using Ionic Native and Cordova plugins from scratch.",
        link:
          "https://www.positronx.io/add-google-analytics-in-ionic-app-with-ionic-native-and-cordova-plugins/",
      },
    ],
  },
  {
    title: "Links",
    data: [
      {
        title: "Photopea",
        content: "Online Photo Editor.",
        link: "https://www.photopea.com/",
      },
      {
        title: "Mixpanel",
        content:
          "Powerful, self-serve product analytics to help you convert, engage, and retain more users.",
        link: "https://mixpanel.com/",
      },
      {
        title: "Lorem Ipsum",
        content:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        link: "https://www.lipsum.com/",
      },
      {
        title: "Lorem Picsum",
        content: "The Lorem Ipsum for photos.",
        link: "https://picsum.photos/",
      },
      {
        title: "RapidTables",
        content: "Need a conversion?",
        link: "https://www.rapidtables.com/",
      },
      {
        title: "npm trends",
        content: "Compare package download counts over time.",
        link: "https://www.npmtrends.com/",
      },
    ],
  },
];
