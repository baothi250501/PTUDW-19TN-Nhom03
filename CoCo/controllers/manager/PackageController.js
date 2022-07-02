const packages = [
    {stt: "1", name:"Combo Thịt, Cá, Trứng 1", price:"200.000"},
    {stt: "2", name:"Combo Thịt, Cá, Trứng 2", price:"250.000"},
    {stt: "3", name:"Combo Thịt, Cá, Trứng 3", price:"300.000"}
];
const _package = {
    stt: "1", 
    avatar: "/images/thit-heo.jpg", 
    name:"Combo Thịt, Cá, Trứng 1", 
    price:"200.000",
    productNum: 10,
    packageNum: 10,
    timeLimit: 10,
    
};
class PackageController {
    index(req, res) {
        res.render('manager/products/package-list-page', {packages});
    }
    add(req, res){
        res.render('manager/products/add-package-page', {_package});
    }
    detail(req, res){

        res.render('manager/products/package-detail-page', {_package});
    }
    edit(req, res){
        const product = products[parseInt(req.params.id)];
        res.render('manager/products/edit-package-page', {_package});
    }
}

module.exports = new PackageController;
