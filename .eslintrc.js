// module.exports = {
//   root: true,
//   env: {
//     node: true,
//   },
//   extends: [
//     'plugin:vue/vue3-recommended',
//     '@vue/airbnb',
//     '@vue/typescript/recommended',
//   ],
//   parserOptions: {
//     ecmaVersion: 2020,
//   },
//   rules: {
//     'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
//     'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
//     'import/prefer-default-export': 0,
//   },
// };

module.exports = {
  root         : true,
  env          : {
    node : true,
  },
  extends      : [
    "plugin:vue/vue3-essential",
    "@vue/airbnb",
    "@vue/typescript/recommended",
  ],
  parserOptions : {
//    parser : "@babel/eslint-parser",
    ecmaVersion : 2020,
  },
  globals      : {
    bootstrap : "readonly"
  },
  rules        : {
    "no-console"                 : process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger"                : process.env.NODE_ENV === "production" ? "warn" : "off",
    "max-len"                    : ["error", {
      code     : 250,
      comments : 200,
    }],
    "key-spacing"                : ["error", {
      afterColon  : true,
      beforeColon : true,
      align       : "colon",
      mode        : "minimum",
    }],
    "comma-dangle"               : ["error", "only-multiline"],
    "import/extensions"          : 0,
    quotes                       : ["warn", "double", {avoidEscape : true}],
    "object-curly-spacing"       : ["error", "never"],
    "no-unused-vars"             : ["warn", {argsIgnorePattern : "^_"}],
    indent                       : ["error", 2, {
      ignoreComments : true,
      SwitchCase     : 1
    }],
    "no-multiple-empty-lines"    : ["error", {
      max    : 2,
      maxEOF : 1,
      maxBOF : 0
    }],
    "padded-blocks"               : ["warn", "never"],
    "no-multi-spaces"             : ["error", {ignoreEOLComments : true}],
    "lines-between-class-members" : 0
  },
  overrides    : [
    {
      files : [
        "**/__tests__/*.{j,t}s?(x)",
        "**/tests/unit/**/*.spec.{j,t}s?(x)",
      ],
      env  : {
        jest : true,
      },
    },
  ],
};

