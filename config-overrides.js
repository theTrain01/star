module.exports = function override(config) {
    const modifiedConfig = alias(...)(config)
    ...
    return someElse(modifiedConfig)
  }
  module.exports.jest = function override(config) {
    const modifiedConfig = aliasJest(...)(config)
    ...
    return modifiedConfig
  }