const RelatedPeopleList = [
    {userID:1001,id:1,name:"Huỳnh Ngô Trung Trực",username:"0512010100981",yearOfBirth:"2001",status:"F1",place:"Quận Thủ Đức"},
    {userID:1001,id:2,name:"Huỳnh Ngô Trung Trực",username:"0512010100981",yearOfBirth:"2001",status:"F1",place:"Quận Thủ Đức"},
    {userID:1001,id:3,name:"Huỳnh Ngô Trung Trực",username:"0512010100981",yearOfBirth:"2001",status:"F1",place:"Quận Thủ Đức"},
    {userID:1001,id:4,name:"Huỳnh Ngô Trung Trực",username:"0512010100981",yearOfBirth:"2001",status:"F1",place:"Quận Thủ Đức"},
    {userID:1001,id:5,name:"Huỳnh Ngô Trung Trực",username:"0512010100981",yearOfBirth:"2001",status:"F1",place:"Quận Thủ Đức"},
    {userID:1001,id:6,name:"Huỳnh Ngô Trung Trực",username:"0512010100981",yearOfBirth:"2001",status:"F1",place:"Quận Thủ Đức"},
    {userID:1001,id:7,name:"Huỳnh Ngô Trung Trực",username:"0512010100981",yearOfBirth:"2001",status:"F1",place:"Quận Thủ Đức"},
    {userID:1001,id:8,name:"Huỳnh Ngô Trung Trực",username:"0512010100981",yearOfBirth:"2001",status:"F1",place:"Quận Thủ Đức"},
    {userID:1001,id:9,name:"Huỳnh Ngô Trung Trực",username:"0512010100981",yearOfBirth:"2001",status:"F1",place:"Quận Thủ Đức"},
    {userID:1001,id:10,name:"Huỳnh Ngô Trung Trực",username:"0512010100981",yearOfBirth:"2001",status:"F1",place:"Quận Thủ Đức"},
]

class ProductController {
    index(req, res) {
        res.render('manager/related-people/index',{RelatedPeopleList});
    }
    add(req, res) {
        res.render('manager/related-people/add');
    }
}

module.exports = new ProductController;
