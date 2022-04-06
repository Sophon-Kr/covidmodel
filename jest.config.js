module.exports = {
  setupFilesAfterEnv: ["./test/setupTests.js"],
  moduleNameMapper: {
    "\\.(css)$": "identity-obj-proxy",
    "\\.(jpg|jpeg|png)$": "identity-obj-proxy",
  },
};
