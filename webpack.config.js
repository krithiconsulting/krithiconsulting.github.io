var CommonsPlugin = new require("webpack/lib/optimize/CommonsChunkPlugin")

module.exports = {
  entry: {
    vendor: [
      "js/vendor/jquery.min.js", 
      "js/vendor/jquery.easing.1.3.js",
      "js/vendor/bootstrap.min.js",
      "js/vendor/jquery.waypoints.min.js",
      ],
    app: "./js/main.js"
  },
  plugins: [
    new CommonsPlugin({
      minChunks: 3,
      name: "vendor"
    })
  ],
  output: {
    filename: 'bundle.js'       
  }
};