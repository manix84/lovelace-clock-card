const typescript = require('rollup-plugin-typescript2');
const commonjs = require('@rollup/plugin-commonjs');
const nodeResolve = require('@rollup/plugin-node-resolve');
const babel = require('@rollup/plugin-babel');
const terser = require('@rollup/plugin-terser');
const json = require('@rollup/plugin-json');
const serve = require('rollup-plugin-serve');

const dev = process.env.ROLLUP_WATCH;

const serveopts = {
  contentBase: ['./dist'],
  host: '0.0.0.0',
  port: 5000,
  allowCrossOrigin: true,
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
};

const plugins = [
  nodeResolve({}),
  commonjs(),
  typescript(),
  json(),
  babel({
    exclude: 'node_modules/**',
  }),
  dev && serve(serveopts),
  !dev && terser(),
];

module.exports = {
  input: 'src/DigitalClock.ts',
  output: {
    dir: 'dist',
    format: 'es',
  },
  plugins,
};
