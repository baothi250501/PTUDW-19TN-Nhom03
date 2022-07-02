class ManagerController{
    add(req, res) {
        res.render('admin/managers/add-manager-page');
    }
    list(req, res){
        res.render('admin/managers/list-manager-page');
    }
    history(req, res){
        res.render('admin/managers/list-manager-history-page');
    }
    detail(req, res){
        res.render('admin/managers/manager-details-page');
    }
}

module.exports = new ManagerController;