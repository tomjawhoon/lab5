var express = require('express'),
    app = express(),
    bodyParser = require('body-parser');
    app.set('views', './view')
    app.set('view engine', 'ejs')

var urlencodedParser = bodyParser.urlencoded({ extended: false });
app.use(express.static(__dirname + '/public'));

app.post('/admin', urlencodedParser, function(req, res){ // มีไว้สำหรับเข้าปุ่ม จาก button
     if(req.body.email == "tom" && req.body.pass == "1234"){
        res.render('admin', {admin: "hello"+req.body.email })
     }
});

app.get('/', (req,res) => { // เอาไว้สำหรับเข้าหน้า URL 
    res.render('login')
 });

app.get('/logout', (req,res) => { // เอาไว้สำหรับเข้าหน้า URL 
    req.session.destroy((err) => { 
        if(err) {
            console.log(err);
        } else {
            res.redirect('/');
        }
    });
 });
 
 app.get('/admin', urlencodedParser, function(req, res){ // มีไว้สำหรับเข้าปุ่ม จาก button
           res.render('admin', {admin: "" })
    });
app.listen(8000);