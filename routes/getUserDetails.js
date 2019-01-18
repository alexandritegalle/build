const express = require('express');
const path= require('path');
const Connection = require('tedious').Connection;
const Request = require('tedious').Request;
const router = express.Router();



const config = {
  userName: 'AzurePawan',
  password: 'Magesuduyik@123',
  server: 'busytimebackup.database.windows.net',
  options: {
    database: 'BusyTimeISI_ESSPAAzure_db_20170817',
    encrypt: true
  }
};


/*

const query = 'SELECT USERID from tblUser';
const executeStatement = () => {
  const request = new Request(query, (err, rowCount) => {
    err ? console.log(err) : console.log(rowCount);
  });

  request.on('row', columns => {
    columns.forEach(column => console.log(column.value));
  });

  connection.execSql(request);
};
*/

router.get('/:id', (req, res) => {
 
        console.log("params"+req.params.id);
       var id=req.params.id
       var userId
    
       const connection = new Connection(config);
        connection.on('connect', err => {
        err ? console.log(err) : executeStatement();
        });
        const query = `SELECT FIRSTNAME from tblResource where USERID='${id}'`
        const executeStatement = () => {
          const request = new Request(query, (err, rowCount) => {
            err ? console.log(err) : console.log("row count2"+rowCount);
          });
        
          request.on('row', columns => {
            columns.find(column => res.send(column.value));
          });
          request.on('row', columns => {
            columns.find(column => this.userId=column.value);
         
          });
          request.on('row', columns => {
            columns.find(column => console.log(column.value));
         
          });
        
          connection.execSql(request);
        //  console.log("ans2"+this.userId)
        };
        //connection.close()
        //res.send("1")
      
});
//connection.close()
module.exports=router;