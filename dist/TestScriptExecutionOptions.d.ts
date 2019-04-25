/**
 * Test script execution options.
 *
 * @author Thiago Delgado Pinto
 */
export declare class TestScriptExecutionOptions {
    sourceCodeDir: string;
    executionResultDir: string;
    filter: TestScriptExecutionFilter;
    /**
     * Constructor
     *
     * @param sourceCodeDir Directory for script files
     * @param executionResultDir Directory for execution result files
     * @param filter Filter
     */
    constructor(sourceCodeDir?: string, executionResultDir?: string, // where to place the file with the execution results
    filter?: TestScriptExecutionFilter);
}
/**
 * Test script execution filter.
 *
 * @author Thiago Delgado Pinto
 */
export declare class TestScriptExecutionFilter {
    minFeatureImportance: number;
    maxFeatureImportance: number;
    minScenarioImportance: number;
    maxScenarioImportance: number;
    featureName: string;
    scenarioName: string;
}
