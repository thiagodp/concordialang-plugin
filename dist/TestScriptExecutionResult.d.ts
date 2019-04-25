import { Location } from 'concordialang-types';
/**
 * Test script execution result.
 *
 * @author Thiago Delgado Pinto
 */
export declare class TestScriptExecutionResult {
    schemaVersion: string;
    sourceFile: string;
    plugin: {
        name: string;
        description: string;
        version: string;
        targets: string[];
    };
    started: string;
    finished: string;
    durationMs: number;
    total: TotalExecutionResult;
    results: TestSuiteResult[];
}
/**
 * Total execution result
 *
 * @author Thiago Delgado Pinto
 */
export declare class TotalExecutionResult {
    tests: number;
    passed: number;
    skipped: number;
    failed: number;
    adjusted?: number;
    error: number;
    unknown: number;
}
/**
 * Test suite result.
 *
 * @author Thiago Delgado Pinto
 */
export declare class TestSuiteResult {
    suite: string;
    methods: TestMethodResult[];
}
/**
 * Test script method result.
 *
 * @author Thiago Delgado Pinto
 */
export declare class TestMethodResult {
    name: string;
    status: 'passed' | 'adjusted' | 'failed' | 'skipped' | 'error' | 'unknown';
    durationMs: number;
    isForSetup?: boolean;
    exception?: TestMethodException;
}
/**
 * Test method exception.
 *
 * @author Thiago Delgado Pinto
 */
export declare class TestMethodException {
    type: string;
    message: string;
    stackTrace: string;
    scriptLocation: Location;
    specLocation?: Location;
}
