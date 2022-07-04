const Product = require('../../models/manager/Product.js');
var products = []

//const {products} = require('../../public/data/products.js');
class ProductController {
    index(req, res) {
        Product.find({}).then(function(doc) {
            products = doc;
            products.forEach((product) => product.stringId = product._id.toString());
            res.render('manager/products/product-list-page', {products});
        });
        
    }
    add(req, res){
        res.render('manager/products/add-product-page', {products});
    }
    detail(req, res){
        console.log(req.params.id);
        Product.findById(req.params.id).then(function(doc){
            console.log(doc);
            let product = doc;
            res.render('manager/products/product-detail-page', {product});
        });
        //const product = products[parseInt(req.params.id)];
    }
    edit(req, res){
        const product = products[parseInt(req.params.id)];
        res.render('manager/products/edit-product-page', {product});
    }
    addModel(req, res){
        let product = new Product(req.body);
        console.log(req.body);
        product.save();
        return res.redirect('/manager/products');
    }
    deleteModel(req, res){
        Product.findByIdAndRemove(req.params.id, function(err){
            res.redirect('/manager/products');
        });
    }
}

module.exports = new ProductController;
