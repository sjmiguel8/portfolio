# Personal Portfolio Website

A modern, responsive portfolio website built with React to showcase projects and skills.

## Features

- 🎨 Modern and clean UI design
- 📱 Fully responsive layout
- 🚀 Fast performance
- ✨ Smooth animations and transitions
- 🎯 Project showcase with filtering
- 🏷️ Skills and technologies tags

## Tech Stack

- React
- TypeScript
- CSS Modules
- Node.js

## Getting Started

### Prerequisites

- Node.js 16 or higher (Download from [nodejs.org](https://nodejs.org))
- npm (comes with Node.js) or yarn

### Running the Website Locally

1. Open your terminal/command prompt

2. Navigate to the project directory, not the my-portfolio directory:
```bash
cd /path/to/portfolio-main
```

3. Install dependencies (only needed first time):
```bash
npm install
# or if using yarn:
yarn install
```

4. Start the development server:
```bash
npm run start
# or if using yarn:
yarn start
```

5. Open your browser and visit:
   - [http://localhost:3000](http://localhost:3000)
   
The website will automatically reload if you make any changes to the code.

### Common Issues

- If you see "command not found: npm", make sure Node.js is properly installed
- If installation fails, try deleting `node_modules` folder and `package-lock.json`, then run `npm install` again
- If the site won't start, make sure port 3000 isn't being used by another application

### Deployment

To create a production-ready build:

```bash
npm run build
# or if using yarn:
yarn build
```

The optimized files will be in the `build` directory, ready to be deployed to a hosting service.

## Project Structure

```
portfolio-main/
├── src/
│   ├── components/     # Reusable components
│   ├── pages/         # Page components
│   ├── styles/        # CSS styles
│   └── assets/        # Images and other static files
├── public/            # Public assets
└── package.json       # Project dependencies
```

## Customization

1. Edit personal information in `src/data/profile.ts`
2. Modify styles in `src/styles/`
3. Add/remove projects in `src/data/projects.ts`

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the Apache License 2.0 - see the [LICENSE](LICENSE) file for details.
