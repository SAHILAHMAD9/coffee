# coffee

![Next.js](https://img.shields.io/badge/-Next.js-blue?logo=nextjs&logoColor=white) ![React](https://img.shields.io/badge/-React-blue?logo=react&logoColor=white)
Our platform is a community-driven crowdfunding website designed especially for developers, creators, and innovators. It allows supporters to contribute funds easily — helping developers continue building amazing projects, tools, and apps.
With secure payment integrations, personalized creator pages, and real-time supporter messages, it’s never been easier to connect with your audience and grow sustainably.

## ✨ Features

- 🌐 Api
- 🗄️ Database
- 🔐 Auth
- 🕸️ Web


## 🛠️ Tech Stack

- next.js Next.js
- ⚛️ React


## 📦 Key Dependencies

```
@radix-ui/react-label: ^2.1.1
@tabler/icons-react: ^3.28.1
class-variance-authority: ^0.7.1
clsx: ^2.1.1
framer-motion: ^11.17.0
lucide-react: ^0.471.0
mongoose: ^8.9.5
motion: ^11.17.0
next: 15.1.4
next-auth: ^4.24.11
next-themes: ^0.4.4
razorpay: ^2.9.5
react: ^19.0.0
react-dom: ^19.0.0
react-hot-toast: ^2.5.1
```

## 🚀 Run Commands

- **dev**: `npm run dev`
- **build**: `npm run build`
- **start**: `npm run start`
- **lint**: `npm run lint`


## 📁 Project Structure

```
.
├── actions
│   └── useractions.js
├── app
│   ├── api
│   │   ├── auth
│   │   │   └── [...nextauth]
│   │   │       └── route.js
│   │   ├── razorpay
│   │   │   └── route.js
│   │   └── users
│   │       └── route.js
│   ├── dashboard
│   │   └── page.jsx
│   ├── favicon.ico
│   ├── globals.css
│   ├── home
│   │   └── page.jsx
│   ├── layout.js
│   ├── login
│   │   └── page.jsx
│   ├── page.js
│   ├── paymentgateway
│   │   └── [username]
│   │       └── page.jsx
│   └── signup
│       └── page.jsx
├── components
│   ├── Dropbox.jsx
│   ├── Footer.jsx
│   ├── Navbar.jsx
│   ├── ProfileCard.jsx
│   ├── SessionWrapper.js
│   └── ui
│       ├── AnimateButton.jsx
│       ├── BackgroundBoxes.jsx
│       ├── DotPattern.jsx
│       ├── HoverCard.jsx
│       ├── Input.jsx
│       ├── Label.jsx
│       ├── LampDemo.jsx
│       ├── Meteors.jsx
│       ├── Spotlight.jsx
│       └── TextRevealingCard.jsx
├── components.json
├── db
│   └── dbConnect.js
├── eslint.config.mjs
├── jsconfig.json
├── lib
│   └── utils.jsx
├── models
│   ├── Payment.js
│   └── User.js
├── next.config.mjs
├── notes.js
├── package.json
├── postcss.config.mjs
├── public
│   ├── Coin.gif
│   ├── Cover.jpg
│   ├── Cover.mp4
│   ├── Cup.gif
│   ├── Group.gif
│   ├── Man.gif
│   ├── Profile.gif
│   ├── bg.svg
│   ├── file.svg
│   ├── globe.svg
│   ├── linkin.svg
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
├── tailwind.config.mjs
└── utils
    └── localstorage.js
```

## 🛠️ Development Setup

### Node.js/JavaScript Setup
1. Install Node.js (v18+ recommended)
2. Install dependencies: `npm install` or `yarn install`
3. Start development server: (Check scripts in `package.json`, e.g., `npm run dev`)


## 👥 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork** the repository
2. **Clone** your fork: `git clone https://github.com/SAHILAHMAD9/coffee.git`
3. **Create** a new branch: `git checkout -b feature/your-feature`
4. **Commit** your changes: `git commit -am 'Add some feature'`
5. **Push** to your branch: `git push origin feature/your-feature`
6. **Open** a pull request

Please ensure your code follows the project's style guidelines and includes tests where applicable.

---
