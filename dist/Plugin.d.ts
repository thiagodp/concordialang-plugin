import { AbstractTestScript } from './AbstractTestScript';
import { TestScriptExecutionOptions } from './TestScriptExecutionOptions';
import { TestScriptExecutionResult } from './TestScriptExecutionResult';
import { TestScriptGenerationOptions } from './TestScriptGenerationOptions';
import { TestScriptGenerationResult } from './TestScriptGenerationResult';
/**
 * Test script plugin.
 *
 * @author Thiago Delgado Pinto
 */
export interface Plugin {
    /**
     * Generates source code from abstract test scripts, according to the given options.
     *
     * @param abstractTestScripts Abstract test scripts
     * @param options Options
     * @return Generation results.
     */
    generateCode(abstractTestScripts: AbstractTestScript[], options: TestScriptGenerationOptions): Promise<TestScriptGenerationResult>;
    /**
     * Executes test scripts, according to the given options.
     *
     * @param options Execution options.
     * @return Execution results.
     */
    executeCode(options: TestScriptExecutionOptions): Promise<TestScriptExecutionResult>;
    /**
     * Converts a file produced by the execution of test scripts (e.g. a JSON or a XML file).
     *
     * @param filePath Input file.
     * @return Execution results.
     */
    convertReportFile(filePath: string): Promise<TestScriptExecutionResult>;
    /**
     * Returns the default report file name. Concordia may look for it in the
     * output/result directory when the parameter `--just-report` is given.
     */
    defaultReportFile(): Promise<string>;
}
