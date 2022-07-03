const person = {username: "123456789000", name: "Nguyen Dang Tien Thanh", gender : "Nam", dateOfBirth  : "2001-04-21", avatar: "avatar.jpg", address: "227 NVC"
, management : {status : "F0", place : "BV Da chien 2, HCM", note : "Delta"}, debt : -750000, balance : 1350000}
const mHistory = [
    {dateTime: "2022-02-24 14:00:00", type : "Tình trạng nhiễm", old : "-", new : "F1", note : "Tiếp nhận mới"},
    {dateTime: "2022-02-24 14:00:00", type : "Địa điểm", old : "BVDC01 HCM", new : "BVDC02 HCM", note : "Tiếp nhận mới"},
    {dateTime: "2022-02-27 08:00:00", type : "Tình trạng nhiễm", old : "F1", new : "F0", note : ""}
]

class PersonController {
    index(req, res) {
        res.render('related-people/information', {person});
    }

    managedHistory(req, res){
        res.render('related-people/managed-history', {person, mHistory})
    }
    
}

module.exports = new PersonController;
