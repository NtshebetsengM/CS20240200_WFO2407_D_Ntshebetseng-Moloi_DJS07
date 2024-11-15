module.exports = {
  root: true,
  env: { 
    browser: true, 
    es2020: true 
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',     // React-specific linting rules
    'plugin:react/jsx-runtime',     // JSX-runtime rules for React 17+
    'plugin:react-hooks/recommended', // React Hooks linting rules
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { 
    ecmaVersion: 'latest', 
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,  // Ensure JSX is parsed correctly
    },
  },
  settings: { 
    react: { 
      version: '18.2',  // Explicitly set React version to match your project
    },
  },
  plugins: ['react-refresh'],
  rules: {
    'react/jsx-no-target-blank': 'off',  // Optional: Disable rule for anchor elements with target="_blank"
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'react/prop-types': 'warn',         // Warn if prop-types are missing
    'react/jsx-no-undef': 'error',      // Error if JSX components are undefined
    'react/jsx-uses-vars': 'error',     // Ensure JSX components are used correctly
    'react/no-unused-prop-types': 'error', // Error if unused prop-types are declared
    'react/react-in-jsx-scope': 'off',  // Not needed with React 17+ JSX transform
    'react/jsx-uses-react': 'off',      // Not needed with React 17+ JSX transform
  },
};
