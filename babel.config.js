module.exports = {
  plugins: ["@emotion"],
  presets: [
    "@babel/env",
    "@babel/preset-typescript",
    [
      "@babel/preset-react",
      { runtime: "automatic", importSource: "@emotion/react" },
    ],
  ],
};
