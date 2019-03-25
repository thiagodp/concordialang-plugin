import { Location } from 'concordialang-types/dist/ast/Location';
import { InstrumentationReader } from './InstrumentationReader';
/**
 * Default script file instrumentation.
 *
 * @author Thiago Delgado Pinto
 */
export declare class FileInstrumentationReader {
    private _reader;
    private _fs;
    private _encoding;
    constructor(_reader?: InstrumentationReader, _fs?: any, _encoding?: string);
    /**
     * Retrieves specification location from a script file location.
     *
     * @param scriptFilePath Script file path.
     * @param scriptLineNumber Script line number.
     */
    retrieveSpecLocation(scriptLoc: Location): Promise<Location>;
}
