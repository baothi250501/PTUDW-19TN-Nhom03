const Person = require('../../models/related-people/Person.js');
const ManagedHistory = require('../../models/related-people/ManagedHistory.js');
const ConsumptionHistory = require('../../models/related-people/ConsumptionHistory.js');
const PaymentHistory = require('../../models/related-people/PaymentHistory.js');
const Package = require('../../models/manager/Package.js');
class PersonController {
  index(req, res) {
    const username = req.body.username;
    const person = await Person.findOne({username : username});
    if(person){
      res.render("related-people/information", { person });
    }
    else{
      res.status(404).send({
        "error": {
            "code": 404,
            "message": " User Not Found"
        }
    });
    }
  }

  managedHistory(req, res) {
    const username = req.body.username;
    const person = await Person.findOne({username : username});
    const histories = await ManagedHistory.find({username : username}).sort({dateTime : 1});
    if(person){
      res.render("related-people/managed-history", { person, histories});
    }
    else{
      res.status(404).send({
        "error": {
            "code": 404,
            "message": " User Not Found"
        }
    });
    }
  }

  consumptionHistory(req, res) {
    const username = req.body.username;
    const person = await Person.findOne({username : username});

    const consumption = await ConsumptionHistory.find({username : username}).sort({dateTime : 1});
    if(person){
      res.render("related-people/consumption-history", { person, consumption });
    }
    else{
      res.status(404).send({
        "error": {
            "code": 404,
            "message": " User Not Found"
        }
    });
    }
  }

  paymentHistory(req, res) {
    const username = req.body.username;
    const person = await Person.findOne({username : username});
    const payment = await PaymentHistory.find({username : username}).sort({dateTime : 1});
    if(person){
      res.render("related-people/consumption-history", { person, payment });
    }
    else{
      res.status(404).send({
        "error": {
            "code": 404,
            "message": " User Not Found"
        }
    });
    }

  }

  packageList(req, res) {
    const allPackages = Package.find({});
    res.render("related-people/package-list", {allPackages});
  }

  cart(req, res){
    let orderedPackages = req.body;
    console.log("going to cart");
    console.log(orderedPackages)
    res.render("related-people/cart", {orderedPackages})
  }

  account(req, res) {
    res.render("related-people/account", { account });
  }

  buySuccess(req, res) {
    res.render("related-people/buy-success");
  }
}

module.exports = new PersonController();
