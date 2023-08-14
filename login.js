const express = require('express');
const app = express();

app.use(express.json());

let validuser = [
    { email: 'admin@mail.com', password: 'admin' },
    { email: 'retailer@mail.com', password: 'retailer' }
];


app.post('/login', function(req, res) {
const { email, password } = req.body;
// console.log(req.body);
for(let i = 0; i<validuser.length; i++){
    let user = validuser[i];
    if(user.email === email && user.password === password){
        if(user.email === 'admin@mail.com'){
            res.json({ message: 'admin Login success', redirect: 'admin'});
        }
        else{
            res.json({ message: 'retailer Login success', redirect: 'retailer'});
        }
        return;
    }
}
res.status(401).json({ error: 'Invalid email or password' });
});

app.listen(5000,function(){
    console.log('Server is running on 5000');
});

