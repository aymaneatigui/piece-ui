import path from 'path';

const config = {
  stories: ['../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],

  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions',
    '@storybook/addon-styling-webpack',
    {
      name: '@storybook/addon-styling-webpack',

      options: {
        rules: [
          {
            test: /\.css$/,
            sideEffects: true,
            use: [
              require.resolve('style-loader'),
              {
                loader: require.resolve('css-loader'),
                options: {
                  importLoaders: 1
                }
              },
              {
                loader: require.resolve('postcss-loader'),
                options: {
                  implementation: require.resolve('postcss')
                }
              }
            ]
          }
        ]
      }
    },
    '@storybook/addon-webpack5-compiler-babel',
    '@chromatic-com/storybook'
  ],

  webpackFinal: async config => {
    const postCssConfig = {
      test: /\.css$/,
      use: [
        {
          loader: 'postcss-loader',
          options: {
            postcssOptions: {
              plugins: [require('tailwindcss'), require('autoprefixer')]
            }
          }
        }
      ],
      include: path.resolve(__dirname, '../')
    };
    if (config?.module?.rules) {
      config.module.rules.push(postCssConfig);
    } else {
      config.module = {
        ...config.module,
        rules: [postCssConfig]
      };
    }

    config.resolve = {
      ...config.resolve,
      alias: {
        '@components': path.resolve(__dirname, '../src/components/'),
        '@constants': path.resolve(__dirname, '../src/assets/constants')
      }
    };

    return config;
  },

  framework: {
    name: '@storybook/react-webpack5',
    options: {}
  },

  docs: {},

  typescript: {
    reactDocgen: 'react-docgen-typescript'
  }
};
export default config;
