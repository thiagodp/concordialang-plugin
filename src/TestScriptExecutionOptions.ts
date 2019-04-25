/**
 * Test script execution options.
 *
 * @author Thiago Delgado Pinto
 */
export class TestScriptExecutionOptions {

    /**
     * Constructor
     *
     * @param sourceCodeDir Directory for script files
     * @param executionResultDir Directory for execution result files
     * @param filter Filter
     */
    constructor(
        public sourceCodeDir: string = null,
        public executionResultDir: string = null, // where to place the file with the execution results
        public filter: TestScriptExecutionFilter = new TestScriptExecutionFilter()
    ) {

    }
}

/**
 * Test script execution filter.
 *
 * @author Thiago Delgado Pinto
 */
export class TestScriptExecutionFilter {

    public minFeatureImportance: number = 1;  // 1..9
    public maxFeatureImportance: number = 9;  // 1..9

    public minScenarioImportance: number = 1;  // 1..9
    public maxScenarioImportance: number = 9;  // 1..9

    public featureName: string = null; // null == don't filter
    public scenarioName: string = null; // null == don't filter
}
