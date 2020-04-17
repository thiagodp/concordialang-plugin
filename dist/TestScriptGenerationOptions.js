"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Test script generation options.
 *
 * @author Thiago Delgado Pinto
 */
class TestScriptGenerationOptions {
    /**
     * Constructor
     *
     * @param pluginName Plugin name
     * @param sourceCodeDir Output directory for the generated test scripts
     * @param specificationDir Directory that contains specification files
     */
    constructor(pluginName, sourceCodeDir, specificationDir) {
        this.pluginName = pluginName;
        this.sourceCodeDir = sourceCodeDir;
        this.specificationDir = specificationDir;
    }
}
exports.TestScriptGenerationOptions = TestScriptGenerationOptions;
