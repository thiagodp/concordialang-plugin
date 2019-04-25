import { Location, AbstractDatabase } from 'concordialang-types';
/**
 * Abstract test script (ATS).
 *
 * @author Thiago Delgado Pinto
 */
export declare class AbstractTestScript {
    schemaVersion: string;
    sourceFile: string;
    feature: NamedATSElement;
    scenarios: NamedATSElement[];
    testcases: ATSTestCase[];
    beforeAll?: ATSEvent;
    afterAll?: ATSEvent;
    beforeFeature?: ATSEvent;
    afterFeature?: ATSEvent;
    beforeEachScenario?: ATSEvent;
    afterEachScenario?: ATSEvent;
}
/**
 * ATS element.
 *
 * @author Thiago Delgado Pinto
 */
export declare class ATSElement {
    location?: Location;
    constructor(location?: Location);
}
/**
 * Named ATS element.
 *
 * @author Thiago Delgado Pinto
 */
export declare class NamedATSElement extends ATSElement {
    location?: Location;
    name?: string;
    constructor(location?: Location, name?: string);
}
/**
 * ATS test case.
 *
 * @author Thiago Delgado Pinto
 */
export declare class ATSTestCase extends NamedATSElement {
    invalid?: boolean;
    scenario?: string;
    commands: ATSCommand[];
}
/**
 * ATS command
 *
 * @author Thiago Delgado Pinto
 */
export declare class ATSCommand extends ATSElement {
    invalid?: boolean;
    action: string;
    modifier?: string;
    options?: string[];
    targets?: ATSTarget[] | string[];
    targetTypes?: string[];
    values?: any[];
    comment?: string;
}
/**
 * ATS target.
 *
 * @author Thiago Delgado Pinto
 */
export declare class ATSTarget {
    web?: string;
    android?: string;
    ios?: string;
    windows?: string;
    linux?: string;
}
/**
 * ATS event
 */
export declare class ATSEvent {
    commands: ATSCommand[];
}
/**
 * ATS database command
 *
 * Examples:
 * ```
 * { action: "run", options: [ "script" ], values: [ "DELETE FROM foo" ], db: { ... } }
 * ```
 */
export declare class ATSDatabaseCommand extends ATSCommand {
    db: AbstractDatabase;
}
export declare class ATSConsoleCommand extends ATSCommand {
    console: true;
}
