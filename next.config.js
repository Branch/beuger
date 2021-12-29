const withTM = require('next-transpile-modules')([
    '@branch/neumorphism.ui.circle',
    '@branch/neumorphism.ui.slider',
    '@branch/neumorphism.ui.link',
    '@branch/neumorphism.ui.button',
    '@branch/neumorphism.ui.card',
    '@branch/neumorphism.ui.text',
    '@branch/neumorphism.ui.heading',
    '@branch/neumorphism.styles.neustyles'
]);

module.exports = withTM({
    debug: true
});