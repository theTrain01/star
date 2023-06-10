const { alias } = require('react-app-rewire-alias')

module.exports = function override(config) {
    alias({
        '@components': 'src/components',
        '@constants': 'src/constants',
        '@containers': 'src/containers',
        '@hoc-helpers': 'src/hoc-helpers',
        '@routes': 'src/routes',
        '@services': 'src/services',
        '@styles': 'src/styles',
        '@static': 'src/static',
        '@utils': 'src/utils',
    })(config);

    return config;
}