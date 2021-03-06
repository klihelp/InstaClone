// you can use this file to add your custom webpack plugins, loaders and anything you like.
// This is just the basic way to add additional webpack configurations.
// For more information refer the docs: https://storybook.js.org/configurations/custom-webpack-config

// IMPORTANT
// When you add this file, we won't add the default configurations which is similar
// to "React Create App". This only has babel loader to load JavaScript.

module.exports = {
  plugins: [
    // your custom plugins
  ],
  module: {
    rules: [
      {
        test: /\.svg$/,
        loader: 'react-svg-loader',
      },
      {
        test: /\.story.js$/,
        enforce: 'pre',
        loaders: [
          {
            loader: require.resolve('@storybook/addon-storysource/loader'),
            options: {
              prettierConfig: {
                singleQuote: true,
                tabWidth: 2,
                bracketSpacing: true,
                trailingComma: 'all',
              },
            },
          },
        ],
      }
    ],
  },
};
