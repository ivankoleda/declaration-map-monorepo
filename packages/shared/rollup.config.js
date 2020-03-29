import typescript from "rollup-plugin-typescript2";
import pkg from "./package.json";

export default {
  input: "./src/index.ts",
  output: [{ file: pkg.main, format: "cjs" }],
  dependencies: {
    ...pkg.devDependencies
  },
  plugins: [typescript()]
};
