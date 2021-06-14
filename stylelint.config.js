module.exports = {
  extends: [
    'stylelint-prettier/recommended',
    'stylelint-config-sass-guidelines',
  ],
  rules: {
    'selector-class-pattern': null,
    'order/properties-alphabetical-order': null,
    'string-quotes': 'double',
    'max-nesting-depth': 2,
  },
};
