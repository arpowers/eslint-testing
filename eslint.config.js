// @ts-check
import antfu from "@antfu/eslint-config";

export default antfu(
  {
    typescript: {
      tsconfigPath: "./tsconfig.json",
      parserOptions: {
        project: "./tsconfig.json",
        extraFileExtensions: [".vue", ".json"],
      },
    },
    rules: {
      eqeqeq: "warn",

      "import/no-cycle": [
        "error",
        {
          maxDepth: 5,
          ignoreExternal: true,
        },
      ],
      "ts/no-floating-promises": "error",
    },
  },
  {
    ignores: [
      "**/.ref/**/*",
      "**/__*",
      "node_modules",
      "dist",
      "**/.factor/**",
      ".pnpmfile.cjs",
    ],
  }
);
