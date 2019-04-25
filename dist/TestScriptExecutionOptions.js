"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Test script execution options.
 *
 * @author Thiago Delgado Pinto
 */
class TestScriptExecutionOptions {
    /**
     * Constructor
     *
     * @param sourceCodeDir Directory for script files
     * @param executionResultDir Directory for execution result files
     * @param filter Filter
     */
    constructor(sourceCodeDir = null, executionResultDir = null, // where to place the file with the execution results
    filter = new TestScriptExecutionFilter()) {
        this.sourceCodeDir = sourceCodeDir;
        this.executionResultDir = executionResultDir;
        this.filter = filter;
    }
}
exports.TestScriptExecutionOptions = TestScriptExecutionOptions;
/**
 * Test script execution filter.
 *
 * @author Thiago Delgado Pinto
 */
class TestScriptExecutionFilter {
    constructor() {
        this.minFeatureImportance = 1; // 1..9
        this.maxFeatureImportance = 9; // 1..9
        this.minScenarioImportance = 1; // 1..9
        this.maxScenarioImportance = 9; // 1..9
        this.featureName = null; // null == don't filter
        this.scenarioName = null; // null == don't filter
    }
}
exports.TestScriptExecutionFilter = TestScriptExecutionFilter;
