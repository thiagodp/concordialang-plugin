import { Location } from 'concordialang-types';

/**
 * Test script execution result.
 *
 * @author Thiago Delgado Pinto
 */
export class TestScriptExecutionResult {

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

    total: TotalExecutionResult = new TotalExecutionResult();

    results: TestSuiteResult[] = [];
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

    /** E.g., setUp/setUpOnce/before/beforeAll */
    isForSetup?: boolean; //

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
