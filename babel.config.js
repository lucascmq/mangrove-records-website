module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          browsers: [
            'last 2 versions',
            '> 1%',
            'not dead'
          ]
        },
        modules: false, // Preserva ES6 modules para webpack
        useBuiltIns: 'usage',
        corejs: 3
      }
    ]
  ],
  plugins: [],
  env: {
    development: {
      presets: [
        [
          '@babel/preset-env',
          {
            targets: {
              node: 'current'
            }
          }
        ]
      ]
    }
  }
};