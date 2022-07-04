const ManagerModel = require('../../models/admin/Manager');
class ManagerController{
    add(req, res) {
        res.render('admin/managers/add-manager-page');
    }
    addManager(req, res){
        /*req.assert('number', 'Number is required').notEmpty()
        req.assert('name', 'Name is required').notEmpty()*/
        const errors = req.validationErrors;
        var type = 0;
        if (req.body.patient === "patient" && req.body.necessities === "necessities")
            type = 3;
        else if (req.body.patient === "patient")
                type = 1;
        else if (req.body.necessities === "necessities")
                type = 2;
        if( !errors ) {   //No errors were found.  Passed Validation!
          var managerDetails = new ManagerModel({
            username: req.body.username,
            password: req.body.password,
            role: type,
            status: true
          });
          
          managerDetails.save((err, doc) => {
                if (!err){
                    //req.flash('success', 'Address added successfully!');
                    console.log("Manager added successfully!");
                    res.redirect('/admin/manager/:id/show');
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
        ManagerModel.find({}, function(err, managers) {
            var stt = 1;
            managers.forEach(function(manager) {
                manager['stt'] = stt++;
            });
            //req.locals.addresses = addresses;
            res.render('admin/managers/list-manager-page', {managers});
        });
    }
    history(req, res){
        res.render('admin/managers/list-manager-history-page');
    }
    detail(req, res){
        res.render('admin/managers/manager-details-page');
    }
    updateStatus(req, res){
        console.log('Update status');
    }
}

module.exports = new ManagerController;