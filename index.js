module.exports = {
  presets : [
    [ 'babel-preset-es2015', { modules: false } ],
    require('babel-preset-es2016'),
    require('babel-preset-es2017'),
    require('babel-preset-stage-3'),
    require('babel-preset-stage-2'),
  ],
  plugins : [
    require('babel-plugin-transform-es5-property-mutators'),
    require('babel-plugin-transform-node-env-inline'),
  ],
  env : {
    production : {
      plugins : [
        require('babel-plugin-transform-inline-environment-variables')
      ]
    },
    test : {
      plugins : [
        require('babel-plugin-istanbul')
      ]
    }
  }
};
