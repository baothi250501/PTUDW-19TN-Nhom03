const Product = require('../../models/manager/Product.js');
const {products} = require('../../public/data/products.js');
class ProductController {
    index(req, res) {
        res.render('manager/products/product-list-page', {products});
    }
    add(req, res){
        res.render('manager/products/add-product-page', {products});
    }
    detail(req, res){
        const product = products[parseInt(req.params.id)];
        res.render('manager/products/product-detail-page', {product});
    }
    edit(req, res){
        const product = products[parseInt(req.params.id)];
        res.render('manager/products/edit-product-page', {product});
    }
    addModel(req, res){
        let product = new Product(req.body);
        product.save();
    }
}

module.exports = new ProductController;
