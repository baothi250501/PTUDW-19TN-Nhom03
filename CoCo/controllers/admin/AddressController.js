class AddressController{
    add(req, res) {
        res.render('admin/addresses/add-address-page');
    }
    list(req, res){
        res.render('admin/addresses/list-addresses-page');
    }
    edit(req, res){
        res.render('admin/addresses/edit-address-detail-page');
    }
    detail(req, res){
        res.render('admin/addresses/address-detail-page');
    }
}

module.exports = new AddressController;