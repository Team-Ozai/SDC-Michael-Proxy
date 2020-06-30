const webpack = require("webpack");

module.exports = {
  entry: {
    vendor: ["styled-components"],
    app1: "./campaign/client/src/index.jsx",
    app2: "./VA-Service/src/index.jsx",
    app3: "./WWL---Service/public/index.jsx",
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      minChunks: Infinity,
    }),
  ],
};
