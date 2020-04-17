/**
 * Specification instrumentation reader.
 *
 * @author Thiago Delgado Pinto
 */
export interface InstrumentationReader {
    retrieveSpecFile(line: string): string | null;
    retrieveSpecLineNumber(line: string): number | null;
}
