
import fs from 'fs'; //Imports Node’s filesystem module (here in its sync/CB API form).
import path from 'path';  //Imports Node’s path utilities (for building OS‑safe paths).
import {TestData} from '../interface/Module1TetData.interface'; //Imports the TypeScript type TestData for type‑checking.

export async function loadTestData() { // Exports an async function. Because it’s async, it returns a Promise<TestData> even if you don’t await inside.
    //const environment = `${process.env.TEST_EXECUTION_ENV}` || 'qa';
     const environment = process.env.TEST_EXECUTION_ENV ?? 'qa'; //Reads the env var TEST_EXECUTION_ENV to choose which environment’s data to load, falling back to 'qa'.
    const directoryPath = path.join(__dirname, `../../test-data/`, environment); //Builds the directory path

    const jsonData: TestData = {}; //Initializes an accumulator object (typed as TestData) that you’ll merge all files into.
    fs.readdirSync(directoryPath).forEach(file => { //Synchronously lists files in the directory and loops over them.
        if (path.extname(file) === '.json') { //Processes only files with the .json extension.
            const filePath = path.join(directoryPath, file); // Builds the full path to the JSON file.
            const fileContent: TestData = JSON.parse(fs.readFileSync(filePath, 'utf-8')); //Synchronously reads the file as UTF‑8 text and parses JSON into an object (typed TestData).
            Object.assign(jsonData, fileContent); // Merge the content into a single object
        }
    });
    return jsonData; //Returns the merged object. Because the function is async, callers will use await loadTestData() and get a TestData.
}



/* ALTERNATE OPTION
import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { TestData } from '../interface/Module1TestData.interface';
import merge from 'lodash.merge'; // deep merge utility

// __dirname workaround for ESM
const __dirname = path.dirname(fileURLToPath(import.meta.url));

export async function loadTestData(): Promise<TestData> {
    const environment = process.env.TEST_EXECUTION_ENV ?? 'qa';
    const directoryPath = path.join(__dirname, '../../test-data', environment);

    const jsonData: TestData = {};

    const files = await fs.readdir(directoryPath);
    for (const file of files) {
        if (path.extname(file) === '.json') {
            const filePath = path.join(directoryPath, file);
            const fileContent = await fs.readFile(filePath, 'utf-8');
            const parsedContent: TestData = JSON.parse(fileContent);

            // deep merge instead of shallow overwrite
            merge(jsonData, parsedContent);
        }
    }

    return jsonData;
}







*/