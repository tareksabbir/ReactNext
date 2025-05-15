# ReactNext

> **Bangla-first React & Next.js Documentation**

ReactNext is an open‑source documentation project that removes the language barrier for Bangla‑speaking developers who want to master **React** and **Next.js**. Written entirely in Bangla (with essential English terminology preserved), ReactNext delivers clear explanations, real‑world code, and interactive learning aids—all packaged in a familiar, MDX‑powered Next.js site.

---

## Table of Contents

1. [Why ReactNext?](#why-reactnext)
2. [Project Structure](#project-structure)
3. [Content Coverage](#content-coverage)
4. [Key Features](#key-features)
5. [Technical Stack](#technical-stack)
6. [Installation & Local Development](#installation--local-development)
7. [Prerequisites](#prerequisites)
8. [Contributing](#contributing)
9. [Roadmap](#roadmap)
10. [License](#license)
11. [Contact & Support](#contact--support)
12. [Acknowledgements](#acknowledgements)

---

## Why ReactNext?

| Challenge                                                                     | ReactNext Solution                                                                                                                |
| ----------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| English‑only resources can feel overwhelming to new Bangla‑speaking learners. | **Bangla‑first content** with technical terms retained in English where necessary.                                                |
| Fragmented tutorials make it hard to see the big picture.                     | **Structured learning path** that starts with JavaScript fundamentals and ends with full‑blown React/Next.js production patterns. |
| Complex ideas are hard to visualize.                                          | **Diagrams, flowcharts, and interactive Fumadocs UI** components (Steps, Tabs) break down tough concepts.                         |
| Theory without practice is forgettable.                                       | **Real‑world code examples** & mini‑projects demonstrate concepts in context.                                                     |

---

## Project Structure

```text
content/
├── docs/
│   ├── index.mdx                 # Landing page
│   ├── moduleJs.mdx              # JavaScript fundamentals
│   ├── roadmap-for-react.mdx     # Learning roadmap
│   ├── React-documentation/
│   │   ├── Basics-1/
│   │   │   ├── 1.1-react-introduction.mdx
│   │   │   ├── 1.4-react-component.mdx
│   │   │   ├── 1.6-jsx-markup.mdx
│   │   │   └── ...
│   │   ├── Intermediate-1/
│   │   │   ├── 3.7-extracting-state-logic-into-reducer.mdx
│   │   │   └── ...
│   │   ├── Intermediate-2/
│   │   │   ├── 4.1-referencing-values.mdx
│   │   │   ├── 4.2-dom-with-refs.mdx
│   │   │   ├── 4.3-forwarding-refs.mdx
│   │   │   └── ...
│   │   └── ...
└── ...
```

> **Tip:** Directory names map directly to URL slugs, so `Basics-1/1.1-react-introduction.mdx` becomes `/react-documentation/basics-1/react-introduction`.

---

## Content Coverage

1. **JavaScript Fundamentals** – Modern syntax, async patterns, ES6+ features, iterators/generators.
2. **React Basics** – Components & JSX, props/state, event handling.
3. **Intermediate React** – Hooks, Context API, reducers, refs, performance tuning.
4. **Advanced React** – Patterns (HOC, render props, compound components), error boundaries, testing, accessibility.
5. **Next.js Integration** – SSR/SSG, routing, API routes, deployment.

---

## Key Features

* **Bangla‑First Approach** – Native language explanations without sacrificing technical precision.
* **Interactive Learning** – Fumadocs UI components (Steps, Tabs) guide learners through step‑by‑step builds.
* **Visual Aids** – Diagrams & flowcharts illuminate abstract ideas.
* **Gradient Headings** – Readability meets aesthetics.

```jsx
<h1 className="bg-gradient-to-r from-blue-500 to-purple-500 inline-block text-transparent bg-clip-text text-3xl pt-2">
  React কি?
</h1>
```

---

## Technical Stack

| Layer       | Tech                      |
| ----------- | ------------------------- |
| Framework   | **Next.js**               |
| Content     | **MDX** (Markdown + JSX)  |
| Docs Engine | **Fumadocs**              |
| Styling     | **Tailwind CSS**          |
| Components  | Fumadocs UI (Steps, Tabs) |
| Deployment  | **Vercel** (recommended)  |

---

## Installation & Local Development

```bash
# 1. Clone the repository
$ git clone https://github.com/tareksabbir/ReactNext.git

# 2. Navigate into the project directory
$ cd ReactNext

# 3. Install dependencies
$ npm install

# 4. Start the development server
$ npm run dev

# 5. Open your browser at
http://localhost:3000
```

---

## Prerequisites

* **Git / GitHub** – Basic version‑control workflow.
* **JavaScript ES6+** – React is JavaScript at its core.

---

## Contributing

All constructive contributions are welcome!

1. **Fork** the repo.
2. **Create** your feature branch: `git checkout -b feature/amazing-feature`.
3. **Commit** your changes: `git commit -m 'Add some amazing feature'`.
4. **Push** to the branch: `git push origin feature/amazing-feature`.
5. **Open** a Pull Request.

### What to Contribute

| Type          | Examples                                                                |
| ------------- | ----------------------------------------------------------------------- |
| **Content**   | Fix typos, clarify explanations, add new tutorials, translate sections. |
| **Technical** | Improve performance, fix build bugs, enhance accessibility.             |

---

## Roadmap

* [x] JavaScript Fundamentals
* [x] React Core Concepts
* [ ] Advanced State Management (Redux, Zustand, Jotai)
* [ ] Styling Solutions (Tailwind, CSS Modules, Styled Components)
* [ ] React Ecosystem (Routing, API requests, authentication)
* [ ] React Frameworks (Vite, Remix)
* [ ] Beyond React (Team collaboration, career development)

---

## License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for full text.

---

## Contact & Support

| Role   | Contact                                        |
| ------ | ---------------------------------------------- |
| Author | **MD. Tarek Rahman**                           |
| GitHub | [@tareksabbir](https://github.com/tareksabbir) |
| Issues | Please report via **GitHub Issues**            |

---

## Acknowledgements

* The **React** team for the best UI library.
* The **Next.js** team for an outstanding framework.
* **Fumadocs** for the slick documentation tooling.
* Every **contributor** who pushes the project forward.

> “Happy coding 🚀”
