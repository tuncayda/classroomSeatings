/**
 * This class read excel-files and converts them to JSON
 */

let XLSX = require('xlsx');

let workbook = XLSX.readFile('../../students.xlsx');
let worksheet = workbook.Sheets[workbook.SheetNames[0]];
for (let i = 2; i < 6; i++) {
    const id = worksheet[`A${i}`].v;
    const name = worksheet[`A${i}`].v;

    console.log(
        {
            id: id,
            name: name
        }
    )
}