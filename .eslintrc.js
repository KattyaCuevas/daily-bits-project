module.exports = {
  plugins: ["react", "react-hooks", "unicorn", "prettier"],
  extends: [
    "plugin:unicorn/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:prettier/recommended",
    "eslint:recommended",
  ],
  rules: {
    "react/react-in-jsx-scope": "off",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
