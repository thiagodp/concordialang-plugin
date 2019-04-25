import { Location } from 'concordialang-types';

/**
 * Test script execution result.
 *
 * @author Thiago Delgado Pinto
 */
export class TestScriptExecutionResult {

    schemaVersion: string; // Follows semantic versioning (semver.org)

    sourceFile: string; // e.g.: xunit.xml

    plugin: {
        name: string;
        description: string;
        version: string;
        targets: string[];
    };

    started: string; // UTC timestamp
    finished: string; // UTC timestamp
    durationMs: number; // milliseconds

    total: TotalExecutionResult = new TotalExecutionResult();

    results: TestSuiteResult[];
}

/**
 * Total execution result
 *
 * @author Thiago Delgado Pinto
 */
export class TotalExecutionResult {
    tests: number = 0;
    passed: number = 0;
    skipped: number = 0;
    failed: number = 0;
    adjusted?: number = 0;
    error: number = 0;
    unknown: number = 0;
}

/**
 * Test suite result.
 *
 * @author Thiago Delgado Pinto
 */
export class TestSuiteResult {
    suite: string;
    methods: TestMethodResult[];
}

/**
 * Test script method result.
 *
 * @author Thiago Delgado Pinto
 */
export class TestMethodResult {

    name: string;

    status: 'passed' | 'adjusted' | 'failed' | 'skipped' | 'error' | 'unknown';

    durationMs: number; // milliseconds

    isForSetup?: boolean; // e.g., setUp/setUpOnce/before/beforeAll

    exception?: TestMethodException;

}

/**
 * Test method exception.
 *
 * @author Thiago Delgado Pinto
 */
export class TestMethodException {
    type: string;
    message: string;
    stackTrace: string;
    scriptLocation: Location;
    specLocation?: Location;
}