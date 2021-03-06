/* eslint-disable import/no-dynamic-require,global-require,import/no-extraneous-dependencies */

process.on('unhandledRejection', (err) => {
    throw err;
});

const { loadWebpack } = require('../utils');

const buildingPackage = process.cwd();

/**
 * Callback for logging webpack compiling progress
 * @param err
 * @param stats
 */
function runCallback(err, stats) {
    if (err) {
        console.error(err.stack || err);
        if (err.details) {
            console.error(err.details);
        }
        process.exit(1);
        return;
    }
    const info = stats.toJson();
    if (stats.hasErrors()) {
        console.error(info.errors);
        process.exit(1);
    }
    if (stats.hasWarnings()) {
        console.warn(info.warnings);
    }
}

/**
 * Run Webpack
 */
function build() {
    console.log(`Building from ${buildingPackage}`);
    const Compiler = loadWebpack(buildingPackage);
    Compiler.run(runCallback);
}

build();
