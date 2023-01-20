const { response } = require('express');
const Fudbaler = require('../models/fudbaler');
const Trener = require('../models/trener');

exports.getAddFudbaler = (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'add-fudbaler.html'));
  };




exports.postAddFudbaler = (req, res, next) => {
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
    
    

  };

exports.getFudbalers = (req, res, next) => {
    
   
  Fudbaler.findAll().then(fudbalers => {
    console.log(fudbalers);

}).catch(err=>{console.log(err);

});
  };

  exports.getFudbaler = (req, res, next) => {
    const fudbalerId=req.params.fudbalerId;
    Fudbaler.findAll({where: {id: fudbalerId}}).then(fudbaler=>{
      console.log(fudbaler[0]);
    }).catch(err=>console.log(err));

    
  };

exports.getIndex =  (req, res, next) => {
  Fudbaler.fetchAll().then(([rows,fieldData])=>{
    console.log(rows,fieldData);
  }).catch(err=>console.log(err));
  
};

exports.getTreners = (req, res, next) => {
    
  Trener.findAll().then(treners => {
      console.log(treners);

  }).catch(err=>{console.log(err);
  
  });
};
