const person = {username: "123456789000", name: "Nguyen Dang Tien Thanh", gender : "Nam", dateOfBirth  : "2001-04-21", avatar: "avatar.jpg", address: "227 NVC"
, management : {status : "F0", place : "BV Da chien 2, HCM", note : "Delta"}, debt : -750000, balance : 1350000}

class PersonController {
    index(req, res) {
        res.render('related-people/information', {person});
    }
    
}

module.exports = new PersonController;
