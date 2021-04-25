module.exports = {
  reactStrictMode: true,
  basePath: process.env.NODE_ENV==='production' ? "/brain-whatever": '/',
  webpack: {
    /* config options here */
  },
  parser: "@typescript-eslint/parser",
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended"
  ],
  plugins: [
    "@typescript-eslint",
    "react"
  ],
  rules: {
    "react/react-in-jsx-scope": "off"
  },
  globals: {
    "React": "writable"
  }
};
