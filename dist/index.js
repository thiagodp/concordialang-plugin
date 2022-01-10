import * as fs from 'fs';
import { promisify } from 'util';

/**
 * Abstract test script (ATS).
 *
 * @author Thiago Delgado Pinto
 */
class AbstractTestScript {
  constructor() {
    this.schemaVersion = '1.1.0';
    this.sourceFile = void 0;
    this.feature = void 0;
    this.scenarios = [];
    this.testcases = [];
    this.beforeAll = void 0;
    this.afterAll = void 0;
    this.beforeFeature = void 0;
    this.afterFeature = void 0;
    this.beforeEachScenario = void 0;
    this.afterEachScenario = void 0;
  }

}
/**
 * ATS element.
 *
 * @author Thiago Delgado Pinto
 */

class ATSElement {
  constructor(location) {
    this.location = void 0;
    this.location = location;
  }

}
/**
 * Named ATS element.
 *
 * @author Thiago Delgado Pinto
 */

class NamedATSElement extends ATSElement {
  constructor(location, name) {
    super(location);
    this.location = void 0;
    this.name = void 0;
    this.location = location;
    this.name = name;
  }

}
/**
 * ATS test case.
 *
 * @author Thiago Delgado Pinto
 */

class ATSTestCase extends NamedATSElement {
  constructor(...args) {
    super(...args);
    this.invalid = false;
    this.scenario = void 0;
    this.commands = [];
  }

}
/**
 * ATS command
 *
 * @author Thiago Delgado Pinto
 */

class ATSCommand extends ATSElement {
  constructor(...args) {
    super(...args);
    this.invalid = void 0;
    this.action = void 0;
    this.modifier = void 0;
    this.options = void 0;
    this.targets = void 0;
    this.targetTypes = void 0;
    this.values = void 0;
    this.comment = void 0;
  }

}
/**
 * ATS target.
 *
 * @author Thiago Delgado Pinto
 */

class ATSTarget {
  constructor() {
    this.web = void 0;
    this.android = void 0;
    this.ios = void 0;
    this.windows = void 0;
    this.linux = void 0;
  }

}
/**
 * ATS event
 */

class ATSEvent {
  constructor() {
    this.commands = [];
  }

}
/**
 * ATS database command
 *
 * Examples:
 * ```
 * { action: "run", options: [ "script" ], values: [ "DELETE FROM foo" ], db: { ... } }
 * ```
 */

class ATSDatabaseCommand extends ATSCommand {
  constructor(...args) {
    super(...args);
    this.db = void 0;
  } // reference to a database connection used by the command


}
class ATSConsoleCommand extends ATSCommand {
  constructor(...args) {
    super(...args);
    this.console = void 0;
  }

}

/**
 * Read instrumentation created with double-slashed line comments.
 *
 * @author Thiago Delgado Pinto
 */
class DefaultInstrumentationReader {
  /**
   * Retrieves a path from the pattern `"// source: path/to/file.ext"`.
   *
   * Returns `null` if the line does not match the pattern.
   *
   * @param line
   */
  retrieveSpecFile(line) {
    const regex = /^\/\/(?: )*source(?: )*:(.+)/ui;
    const r = regex.exec(line);
    return r && r[1] ? r[1].trim() : null;
  }
  /**
   * Retrieves a line number from the pattern like
   * `"anything // (10,2) anything"` where `10` is the line number and `2` is
   * the column number.
   *
   * Returns `null` if the line does not match the pattern.
   *
   * @param line
   */


  retrieveSpecLineNumber(line) {
    const regex = /(?:.*)(\/\/(?: )*(?:\()([0-9]+)(?:,[0-9]+\))(?:.*))$/ui;
    const r = regex.exec(line);
    return r && r[2] ? parseInt(r[2]) : null;
  }

}

/**
 * Default script file instrumentation.
 *
 * @author Thiago Delgado Pinto
 */

class FileInstrumentationReader {
  constructor(_reader = new DefaultInstrumentationReader(), _fs = fs, _encoding = 'utf-8') {
    this._reader = void 0;
    this._fs = void 0;
    this._encoding = void 0;
    this._reader = _reader;
    this._fs = _fs;
    this._encoding = _encoding;
  }
  /**
   * Retrieves specification location from a script file location.
   *
   * @param scriptFilePath Script file path.
   * @param scriptLineNumber Script line number.
   */


  async retrieveSpecLocation(scriptLoc) {
    const readFileAsync = promisify(this._fs.readFile);
    let lines = (await readFileAsync(scriptLoc.filePath, this._encoding)).toString().split("\n");
    let count = 0;
    let specFilePath = null;
    let specLineNumber = 0;

    for (let content of lines) {
      ++count;

      if (null === specFilePath) {
        specFilePath = this._reader.retrieveSpecFile(content);
      } // Retrieve the specification column from the code instrumentation,
      // i.e., an annotation with the specification column


      if (count === scriptLoc.line) {
        specLineNumber = this._reader.retrieveSpecLineNumber(content);
        break; // nothing to do anymore
      }
    }

    lines = null; // free content
    // Specification info not found, reject it

    if (null === specFilePath || 0 === specLineNumber) {
      const msg = 'Specification information could not be retrieved from "' + scriptLoc.filePath + '".'; // throw new Warning( msg, scriptLoc );

      specFilePath = msg;
      specLineNumber = 1;
    }

    const specLoc = {
      filePath: specFilePath,
      line: specLineNumber,
      column: 1
    };
    return specLoc;
  }

}

/**
 * Test script execution options.
 *
 * @author Thiago Delgado Pinto
 */
class TestScriptExecutionOptions {
  constructor() {
    this.dirScript = void 0;
    this.dirResult = void 0;
    this.file = void 0;
    this.grep = void 0;
    this.target = void 0;
    this.headless = void 0;
    this.instances = void 0;
    this.heal = void 0;
  }

}

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
    this.pluginName = void 0;
    this.sourceCodeDir = void 0;
    this.specificationDir = void 0;
    this.pluginName = pluginName;
    this.sourceCodeDir = sourceCodeDir;
    this.specificationDir = specificationDir;
  }

}

export { ATSCommand, ATSConsoleCommand, ATSDatabaseCommand, ATSElement, ATSEvent, ATSTarget, ATSTestCase, AbstractTestScript, DefaultInstrumentationReader, FileInstrumentationReader, NamedATSElement, TestScriptExecutionOptions, TestScriptGenerationOptions };
