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

const person = {username: "123456789000", name: "Nguy???n ????ng Ti???n Th??nh", gender : "Nam", dateOfBirth  : "21/04/2001", avatar: "avatar.jpg", address: "229 Nguy???n V??n C???, P1, Q5, TP.HCM"
, management : {status : "F0", place : "BV d?? chi???n s??? 2, HCM", note : "Bi???n ch???ng Delta"}, debt : -750000, balance : 1350000}
const mHistory = [
    {dateTime: "2022-02-24 14:00:00", type : "T??nh tr???ng nhi???m", old : "-", new : "F1", note : "Ti???p nh???n m???i"},
    {dateTime: "2022-02-24 14:00:00", type : "?????a ??i???m", old : "BVDC01 HCM", new : "BVDC02 HCM", note : "Ti???p nh???n m???i"},
    {dateTime: "2022-02-27 08:00:00", type : "T??nh tr???ng nhi???m", old : "F1", new : "F0", note : ""}
]
const cHistory = [
    {dateTime: "2022-02-25 07:00:00", packageName : "Th???t c?? tr???ng 1", price : 436000, amount: 1},
    {dateTime: "2022-02-25 07:00:00", packageName : "Rau c??? qu??? 3", price : 75000, amount: 2},
    {dateTime: "2022-02-26 07:00:00", packageName : "Th???t c?? tr???ng 2", price : 350000, amount: 2}
]
const pHistory = [
    {dateTime: "2022-02-25 17:00:00", money : 436000},
    {dateTime: "2022-02-26 17:00:00", money : 300000},
    {dateTime: "2022-02-27 17:00:00", money : 436000},
    {dateTime: "2022-02-29 17:00:00", money : 570000}
]

const packages = [
  {
    packageName: "Th???t c?? tr???ng 1",
    products: [
      { product: "Th???t heo ????i", amount: 500, unit: "g" },
      { product: "Th???t n???m b??", amount: 200, unit: "g" },
      { product: "C?? basa phi l??", amount: 200, unit: "g" },
      { product: "Tr???ng g??", amount: 2, unit: "v???" },
    ],
    price: 175000
  },
  {
    packageName: "Th???t c?? tr???ng 2",
    products: [
      { product: "Th???t heo ????i", amount: 500, unit: "g" },
      { product: "Th???t n???m b??", amount: 500, unit: "g" },
      { product: "C?? basa phi l??", amount: 200, unit: "g" },
      { product: "Tr???ng g??", amount: 2, unit: "v???" },
    ],
    price: 225000
  },
  {
    packageName: "Th???t c?? tr???ng 3",
    products: [
      { product: "Th???t heo ????i", amount: 1000, unit: "g" },
      { product: "Th???t n???m b??", amount: 500, unit: "g" },
      { product: "C?? basa phi l??", amount: 200, unit: "g" },
      { product: "Tr???ng g??", amount: 5, unit: "v???" },
    ],
    price: 375000
  },
  {
    packageName: "Rau c??? qu??? 1",
    products: [
      { product: "C???i xanh", amount: 500, unit: "g" },
      { product: "B??? ng??t", amount: 500, unit: "g" },
      { product: "Rau mu???ng", amount: 1000, unit: "g" },
      { product: "Rau d???n", amount: 500, unit: "g" },
    ],
    price: 100000
  },
  {
    packageName: "Rau c??? qu??? 2",
    products: [
      { product: "C???i xanh", amount: 500, unit: "g" },
      { product: "B??? ng??t", amount: 500, unit: "g" },
      { product: "Rau mu???ng", amount: 1000, unit: "g" },
      { product: "Rau d???n", amount: 500, unit: "g" },
    ],
    price: 150000
  },
  {
    packageName: "Rau c??? qu??? 3",
    products: [
      { product: "C???i xanh", amount: 500, unit: "g" },
      { product: "B??? ng??t", amount: 500, unit: "g" },
      { product: "Rau mu???ng", amount: 1000, unit: "g" },
      { product: "Rau d???n", amount: 500, unit: "g" },
    ],
    price: 200000
  }
];
class PersonController {
    index(req, res) {
        res.render('related-people/index', {person});
    }

    information(req, res) {
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
