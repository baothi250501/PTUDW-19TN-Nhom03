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
    
}

module.exports = new PersonController;
