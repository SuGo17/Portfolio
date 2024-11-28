import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Template for the React component
const componentTemplate = (componentName) => {
  return `import {FC} from 'react';
import modules from "./index.module.scss";
import useGetStyleSelectors from '@src/Hooks/useGetStyleSelectors';
  
type ${componentName}Props = {};
  
const ${componentName}:FC<${componentName}Props> = () => {
    const getSCSSSelectors = useGetStyleSelectors(modules);
    return (
        <div></div>
    );
}
  
export default ${componentName};`;
};

// Function to create the component file
const createComponent = (directoryPath, componentName) => {
  if (!componentName) {
    console.error("Please provide a component name.");
    return;
  }

  const dirPath = path.join(__dirname, directoryPath, componentName);
  const filePath = path.join(dirPath, "index.tsx");
  const cssPath = path.join(dirPath, "index.module.scss");

  // Check if the component directory already exists
  if (fs.existsSync(dirPath)) {
    console.error(`Component ${componentName} already exists.`);
    return;
  }

  // Create the directory and file
  fs.mkdirSync(dirPath, { recursive: true });
  fs.writeFileSync(filePath, componentTemplate(componentName));
  fs.writeFileSync(
    cssPath,
    `@use "@Styles/index.module.scss";
@use "@Styles/utils.module.scss"`
  );

  console.log(`Component ${componentName} created at ${filePath}`);
};

// Get the component name from command-line arguments
const args = process.argv.slice(2);
const [directoryPath, componentName] = args;

createComponent(directoryPath, componentName);
