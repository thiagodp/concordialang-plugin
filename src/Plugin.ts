import { TestScriptExecutionResult } from 'concordialang-types';

import { AbstractTestScript } from './AbstractTestScript';
import { TestScriptExecutionOptions } from './TestScriptExecutionOptions';
import { TestScriptGenerationOptions } from './TestScriptGenerationOptions';
import { TestScriptGenerationResult } from './TestScriptGenerationResult';

/**
 * Concordia Compiler Plugin.
 *
 * All but `name` are optional.
 *
 * @author Thiago Delgado Pinto
 */
export interface Plugin {

    /**
     * Returns the plug-in name.
     */
    name: string;

    //
    // Test Generation and Execution
    //

    /**
     * Multi-platform serve command.
     *
     * 👉 Avoid defining this property whether the testing framework does not need
     * to run a testing server.
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

    /**
     * Returns the default report file name. Concordia Compiler find it when
     * the parameter `--just-report` is given.
     *
     * TO-DO: Remove this method and make Concordia Compiler find its own report.
     */
    defaultReportFile?: () => Promise< string >;

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
