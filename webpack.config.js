const zlib = require("zlib");
const CompressionPlugin = require("compression-webpack-plugin");
// module.exports = {
//   plugins: [
//     new CompressionPlugin({
//       filename: "[path][base].br",
//       algorithm: "brotliCompress",
//       test: /\.(js|ts|css|html|svg)$/,
//       compressionOptions: {
//         params: {
//           [zlib.constants.BROTLI_PARAM_QUALITY]: 11,
//         },
//       },
//       threshold: 10240,
//       minRatio: 0.8,
//       deleteOriginalAssets: false,
//     }),
//   ],
// };
module.exports = {
  plugins: [
    new CompressionPlugin({
      algorithm: "gzip",
    }),
  ],
};
