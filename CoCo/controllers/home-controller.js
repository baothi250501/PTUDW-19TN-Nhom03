class HomeController {
    index(req, res) {
        res.render('index');
    }
}

module.exports = new HomeController;
