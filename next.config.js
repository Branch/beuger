const withTM = require('next-transpile-modules')([
    '@branch/neumorphism.ui.card',
    '@branch/neumorphism.ui.heading',
    '@branch/neumorphism.ui.text',
    '@branch/neumorphism.ui.button',
    '@branch/neumorphism.styles.neustyles',
    '@teambit/design.ui.external-link'
]);

module.exports = withTM({});