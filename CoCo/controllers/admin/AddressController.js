/*const addresses = [
    {stt: 1, name:"Bệnh viện dã chiến số 1", tankage: 1000, currentQuantity: 50, type: 2},
    {stt: 2, name:"Bệnh viện dã chiến số 1", tankage: 1000, currentQuantity: 50, type: 2},
    {stt: 3, name:"Bệnh viện dã chiến số 1", tankage: 1000, currentQuantity: 50, type: 2},
    {stt: 4, name:"Bệnh viện dã chiến số 1", tankage: 1000, currentQuantity: 50, type: 2},
    {stt: 5, name:"Bệnh viện dã chiến số 1", tankage: 1000, currentQuantity: 50, type: 2},
    {stt: 6, name:"Bệnh viện dã chiến số 1", tankage: 1000, currentQuantity: 50, type: 2},
    {stt: 7, name:"Bệnh viện dã chiến số 1", tankage: 1000, currentQuantity: 50, type: 2},
    {stt: 8, name:"Bệnh viện dã chiến số 1", tankage: 1000, currentQuantity: 50, type: 2},
    {stt: 9, name:"Bệnh viện dã chiến số 1", tankage: 1000, currentQuantity: 50, type: 2},
    {stt: 10, name:"Bệnh viện dã chiến số 1", tankage: 1000, currentQuantity: 50, type: 2}
];*/

const AddressModel = require('../../models/admin/Address');

class AddressController{
    add(req, res) {
        res.render('admin/addresses/add-address-page');
    }
    addAddress(req, res){
        (req, res) => {
            /*req.assert('number', 'Number is required').notEmpty()
            req.assert('name', 'Name is required').notEmpty()*/
            const errors = req.validationErrors;
            
            if( !errors ) {   //No errors were found.  Passed Validation!
                
              var type = 0;
              if (req.body.isolation === "isolation" && req.body.treatment !== "treatment")
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
                        res.redirect('/admin/address/:id');
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
    }
    list(req, res){
        AddressModel.find({}, function(err, addresses) {
            var stt = 1;
            addresses.forEach(function(address) {
                address['stt'] = stt++;
            });
            res.render('admin/addresses/list-addresses-page', {addresses});
        });

    }
    edit(req, res){
        res.render('admin/addresses/edit-address-detail-page');
    }
    detail(req, res){
        res.render('admin/addresses/address-detail-page');
    }
    delete(req, res){
        res.redirect("/admin/address/add");
        AddressModel.findByIdAndRemove(req.params._id)
        .then(() => {
            res.redirect("/admin/address");
            next();
        })
        .catch(error => {
            console.log(`Error deleting address by ID: ${error.message}`);
            next();
        });
    }
}

module.exports = new AddressController;