const express = require('express');
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.post('/bfhl', (req,res)=>{

    const obj = {
        is_success : true,
        user_id: "ridhima_bansal_12102001",
        email: "ridhima0606.cse19@chitkara.edu.in",
        roll_number: 1910990606,
        numbers: [],
        alphabets: []
    }
    const {data} = req.body;
    const responseJson = JSON.parse(data);
    var list = (responseJson.data).length;
    for (var i = 0; i < list; i++) 
    {
     var counter = responseJson.data[i];
     if(counter >=0 && counter <=9) {
         numbers.push(counter);
     } else if((/[a-zA-Z]/).test(counter)) {
         alphabets.push(counter);
     }
     }
     res.json(obj);
});


app.listen(3000, (req,res)=>{
    console.log("Server is running on port 3000");
});