/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

import path from 'path';

export default {
    clearMocks: true,
    testEnvironment: 'jsdom',
    coveragePathIgnorePatterns: ['index.ts'],
    moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'node'],
    modulePaths: ['<rootDir>src'],
    moduleDirectories: ['node_modules'],
    testMatch: ['<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)'],
    rootDir: '../../',
    setupFilesAfterEnv: ['<rootDir>config/jest/setupTests.ts'],
    moduleNameMapper: {
        '\\.s?css$': 'identity-obj-proxy',
        '\\.svg$': path.resolve(__dirname, './__mocks__/EmptyComponent.tsx'),
    },
};
