const Package = require('../../models/manager/Package.js');
const Product = require('../../models/manager/Product.js');
var packages = []
/*const packages = [
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
    
};*/
class PackageController {
    index(req, res) {
        Package.find({}).then(function(doc) {
            packages = doc;
            let stt = 1;
            packages.forEach((item) => {
                item.stringId = item._id.toString();
                let price = 0;
                item.productInfo = [];
                item.price = 0;
                item.products.forEach((id)=>{
                    var tmpInfo = {};
                    Product.findById(id, function(err, pro){
                        if(err) throw err;
                        tmpInfo.name = pro.name;
                        tmpInfo.price = pro.price;
                        tmpInfo.stringId = id;
                        item.price += pro.price;
                        item.productInfo.push(tmpInfo);
                    });
                    
                });
                item.price = "" + price;
                item.stt = "" + stt;
                stt++;
            });
            
            res.render('manager/products/package-list-page', {packages});
        });
        
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
