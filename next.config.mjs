/* @arthur.vsl */

/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack(config) {
      config.module.rules.push({
        test: /\.(mp4|webm|ogg|swf|avi|mov|mkv)$/,
        use: {
          loader: 'file-loader',
          options: {
            publicPath: '/_next/static/videos/',
            outputPath: 'static/videos/',
            name: '[name].[hash].[ext]',
          },
        },
      });
  
      return config;
    },
  };
  
  export default nextConfig;

