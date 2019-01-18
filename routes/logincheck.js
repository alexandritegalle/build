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

router.get('/:id/:pass', (req, res) => {
 
        console.log("params"+req.params.id+" "+req.params.pass);
       var id=req.params.id
       var pass=req.params.pass
       var userId
    
       const connection = new Connection(config);
        connection.on('connect', err => {
        err ? console.log(err) : executeStatement();
        });
        const query = `SELECT USERID from tblUser where LOGINNAME='${id}' AND PWD='${pass}'`
        const executeStatement = () => {
          const request = new Request(query, (err, rowCount) => {
            err ? console.log(err) : console.log("row count"+rowCount);
          });
        
          request.on('row', columns => {
            columns.find(column => res.send(column.value.toString()));
          });
          request.on('row', columns => {
            columns.find(column => this.userId=column.value);
         
          });
        
          connection.execSql(request);
          console.log("ans"+this.userId)
        };
        //connection.close()
        //res.send("1")
      
});
//connection.close()
module.exports=router;