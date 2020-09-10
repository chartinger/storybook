const packageJson = require('../../package.json');

export default {
  packageJson,
  framework: 'vue3',
  frameworkPresets: [require.resolve('./framework-preset-vue3.js')],
};
