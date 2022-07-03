/*
const packages = [
  {
    packageName: "Thịt cá trứng 1",
    products: [
      { product: "Thịt heo đùi", amount: 500, unit: "g" },
      { product: "Thịt nạm bò", amount: 200, unit: "g" },
      { product: "Cá basa phi lê", amount: 200, unit: "g" },
      { product: "Trứng gà", amount: 2, unit: "vỉ" },
    ],
    price: 175000
  },
  {
    packageName: "Thịt cá trứng 2",
    products: [
      { product: "Thịt heo đùi", amount: 500, unit: "g" },
      { product: "Thịt nạm bò", amount: 500, unit: "g" },
      { product: "Cá basa phi lê", amount: 200, unit: "g" },
      { product: "Trứng gà", amount: 2, unit: "vỉ" },
    ],
    price: 225000
  },
  {
    packageName: "Thịt cá trứng 3",
    products: [
      { product: "Thịt heo đùi", amount: 1000, unit: "g" },
      { product: "Thịt nạm bò", amount: 500, unit: "g" },
      { product: "Cá basa phi lê", amount: 200, unit: "g" },
      { product: "Trứng gà", amount: 5, unit: "vỉ" },
    ],
    price: 375000
  },
  {
    packageName: "Rau củ quả 1",
    products: [
      { product: "Cải xanh", amount: 500, unit: "g" },
      { product: "Bồ ngót", amount: 500, unit: "g" },
      { product: "Rau muống", amount: 1000, unit: "g" },
      { product: "Rau dền", amount: 500, unit: "g" },
    ],
    price: 100000
  },
  {
    packageName: "Rau củ quả 2",
    products: [
      { product: "Cải xanh", amount: 500, unit: "g" },
      { product: "Bồ ngót", amount: 500, unit: "g" },
      { product: "Rau muống", amount: 1000, unit: "g" },
      { product: "Rau dền", amount: 500, unit: "g" },
    ],
    price: 150000
  },
  {
    packageName: "Rau củ quả 3",
    products: [
      { product: "Cải xanh", amount: 500, unit: "g" },
      { product: "Bồ ngót", amount: 500, unit: "g" },
      { product: "Rau muống", amount: 1000, unit: "g" },
      { product: "Rau dền", amount: 500, unit: "g" },
    ],
    price: 200000
  }
];
*/
const Person = require('../../models/related-people/Person.js');
const ManagedHistory = require('../../models/related-people/ManagedHistory.js');
const ConsumptionHistory = require('../../models/related-people/ConsumptionHistory.js');
const PaymentHistory = require('../../models/related-people/PaymentHistory.js');
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
    res.render("related-people/consumption-history", { person, consumption });
  }

  paymentHistory(req, res) {
    const username = req.body.username;
    const person = await Person.findOne({username : username});
    const payment = await PaymentHistory.find({username : username}).sort({dateTime : 1});
    res.render("related-people/consumption-history", { person, payment });
  }

  packageList(req, res) {
    res.render("related-people/package-list", { packages });
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
