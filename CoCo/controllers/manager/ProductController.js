const {products} = require('./public/data/products.js');
class ProductController {
    index(req, res) {
        res.render('manager/products/product-list-page', {products});
    }
}

module.exports = new ProductController;
