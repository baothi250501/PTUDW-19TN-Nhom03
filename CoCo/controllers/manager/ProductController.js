const Product = require('../../models/manager/Product.js');
//var products = []

//const {products} = require('../../public/data/products.js');
class ProductController {
    index(req, res) {
        Product.find({}).then(function(doc) {
            let products = doc;
            products.forEach((product) => product.stringId = product._id.toString());
            res.render('manager/products/product-list-page', {products});
        });
        
    }
    add(req, res){
        res.render('manager/products/add-product-page');
    }
    detail(req, res){
        Product.findById(req.params.id).then(function(doc){
            let product = doc;
            product.stringId = product._id.toString();
            res.render('manager/products/product-detail-page', {product});
        });
        //const product = products[parseInt(req.params.id)];
    }
    edit(req, res){
        Product.findById(req.params.id).then(function(doc){
            let product = doc;
            product.stringId = product._id.toString();
            res.render('manager/products/edit-product-page', {product});
        });
        
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
    editModel(req, res){
        Product.findById(req.params.id).then(function(doc){
            if(doc){
                let newOne = req.body;
                doc.name = newOne.name;
                doc.price = newOne.price;
                doc.unit = newOne.unit;
                doc.weight = newOne.weight;
                doc.image = newOne.image;
                doc.save();
            }
            res.redirect('/manager/products');
        });
    }
}

module.exports = new ProductController;
