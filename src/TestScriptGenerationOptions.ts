/**
 * Test script generation options.
 *
 * @author Thiago Delgado Pinto
 */
export class TestScriptGenerationOptions {

    /**
     * Constructor
     *
     * @param pluginName Plugin name
     * @param sourceCodeDir Directory for the source code
     * @param specificationDir Directory that contains specification files
     */
    constructor(
        public pluginName?: string,
        public sourceCodeDir?: string,
        public specificationDir?: string
    ) {
    }

}