To install next.js — npx create-next-app appName

Also for the type script to recognise the .css files, we need to create a new file "global.d.ts" with the values,

// global.d.ts
declare module '*.css';
declare module '*.scss';
declare module '*.sass';

And add the extension inside the tsconfig.json file in the include

  "include": [
    "next-env.d.ts",
    "**/*.ts",
    "**/*.tsx",
    ".next/types/**/*.ts",
    ".next/dev/types/**/*.ts",
    "**/*.mts",
    ".next\\dev/types/**/*.ts",
    ".next\\dev/types/**/*.ts",
    "**/*.d.ts"
  ],

npm install @headlessui/react @heroicons/react —> To install hero icons for the project