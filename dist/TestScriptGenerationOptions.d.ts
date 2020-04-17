/**
 * Test script generation options.
 *
 * @author Thiago Delgado Pinto
 */
export declare class TestScriptGenerationOptions {
    pluginName?: string;
    sourceCodeDir?: string;
    specificationDir?: string;
    /**
     * Constructor
     *
     * @param pluginName Plugin name
     * @param sourceCodeDir Output directory for the generated test scripts
     * @param specificationDir Directory that contains specification files
     */
    constructor(pluginName?: string, sourceCodeDir?: string, specificationDir?: string);
}
