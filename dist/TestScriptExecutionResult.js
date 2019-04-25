"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Test script execution result.
 *
 * @author Thiago Delgado Pinto
 */
class TestScriptExecutionResult {
    constructor() {
        this.total = new TotalExecutionResult();
    }
}
exports.TestScriptExecutionResult = TestScriptExecutionResult;
/**
 * Total execution result
 *
 * @author Thiago Delgado Pinto
 */
class TotalExecutionResult {
    constructor() {
        this.tests = 0;
        this.passed = 0;
        this.skipped = 0;
        this.failed = 0;
        this.adjusted = 0;
        this.error = 0;
        this.unknown = 0;
    }
}
exports.TotalExecutionResult = TotalExecutionResult;
/**
 * Test suite result.
 *
 * @author Thiago Delgado Pinto
 */
class TestSuiteResult {
}
exports.TestSuiteResult = TestSuiteResult;
/**
 * Test script method result.
 *
 * @author Thiago Delgado Pinto
 */
class TestMethodResult {
}
exports.TestMethodResult = TestMethodResult;
/**
 * Test method exception.
 *
 * @author Thiago Delgado Pinto
 */
class TestMethodException {
}
exports.TestMethodException = TestMethodException;
