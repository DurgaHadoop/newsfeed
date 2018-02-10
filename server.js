const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const mysqlConfig = {
    host     : 'localhost',
    user     : 'root',
    password : 'root',
    database : 'newsfeed'
};

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

if(process.env.NODE_ENV !== "production"){
    app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
      }); 
}

app.post("/api/user/login",(request,response)=>{
     const body=request.body;
     const connection = mysql.createConnection(mysqlConfig);
     connection.connect();
     connection.query('SELECT id,name,email FROM user WHERE email=? AND password=?',[body.email,body.password], function (error, results, fields) {
        if (error){
            response.status(500).json({"error":error});
        }
        else
        {
            const user=results[0];
            if(user)
            {
                response.status(200).json(user);
            }
            else
            {
                response.status(400).json({"error":"user does not exit"});
            }
           

        }
        console.log('The solution is: ', results[0]);
        connection.end();
      });
     
});

if(process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname, 'dist')));

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'dist', 'index.html'));
    });
}

app.listen(3000, () => console.log('Example app listening on port 3000!'));