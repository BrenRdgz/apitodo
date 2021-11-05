module.exports = {

  apps: [

    {

      name: "todoapi",

      script: './src/index.js',

      instances: 2,

      env: {

          NODE_ENV: "development",

      },

      env_production: {

          NODE_ENV: "production",

      },

    },

  ],

};
