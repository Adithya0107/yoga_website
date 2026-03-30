const fs = require('fs');
const path = require('path');

const screensDir = '/Users/aditya/Downloads/zen/src/app/screens';
const skipFiles = [
  'HomeScreen.tsx',
  'SignInScreen.tsx', 
  'WelcomeScreen.tsx',
  'SplashScreen.tsx',
  'ForgotPasswordScreen.tsx',
  'ForgotPasswordSuccessScreen.tsx',
  'CreateAccountScreen.tsx'
];

function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      processDirectory(fullPath);
    } else if (fullPath.endsWith('.tsx') && !skipFiles.includes(file)) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      // Remove solid backgrounds from outer containers
      content = content.replace(/bg-gray-50/g, 'bg-transparent');
      content = content.replace(/bg-gray-100/g, 'bg-transparent');
      
      // Replace solid white cards with glass cards, being careful not to match existing glass classes
      // We look for 'bg-white' that is NOT followed by '/'
      content = content.replace(/bg-white(?!\/)/g, 'bg-white/60 backdrop-blur-xl border border-white/50');

      fs.writeFileSync(fullPath, content, 'utf8');
      console.log(`Updated ${file}`);
    }
  }
}

processDirectory(screensDir);
