/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

/** @type {import('jest').Config} */
const config = {
    clearMocks: true,
    coverageProvider: 'v8',
    testEnvironment: 'jest-environment-jsdom', // Make sure the correct environment is used
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'], // Correct path to the setup file
};

module.exports = config;
