module.exports = {
  overrides: [
    {
      files: ["*.jest.js"],
      env: {
        jest: true,
        "jest/globals": true
      }
    }
  ],
  env: {
    browser: true,
    es2021: true
  },
  settings: {
    jest: {
      version: 27
    },
    react: {
      version: "detect"
    }
  },
  extends: ["plugin:react/recommended", "plugin:react-hooks/recommended", "plugin:prettier/recommended"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 13,
    sourceType: "module"
  },
  plugins: ["import", "react", "jsx-a11y", "json", "markdown", "jest"],
  rules: {
    "react/display-name": "off",
    "object-curly-newline": "off",
    "no-debugger": "error",
    "global-require": "off",
    "no-unused-expressions": "off",
    "react/forbid-foreign-prop-types": "off",
    "no-console": "off",
    "consistent-return": "off",
    "no-use-before-define": "off",
    "one-var": "off",
    "default-case": "off",
    "func-names": "off",
    "react/sort-comp": "off",
    "class-methods-use-this": "off",
    radix: "off",
    "no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
    "no-underscore-dangle": "off",
    "import/prefer-default-export": "off",
    "no-plusplus": "off",
    "react/react-in-jsx-scope": 0,
    "react/no-danger": "error",
    "react/jsx-one-expression-per-line": "off",
    "react/prop-types": 0,
    "react/forbid-prop-types": "off",
    "react/function-component-definition": "off",
    "default-param-last": "off",
    "react/require-default-props": ["error"],
    "jsx-a11y/anchor-is-valid": ["error"],
    "react/jsx-props-no-spreading": 0,
    "react/jsx-filename-extension": ["error", { extensions: [".js", ".jsx"] }],
    "jsx-a11y/no-static-element-interactions": "off",
    "jsx-a11y/alt-text": "error",
    "jsx-a11y/no-noninteractive-element-interactions": [
      "error",
      {
        required: {
          some: ["nesting", "id"]
        },
        handlers: ["onClick", "onMouseDown", "onMouseUp", "onKeyPress", "onKeyDown", "onKeyUp"]
      }
    ],
    "jsx-a11y/role-has-required-aria-props": "error",
    "jsx-a11y/click-events-have-key-events": "error",
    "jsx-a11y/label-has-associated-control": "off",
    "react/default-props-match-prop-types": "error",
    "jsx-a11y/aria-activedescendant-has-tabindex": "error",
    "react/button-has-type": "error",
    "jsx-a11y/interactive-supports-focus": "error",
    "jsx-a11y/no-noninteractive-tabindex": "error",
    "react/jsx-boolean-value": "off",
    "arrow-parens": "off",
    "implicit-arrow-linebreak": "off",
    "import/no-extraneous-dependencies": ["error", { devDependencies: true }]
  }
};
