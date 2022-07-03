//console.log(role)
class HomeController {
    index(req, res) {
        res.render('index');
    }
    manager(req, res) {
        res.render('manager/index');
    }
}

module.exports = new HomeController;
