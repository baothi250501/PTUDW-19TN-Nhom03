const ManagerModel = require('../../models/admin/Manager');
const ManagerHistoryModel = require('../../models/admin/ManagerHistory');
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
        ManagerHistoryModel.find({}, function(err, managerHistories) {
            var stt = 1;
            managerHistories.forEach(function(managerHistory) {
                managerHistory['stt'] = stt++;
            });
            //req.locals.addresses = addresses;
            res.render('admin/managers/list-manager-history-page', {managerHistories});
        })
    }
    addManagerHistory(req, res){
        /*req.assert('number', 'Number is required').notEmpty()
        req.assert('name', 'Name is required').notEmpty()*/
        const errors = req.validationErrors;

        function formatDate(date){
            const dd = ('0' + date.getDate()).slice(-2);
            const mm = ('0' + (date.getMonth() + 1)).slice(-2);
            const yyyy = date.getFullYear();
            return `${dd}/${mm}/${yyyy}`;
        }
        
        var dateFormatted = formatDate(req.body.date);

        if( !errors ) {   //No errors were found.  Passed Validation!
          var managerHistoryDetails = new ManagerHistoryModel({
            username: req.body.username,
            date: dateFormatted,
            action: req.body.action
          });
          
          managerHistoryDetails.save((err, doc) => {
                if (!err){
                    //req.flash('success', 'Address added successfully!');
                    console.log("Manager history added successfully!");
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
        res.render('admin/managers/manager-details-page');
    }
    updateStatus(req, res){
        console.log('Update status');
    }
}

module.exports = new ManagerController;