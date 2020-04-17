import { Location } from 'concordialang-types';
/**
 * Test script execution result.
 *
 * @author Thiago Delgado Pinto
 */
export declare class TestScriptExecutionResult {
    /** It should follow semantic versioning (semver.org) */
    schemaVersion: string;
    /** Report source file, e.g. xunit.xml */
    sourceFile: string;
    /**
     * Executed Concordia plug-in. Relevant whether the report is serialized.
     */
    plugin: {
        name: string;
        description: string;
        version: string;
    };
    /** Time when the tests' execution started, in UTC format */
    started?: string;
    /** Time when the tests' execution finished, in UTC format */
    finished: string;
    /** Duration of the tests' execution, in milliseconds */
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
    /** E.g., setUp/setUpOnce/before/beforeAll */
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
