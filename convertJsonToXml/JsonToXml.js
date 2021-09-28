const fs = require('fs');
const JsonToXlsx = require('xlsx');

function getJsonObj(inputFile) {
    let stringJson = fs.readFileSync(inputFile);
    let jsonObj = JSON.parse(stringJson);
    return jsonObj;
}

const newData = {
    firstname: "Vinay",
    lastname: "Girineni",
    age: 21
};

function updateAndCreateJson(oldFilePath, newData, newFilePath) {
    let jsonObj = getJsonObj(oldFilePath);
    jsonObj.push(newData);
    let jsonInString = JSON.stringify(jsonObj, null, 3);
    fs.writeFileSync(newFilePath, jsonInString)
}

function jsonToXlsx(jsonFile, xlsxFile) {
    let jsonObj = getJsonObj(jsonFile);
    //creating a  workbook
    let newWorkBook = JsonToXlsx.utils.book_new();
    //creting worksheet
    let newWorkSheet = JsonToXlsx.utils.json_to_sheet(jsonObj);
    JsonToXlsx.utils.book_append_sheet(newWorkBook, newWorkSheet, ' Data');
    JsonToXlsx.writeFile(newWorkBook, xlsxFile);
}
//updating
updateAndCreateJson('./data.json', newData, './updateddata.json');
//converting json to xml
jsonToXlsx('./data.json', './data.xlsx');


