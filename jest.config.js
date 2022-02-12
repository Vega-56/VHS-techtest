const config = {
	verbose: true,
	setupFilesAfterEnv: ["<rootDir>/jest-setup.js"],
	testEnvironment: "jest-environment-jsdom",
};

module.exports = config;
