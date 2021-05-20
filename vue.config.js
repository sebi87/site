// eslint-disable-next-line no-unused-vars
const path = require('path')
module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? '/site/' : '/',
    // chainWebpack: config => {
    //     config.resolve.alias
    //         .set('assets', path.resolve('assets', 'src/assets'))
    //         .set('@', path.resolve('src'))
    // }
}
