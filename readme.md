[![Build Status](https://travis-ci.org/thiagodp/concordialang-plugin.svg?branch=master)](https://travis-ci.org/thiagodp/concordialang-plugin)
[![npm version](https://badge.fury.io/js/concordialang-plugin.svg)](https://badge.fury.io/js/concordialang-plugin)
[![GitHub last commit](https://img.shields.io/github/last-commit/thiagodp/concordialang-plugin.svg)](https://github.com/thiagodp/concordialang-plugin/releases)

# concordialang-plugin

> Concordia Compiler plug-in interface

## How to create a plug-in

> 👉 The following procedure requires Concordia Compiler `2.0.0-alpha-19` or later

1. Choose wisely your plug-in name, making sure that it starts with `concordialang-`. We recommend that it contains the target frameworks - _e.g._ `concordialang-foo-bar` if you will use the (hypothetical) frameworks `"foo"` and `"bar"`.
2. Create a new repository and clone it.
3. Create a new file `package.json`.
4. Install the packages `concordialang-types` and `concordialang-plugin` as dependencies, _e.g._ `npm i concordialang-types concordialang-plugin`.
5. Add the property `"concordiaPlugin": true` to your `package.json`.
6. Create a file (e.g. `src/index.ts`) with a class that implements the interface `Plugin` (see [API](#api)).
7. Make sure that the created class has a `default` export (ex. `export default class`).
8. Set the property `"main"` from your `package.json` to the JS file that contains the created class (ex. `"dist/index.js"`).
9. Check your plug-in execution (see some tips below).
10. Publish your package if you desire to install it by name.

**Note**: You can use JavaScript instead of TypeScript.


## How to check your plug-in execution

1. Create a new project with the file `package.json`.
2. Create a simple Concordia feature file, ex. `features/example.feature`.
3. Install Concordia Compiler (`npm i -D concordialang`) and run the init command (`npx concordia --init`).
4. Install your plug-in from its directory (_e.g._, `npm i -D /path/to/your-plugin`)
5. Run Concordia with your plug-in (ex. `npx concordia -p your-plugin`) and see with it is executed correctly.


## How to publish your plug-in

1. Make sure you have an [NPM](https://www.npmjs.com/) account.
2. Enter your project folder and run `npm login`.
3. Create a property `"files"` into your `package.json` that indicates the (source code) files to distribute.
4. Make sure the property `"version"` of your package file was set correctly.
5. Run `npm publish --dry-run` to simulate the publishing.
6. Make sure its all correct and then run `npm publish`.


## Example

See [fake-plugin](https://github.com/concordialang/fake-plugin) for a simple example.


## API

```typescript
export interface Plugin {

    //
    // Test Generation and Execution
    //

    /**
     * Multi-platform command to start a testing server, if needed.
     *
     * 👉 Set its value only if the testing framework does need a testing server.
     *
     * @example
     *      "selenium-standalone start"
     */
    serveCommand?: string;

    /**
     * Generates source code from abstract test scripts, according to the given options.
     *
     * @param abstractTestScripts Abstract test scripts
     * @param options Options
     * @return Generation results.
     */
    generateCode?: (
        abstractTestScripts: AbstractTestScript[],
        options: TestScriptGenerationOptions
    ) => Promise< TestScriptGenerationResult >;

    /**
     * Executes test scripts, according to the given options.
     *
     * @param options Execution options.
     * @return Execution results.
     */
    executeCode?: ( options: TestScriptExecutionOptions ) => Promise< TestScriptExecutionResult >;

    /**
     * Converts a file produced by the execution of test scripts (e.g. a JSON or a XML file).
     *
     * @param filePath Input file.
     * @return Execution results.
     */
    convertReportFile?: ( filePath: string ) => Promise< TestScriptExecutionResult >;

    //
    // Events
    //

    /**
     * Executes right before Concordia Compiler report the test script results.
     *
     * @param result Test script results.
     * @param options Test script execution options.
     */
     beforeReport?: ( result: TestScriptExecutionResult, options?: TestScriptExecutionOptions ) => Promise< void >;

    /**
     * Executes right after Concordia Compiler report the test script results.
     *
     * @param result Test script results.
     * @param options Test script execution options.
     */
    afterReport?: ( result: TestScriptExecutionResult, options?: TestScriptExecutionOptions ) => Promise< void >;
}
```

## License

![AGPL](https://www.gnu.org/graphics/agplv3-88x31.png) © [Thiago Delgado Pinto](https://github.com/thiagodp)

[GNU Affero General Public License version 3](LICENSE.txt)
