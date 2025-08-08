import * as XLSX from "xlsx";
import { test } from '@playwright/test';

test('Read Excel Data', async () => {
  const workbook = XLSX.readFile('./test-data/TestData.xlsx');
  const sheetName = workbook.SheetNames[0];
  const worksheet = workbook.Sheets[sheetName];
  const jsonData = XLSX.utils.sheet_to_json(worksheet);

  console.log(jsonData);
});