const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const db = require('./util/db')
const app = express();

const trenerRoutes = require('./routes/trener');
const fudbalerRoutes = require('./routes/fudbaler');
const Trener = require('../models/trener')
const Fudbaler = require('../models/fudbaler')



app.use(express.json());
app.use((req,res,next)=>{
    Trener.findByPk(1).then(trener=>{
        req.trener=trener;
        next();
    }).catch(err=>{console.log(err)});


})
app.use(bodyParser.urlencoded({extended: false}));
//app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json())



/* db.execute('Select * FROM fudbaler').then(result=>{
    console.log(result[0]);
}).catch(err=>{
    console.log(err);
});
 */
app.use('/trener', trenerRoutes);

app.use(fudbalerRoutes);

db.sync().then(result=>{
    //console.log(result);
    return Trener.findByPk(1);
    
   
}).then(trener=>{
    if(!trener){
       return Trener.create({ime: 'Nikola',prezime:'Bogdanovic',email: 'test@test.com',password: '12345678'})
    }
    return trener
}).then(trener=>{
    console.log(trener);
    app.listen(3000);
}).catch(err=>{
    console.log(err)
})

/* app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
}); */

