/*
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
*/

const person = {username: "123456789000", name: "Nguyen Dang Tien Thanh", gender : "Nam", dateOfBirth  : "2001-04-21", avatar: "avatar.jpg", address: "227 NVC"
, management : {status : "F0", place : "BV Da chien 2, HCM", note : "Delta"}, debt : -750000, balance : 1350000}
const mHistory = [
    {dateTime: "2022-02-24 14:00:00", type : "Tình trạng nhiễm", old : "-", new : "F1", note : "Tiếp nhận mới"},
    {dateTime: "2022-02-24 14:00:00", type : "Địa điểm", old : "BVDC01 HCM", new : "BVDC02 HCM", note : "Tiếp nhận mới"},
    {dateTime: "2022-02-27 08:00:00", type : "Tình trạng nhiễm", old : "F1", new : "F0", note : ""}
]
const cHistory = [
    {dateTime: "2022-02-25 07:00:00", packageName : "Thit Ca Trung 1", price : 436000, amount: 1},
    {dateTime: "2022-02-25 07:00:00", packageName : "Rau Cu Qua 13", price : 75000, amount: 2},
    {dateTime: "2022-02-26 07:00:00", packageName : "Thit Ca Trung 2", price : 350000, amount: 2}
]
const pHistory = [
    {dateTime: "2022-02-25 17:00:00", money : 436000},
    {dateTime: "2022-02-26 17:00:00", money : 300000},
    {dateTime: "2022-02-27 17:00:00", money : 436000},
    {dateTime: "2022-02-29 17:00:00", money : 570000}
]

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
class PersonController {
    index(req, res) {
        res.render('related-people/information', {person});
    }

    managedHistory(req, res){
        res.render('related-people/managed-history', {person, mHistory})
    }

    consumptionHistory(req, res){
        res.render('related-people/consumption-history', {person, cHistory})
    }

    paymentHistory(req, res){
        res.render('related-people/payment-history', {person, pHistory})
    }

    packageList(req, res) {
      res.render("related-people/package-list", { packages });
    }

    cart(req, res){
      res.render("related-people/cart");
    }

    buySuccess(req, res){
      res.render("related-people/buy-success");
    }
    
}

module.exports = new PersonController;
