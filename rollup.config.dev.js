const resolve = require('@rollup/plugin-node-resolve');
const typescript = require('rollup-plugin-typescript2');
const babel = require('@rollup/plugin-babel');
const serve = require('rollup-plugin-serve');
const terser = require('@rollup/plugin-terser');
const json = require('@rollup/plugin-json');

module.exports = {
  input: ["src/DigitalClock.ts"],
  output: {
    dir: "./dist",
    format: "es",
    sourcemap: true
  },
  plugins: [
    resolve(),
    typescript(),
    json(),
    babel({
      exclude: "node_modules/**",
    }),
    terser(),
    serve({
      contentBase: "./dist",
      host: "0.0.0.0",
      port: 5000,
      allowCrossOrigin: true,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    }),
  ],
};
