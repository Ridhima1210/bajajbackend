const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req,res)=>{
    res.status(200).send("Hello Programmers");
})
app.post('/bfhl', (req, res) => {
    console.log(req.body);
    const data = [...req.body.data]

    let numbers = data.filter((value) => !isNaN(value))

    let alphabets = data.filter((value) => (/[a-zA-Z]/).test(value));
    res.status(200).send({
        'is_success': 'true',
        'user_id': 'yourname_yourrollno',
        'email': 'yourrmail',
        'roll_number': 'yourrollno',
        'numbers': numbers,
        'alphabet': alphabets
    })
})


app.listen(process.env.PORT || 3000, (req,res)=>{
    console.log("Server is running on port 3000");
});
