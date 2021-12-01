const csv = require('csv-parser');
const fs = require('fs');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

let ServiceClass = function () { };

//below function is used to read csv using csv parser
//used async operation (createReadStream) to read large records from csv
ServiceClass.prototype.readCSVService = async function () {
     
    let readDataArray = [];     
    return await new Promise((resolve, reject) => {
        fs.createReadStream('./csv/dataset.csv').pipe(csv()).on('data',(row) => {
          //removing empty row between records from csv
            if(row.Headlines !="" && row.Time !="" && row.Description !=""){
                readDataArray.push(row)
            }
        }).on('end', () => {
            console.log('CSV file successfully read');
            resolve(readDataArray)
        });
    })     

}

//below function is used to write csv using csv parser
ServiceClass.prototype.writeCSVService = async function (updatedCSVData) {
    const csvWriter = createCsvWriter({
        path: './csv/dataset.csv',
        header: [
          {id: 'Headlines', title: 'Headlines'},
          {id: 'Time', title: 'Time'},
          {id: 'Description', title: 'Description'},
        ]
      });
      
    return await new Promise((resolve, reject) => {
      csvWriter.writeRecords(updatedCSVData).then(()=>{      
      console.log('The CSV file was written successfully');
      resolve(true)
      }).catch(err=>{
        console.log(err) 
        reject(err)
      });
    })
}

module.exports = new ServiceClass;
