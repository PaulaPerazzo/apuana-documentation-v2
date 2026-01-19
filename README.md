# Apuana Documentation v2

A modern, responsive documentation website for the Apuana Cluster at CIn-UFPE (Centro de Informática da Universidade Federal de Pernambuco). This project provides comprehensive documentation for cluster users, including theory, usage guides, and best practices.

## About

Apuana Documentation v2 is a web-based documentation platform that helps users understand and effectively utilize the Apuana computing cluster. The documentation covers:

- **Cluster Overview**: Architecture and hardware specifications
- **Theory**: Introduction to high-performance computing concepts, Unix/Linux basics, batch systems, and data management
- **User Guides**: Practical guides for running jobs, using Python, Singularity containers, multi-node computing, data sharing, and portability
- **Services**: Available cluster services and resources
- **Dashboard**: Monitoring and management tools
- **FAQ**: Frequently asked questions and troubleshooting

## Technologies Used

- **React 19.2.0**;
- **Vite 7.2.4**;
- **React Router DOM 7.12.0**;
- **Tailwind CSS 4.1.18**;
- **Lucide React**;
- **React Syntax Highlighter**;
- **ESLint**;

## Prerequisites

Before running this project, make sure you have the following installed:

- **Node.js** (LTS version recommended): [Download here](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn**

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/PaulaPerazzo/apuana-documentation-v2.git
   cd apuana-documentation-v2
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

## How to Run

### Development Mode

To start the development server with hot module replacement (HMR):

```bash
npm run dev
```

The application will be available at `http://localhost:5173/` (or another port if 5173 is busy). The terminal will display the exact URL.

### Production Build

To create an optimized production build:

```bash
npm run build
```

This will generate a `dist` folder with optimized static files ready for deployment.

### Preview Production Build

To preview the production build locally:

```bash
npm run preview
```

### Linting

To run ESLint and check code quality:

```bash
npm run lint
```

## Project Structure

```
apuana-documentation-v2/
├── public/               # Static assets
│   ├── assets/          # Images and other static files
│   └── cin_favicon.svg  # CIn favicon
├── src/
│   ├── assets/          # Application assets
│   ├── components/      # Reusable React components
│   │   ├── Layout.jsx   # Main layout wrapper
│   │   └── ui/          # UI components (Alert, etc.)
│   ├── context/         # React context providers
│   │   └── ThemeContext.jsx  # Theme management
│   ├── data/            # Static data and configurations
│   │   └── navigation.jsx    # Navigation structure
│   ├── pages/           # Page components
│   │   ├── Home.jsx
│   │   ├── ClusterCin.jsx
│   │   ├── Usage.jsx
│   │   ├── Theory/      # Theory documentation pages
│   │   └── UserGuide/   # User guide pages
│   ├── App.jsx          # Main application component
│   ├── App.css          # Application styles
│   ├── main.jsx         # Application entry point
│   └── index.css        # Global styles
├── index.html           # HTML template
├── package.json         # Dependencies and scripts
├── vite.config.js       # Vite configuration
├── postcss.config.js    # PostCSS configuration
├── eslint.config.js     # ESLint configuration
└── README.md           # This file
```

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Starts the development server with HMR |
| `npm run build` | Creates an optimized production build |
| `npm run preview` | Previews the production build locally |
| `npm run lint` | Runs ESLint to check code quality |

## Accessing the Cluster

To access the Apuana cluster, users need:
- A **cin.ufpe.br** login account
- Access permissions enabled for cluster machines
- Connection to the **CIn VPN**

## License

This project is maintained by CIn-UFPE for the Apuana Cluster documentation.

## Support

For questions or support regarding the Apuana cluster, please refer to the FAQ section in the documentation or contact the CIn support team.

## Authors

- [José Vinícius Souza](https://github.com/jvss2).

