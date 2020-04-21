const bionic = require('@arkrm/bionic');

module.exports = {
  extends: [require.resolve('@arkrm/bionic/eslint')],
  rules: {
    '@typescript-eslint/no-var-requires': 'off',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [...bionic.eslint.rules['import/no-extraneous-dependencies'][1].devDependencies, './script/**/*', '.eslintrc.js'],
      },
    ],
  },
};
