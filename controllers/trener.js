const { response } = require('express');
const Trener = require('../models/trener')
const Fudbaler = require('../models/fudbaler')
exports.getAddFudbaler = (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'add-fudbaler.html'));
  };




exports.postAddTrener = (req, res, next) => {
   // console.log(req);
   /*    const baler= req.body;
     console.log(baler[0]);

     const fudbaler = new Fudbaler(baler[0].ime,baler[0].prezime,baler[0].pozicija);

     console.log(fudbaler,'1');
    fudbaler.save().then(()=>{
      
      
    }).catch(err=>console.log(err));
   */
    const ime = req.body.title;
    const prezime = req.body.title;
    const email = req.body.email;
    const password = req.body.email;
    Trener.create({
        ime: ime,
        prezime: prezime,
        email: email,
        password: password
    }).then(result=>{
        console.log(result);
    }).catch(err=>{
        console.log(err);
    });
    

  };

exports.getFudbalers = (req, res, next) => {
    
    Fudbaler.findAll().then(fudbalers => {
        console.log(fudbalers);

    }).catch(err=>{console.log(err);
    
    });
  };

  exports.getFudbaler = (req, res, next) => {
     const fudbalerId=req.params.fudbalerId;
    /* Fudbaler.findByPk(fudbalerId).then(fudbaler=>{
      console.log(fudbaler);
    }).catch(err=>console.log(err));
    res.redirect('/');
  */
    Fudbaler.findAll({where: {id: fudbalerId}}).then(fudbaler=>{
        console.log(fudbaler[0]);
      }).catch(err=>console.log(err));
      
  };

exports.getIndex =  (req, res, next) => {
    Fudbaler.findAll().then(fudbalers => {
        console.log(fudbalers);

    }).catch(err=>{console.log(err);
    
    });
    /* Fudbaler.fetchAll().then(()=>{
        console.log();
    }).catch(err=>{console.log(err)}); */
};

exports.postEditFudbalers =  (req, res, next) => {
    const fudbalerId= req.body.fudbalerId;
    const ime= req.body.ime;

    const prezime= req.body.prezime;
    const pozicija= req.body.pozicija;
    const email= req.body.email;
    const password = req.body.password;
    Fudbaler.findByPk(fudbalerId).then(fudbaler =>{
        fudbaler.ime=ime;
        fudbaler.prezime=prezime;
        fudbaler.pozicija=pozicija;
        fudbaler.email=email;
        fudbaler.password=password;
       return fudbaler.save();
    }).then(result => {
        console.log('UPDATED')
    }).catch(err=>{console.log(err)});
};

exports.postDeleteFudbaler = (req, res, next) => {
  const fudbalerId = req.body.params;
  Fudbaler.destroy({where: {id:fudbalerId}}).then(result=>{
    console.log("deleted")
  }).catch(err=>{console.log(err)}); 
};

exports.postAddFudbaler;