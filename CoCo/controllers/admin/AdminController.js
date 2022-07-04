class AdminController{
    index(req, res){
        res.render('admin/index');
    }

    info(req, res){
        res.render('admin/admin-account')
    }

}

module.exports = new AdminController;