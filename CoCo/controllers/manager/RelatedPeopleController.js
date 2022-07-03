class ProductController {
    index(req, res) {
        res.render('manager/related-people/index');
    }
}

module.exports = new ProductController;
