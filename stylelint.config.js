module.exports = {
  plugins: ['stylelint-prettier'],
  extends: [
    'stylelint-prettier/recommended',
    'stylelint-config-sass-guidelines',
  ],
  rules: {
    'prettier/prettier': true,
    'selector-class-pattern': null,
    'selector-no-vendor-prefix': null,
    'order/properties-alphabetical-order': null,
    'max-nesting-depth': 4,
  },
};
