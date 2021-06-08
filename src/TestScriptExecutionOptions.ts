/**
 * Test script execution options.
 *
 * @author Thiago Delgado Pinto
 */
export class TestScriptExecutionOptions {

    /**
     * Directory where to search for test scripts.
     *
     * Example: `"tests"`
     */
    public dirScript?: string;

    /**
     * Directory where to put any resulting files, such as reports with testing results.
     *
     * Example: `"output"`
     */
    public dirResult?: string;

    /**
     * Comma-separated files to execute.
     *
     * When not defined, execute all the files available in `sourceCodeDir`.
     *
     * Examples:
     *   - `"file1.js"`
     *   - `"file1.js,path/to/file2.js"`
     *
     * Some frameworks may not support this option. Some may support glob patterns.
     */
    public file?: string;

    /**
     * String with a regular expression that filters the files to execute.
     *
     * Example: `"Feature 1|Feature 2"`
     *
     * Some frameworks may not support this option and ignore it.
     */
    public grep?: string;

    /**
     * Target environments to execute the tests.
     *
     * When not defined, execute them in the default environment.
     *
     * Example: `"chrome,firefox"`
     */
    public target?: string;

    /**
     * Whether it is to execute in headless mode. Applicable to browsers only.
     */
    public headless?: boolean;

    /**
     * Parallel instances to run the tests.
     *
     * Example: `2`
     *
     * Some frameworks may not support this option and ignore it.
     */
    public instances?: number;

}
