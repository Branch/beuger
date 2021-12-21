const withTM = require('next-transpile-modules')([
    '@branch/neumorphism.ui.card',
    '@branch/neumorphism.ui.circle',
    '@branch/neumorphism.styles.neustyles',
    '@teambit/design.ui.external-link'
]);

module.exports = withTM({});