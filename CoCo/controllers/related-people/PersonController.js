const Person = require('../../models/related-people/Person.js');
const ManagedHistory = require('../../models/related-people/ManagedHistory.js');
const ConsumptionHistory = require('../../models/related-people/ConsumptionHistory.js');
const PaymentHistory = require('../../models/related-people/PaymentHistory.js');
const Package = require('../../models/manager/Package.js');
class PersonController {
  async index(req, res) {
    const username = req.query.username;
    const person = await Person.findOne({username : username}).exec();
    if(person){
      res.render("related-people/information", { person });
    }
    else{
      res.status(404).send({
        "error": {
            "code": 404,
            "message": "User Not Found"
        }
    });
    }
  }

  async managedHistory(req, res) {
    const username = req.query.username;
    const person = await Person.findOne({username : username}).exec();
    const histories = await ManagedHistory.find({username : username}).sort({dateTime : 1}).exec();
    if(person){
      res.render("related-people/managed-history", { person, histories});
    }
    else{
      res.status(404).send({
        "error": {
            "code": 404,
            "message": "User Not Found"
        }
    });
    }
  }

  async consumptionHistory(req, res) {
    const username = req.query.username;
    const person = await Person.findOne({username : username}).exec();

    const consumption = await ConsumptionHistory.find({username : username}).sort({dateTime : 1}).exec();
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

  async paymentHistory(req, res) {
    const username = req.query.username;
    const person = await Person.findOne({username : username}).exec();
    const payment = await PaymentHistory.find({username : username}).sort({dateTime : 1}).exec();
    if(person){
      res.render("related-people/consumption-history", { person, payment });
    }
    else{
      res.status(404).send({
        "error": {
            "code": 404,
            "message": "User Not Found"
        }
    });
    }

  }

  async packageList(req, res) {
    const allPackages = await Package.find({});
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
