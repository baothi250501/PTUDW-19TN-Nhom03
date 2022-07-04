const AddressModel = require('../../models/admin/Address');

class AddressController{
    add(req, res) {
        res.render('admin/addresses/add-address-page');
    }
    addAddress(req, res){
            /*req.assert('number', 'Number is required').notEmpty()
            req.assert('name', 'Name is required').notEmpty()*/
            const errors = req.validationErrors;
            
            if( !errors ) {   //No errors were found.  Passed Validation!
                
              var type = 0;
              if (req.body.isolation === "isolation" && req.body.treatment === "treatment")
                    type = 3;
              else if (req.body.isolation === "isolation")
                        type = 1;
              else if (req.body.treatment === "treatment")
                        type = 2;
              var addressDetails = new AddressModel({
                name: req.body.name,
                number: req.body.number,
                currentQuantity: req.body.curQuantity || 0,
                tankage: req.body.tankage || 0,
                type: type,
                status: true
              });
              
              addressDetails.save((err, doc) => {
                    if (!err){
                        //req.flash('success', 'Address added successfully!');
                        console.log("Address added successfully!");
                        res.redirect('/admin/address');
                    }
                    else
                        console.log('Error during record insertion : ' + err);
              });
          
            }
            else {   //Display errors to user
                var error_msg = ''
                errors.forEach(function(error) {
                    error_msg += error.msg + '<br>'
                })                
                //req.flash('error', error_msg)        
                
                // res.render('/', { 
                //     title: 'Add New User',
                //     name: req.body.name,
                //     email: req.body.email
                // })
            }
    }
    list(req, res){
        AddressModel.find({}, function(err, addresses) {
            var stt = 1;
            addresses.forEach(function(address) {
                address['stt'] = stt++;
            });
            //req.locals.addresses = addresses;
            res.render('admin/addresses/list-addresses-page', {addresses});
        });

    }
    edit(req, res){
        AddressModel.findById(req.params.id)
        .then(address => {
        //res.locals.address = address;
        console.log(req.params.id);
        console.log(address);
        res.render('admin/addresses/edit-address-detail-page', {address});
        })
        .catch(error => {
        console.log(`Error fetching address by ID: ${error.message}`);
        });
    }

    update(req, res){
        const errors = req.validationErrors;
        
        if( !errors ) {   //No errors were found.  Passed Validation!
            
            var type = 0;
            if (req.body.isolation === "isolation" && req.body.treatment !== "treatment")
                type = 3;
            else if (req.body.isolation === "isolation")
                    type = 1;
            else if (req.body.treatment === "treatment")
                    type = 2;
            
            let addressID = req.params.id;
            console.log(typeof req.params.id);
            AddressModel.findByIdAndUpdate(addressID, {
                name: req.body.name,
                number: req.body.number,
                currentQuantity: req.body.curQuantity || 0,
                tankage: req.body.tankage || 0,
                type: type,
                status: true
                }, function (err, docs) {
                if (err){
                    console.log(err)
                }
                else{
                    console.log("Updated Address : ", docs);
                    AddressModel.findById(addressID)
                    .then(address => {
                    //res.locals.address = address;
                    console.log(address);
                    res.render('admin/addresses/address-detail-page', {address});
                    })
                    .catch(error => {
                    console.log(`Error fetching address by ID: ${error.message}`);
                    });
                }
                });
        }
    }
    detail(req, res){
        AddressModel.findById(req.params.id)
            .then(address => {
            //res.locals.address = address;
            console.log(req.params.id);
            console.log(address);
            res.render('admin/addresses/address-detail-page', {address});
            })
            .catch(error => {
            console.log(`Error fetching address by ID: ${error.message}`);
            });
        
    }
    delete(req, res){
        AddressModel.findByIdAndRemove(req.params.id)
        .then(() => {
            console.log('Delete successfully!');
            res.redirect("/admin/address");
        })
        .catch(error => {
            console.log(`Error deleting address by ID: ${error.message}`);
        });
    }
}

module.exports = new AddressController;