function creElem(heading, attrs, children) {
    let element = document.createElement(heading);

    if (typeof(attrs) === 'string') {
        if (attrs !== '')
            element.setAttribute('class', attrs);
    }
    else
        for (let key in attrs) {
            element.setAttribute(key, attrs[key]);
        }

    try {
        children.forEach(child=>element.appendChild(child));
    }
    catch(err) {
        element.appendChild(children);
    }

    return element;
}

var keys = ["id","name","identityID","yearOfBirth","status","treatmentPlace"];

var headers = {id:"STT", name:"Họ và tên", identityID:"Số CMND/CCCD", yearOfBirth:"Năm sinh",status:"Trạng thái",treatmentPlace:"Nơi điều trị"};

var contents = [
    {name:"Nguyễn Đăng Tiến Thành", identityID: "012345678910", yearOfBirth: "2001", status: "F0", treatmentPlace: "Quân khu 14, TP.Hồ Chí Minh"},
    {name:"Nguyễn Đăng Tiến Thành", identityID: "012345678910", yearOfBirth: "2001", status: "F0", treatmentPlace: "Quân khu 14, TP.Hồ Chí Minh"},
    {name:"Nguyễn Đăng Tiến Thành", identityID: "012345678910", yearOfBirth: "2001", status: "F0", treatmentPlace: "Quân khu 14, TP.Hồ Chí Minh"},
    {name:"Nguyễn Đăng Tiến Thành", identityID: "012345678910", yearOfBirth: "2001", status: "F0", treatmentPlace: "Quân khu 14, TP.Hồ Chí Minh"},
    {name:"Nguyễn Đăng Tiến Thành", identityID: "012345678910", yearOfBirth: "2001", status: "F0", treatmentPlace: "Quân khu 14, TP.Hồ Chí Minh"},
    {name:"Nguyễn Đăng Tiến Thành", identityID: "012345678910", yearOfBirth: "2001", status: "F0", treatmentPlace: "Quân khu 14, TP.Hồ Chí Minh"},
    {name:"Nguyễn Đăng Tiến Thành", identityID: "012345678910", yearOfBirth: "2001", status: "F0", treatmentPlace: "Quân khu 14, TP.Hồ Chí Minh"},
    {name:"Nguyễn Đăng Tiến Thành", identityID: "012345678910", yearOfBirth: "2001", status: "F0", treatmentPlace: "Quân khu 14, TP.Hồ Chí Minh"},
    {name:"Nguyễn Đăng Tiến Thành", identityID: "012345678910", yearOfBirth: "2001", status: "F0", treatmentPlace: "Quân khu 14, TP.Hồ Chí Minh"},
    {name:"Nguyễn Đăng Tiến Thành", identityID: "012345678910", yearOfBirth: "2001", status: "F0", treatmentPlace: "Quân khu 14, TP.Hồ Chí Minh"}
];

function renderTable(){
    let headerRow = document.createElement('tr');
    keys.forEach(key=>{
        let textNode = document.createTextNode(headers[key]);
        let th = creElem('th',{class:'th-style', scope:'col'},textNode);
        headerRow.appendChild(th);
    });
    
    let theader = creElem("thead",'',headerRow);

    let tbody = document.createElement('tbody');
    let id = 0;
    contents.forEach(content=>{
        ++id;
        let dataRow = creElem('tr','',[]);
        dataRow.setAttribute("data-href",'/manager/related-people/detail-info',[]);
        
        keys.forEach(key=>{
            let info = id.toString();
            if (key !== "id") {
                info = content[key];
            }
            
            dataRow.appendChild(creElem('td',"table-name",document.createTextNode(info)));
        });

        tbody.appendChild(dataRow);
    });
    
    let table = creElem("table","table table-striped",[theader,tbody]);
    
    let myTable = document.querySelector("#table");
    
    myTable.appendChild(table);
}

renderTable();