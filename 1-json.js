const fs=require('fs');
// var jsonData={
//     "Name":"Aafreen",
//     "Age":25,
//     "Planet":"Earth"
// }
// fs.writeFileSync('1-json.json',JSON.stringify(jsonData));

const jsonData=fs.readFileSync('1-json.json');
const parsedData=JSON.parse(jsonData);
parsedData.Name="Aniya";
parsedData.Age=23;
console.log(parsedData);
fs.writeFileSync('1-json.json',JSON.stringify(parsedData));
