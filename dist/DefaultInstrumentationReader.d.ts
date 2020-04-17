import { InstrumentationReader } from "./InstrumentationReader";
/**
 * Read instrumentation created with double-slashed line comments.
 *
 * @author Thiago Delgado Pinto
 */
export declare class DefaultInstrumentationReader implements InstrumentationReader {
    /**
     * Retrieves a path from the pattern `"// source: path/to/file.ext"`.
     *
     * Returns `null` if the line does not match the pattern.
     *
     * @param line
     */
    retrieveSpecFile(line: string): string | null;
    /**
     * Retrieves a line number from the pattern like
     * `"anything // (10,2) anything"` where `10` is the line number and `2` is
     * the column number.
     *
     * Returns `null` if the line does not match the pattern.
     *
     * @param line
     */
    retrieveSpecLineNumber(line: string): number | null;
}
