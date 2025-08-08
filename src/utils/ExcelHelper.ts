
// Import xlsx and fs correctly for Node + TypeScript
import * as XLSX from 'xlsx';
import { readFileSync } from 'node:fs';

interface TestRecord {
  Skill1: string;
  Skill2: string;
}

export function readExcelFile(filePath: string): TestRecord[] {
  // 1) Read the file as a Buffer
  const file = readFileSync(filePath);
  

  // 2) Tell xlsx what type the input is
  // dense: true is a small win on big sheets
 const workbook = XLSX.read(file, { type: 'buffer', dense: true });

  // 3) Guard against empty workbooks
  const firstSheetName = workbook.SheetNames?.[0];
  if (!firstSheetName) return [];

  const sheet = workbook.Sheets[firstSheetName];

  // 4) Get rows as arrays; ignore blank rows
  const rows = XLSX.utils.sheet_to_json<any[]>(sheet, {
    header: 1,
    blankrows: false,
   // range: 'A:B', // A..B only
   // raw: true,    // don’t format cells; faster + predictable
   // defval: ''    // keep empty cells rather than dropping them
  });

  // 5) Map to your shape, tolerating missing cells
 const records: TestRecord[] = rows.slice(1).map((row) => ({
    Skill1: String(row?.[0] ?? ''),
    Skill2: String(row?.[1] ?? ''),
  }));

  return records;
}




// // Import xlsx
// import * as EXCEL from 'xlsx';
// import fs from 'fs';

// // Define test data structure
// interface TestRecord {
//     Skill1: string,
//     Skill2: string
// }

// // Create method to read excel file
// export function readExcelFile(filePath:string) {

//     const file = fs.readFileSync(filePath); // Read the excel file as binary string

//     // parse into workbook
//     const workbook = EXCEL.read(file);

//     // Get first sheet
//     const sheet = workbook.Sheets[workbook.SheetNames[0]];

//     // convert sheet into json
//     const rawData: any[] = EXCEL.utils.sheet_to_json(sheet, { header: 1 })

//     // convert raw data into TestRecord
//     const records: TestRecord[] = rawData.slice(1).map((column: any) => ({
//         Skill1: column[0],
//         Skill2: column[1]
//     }))
//     return records;
// }