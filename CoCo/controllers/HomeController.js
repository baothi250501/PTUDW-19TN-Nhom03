const UserModel = require('../models/User');

//console.log(role)
class HomeController {
    index(req, res) {
        res.render('index');
    }
    login(req, res) {
        if (req.params.username == "admin" && req.params.password == "admin") {
            res.render('admin/index');
        }
        else UserModel.findById(req.params.username)
            .then(user => {
                //res.locals.address = address;
                console.log(req.params.id);
                console.log(user);
                if (user.password == req.params.password) {
                    
                }
                if (user.role == "manager")
                    res.render('manager/index', { user: user });
                else 
                res.render('related-people/index', { user: user });
            })
            .catch(error => {
                console.log(`Error fetching username: ${error.message}`);
            });
    }
    manager(req, res) {
        res.render('manager/index');
    }
}

module.exports = new HomeController;
