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

if(typeof(Storage) !== 'undefined'){
    if (localStorage.length === 0 || localStorage.getItem("listManager") === null){
          localStorage.setItem('listManager', JSON.stringify(listManager));
    } else {
        listManager= JSON.parse(localStorage.getItem('listManager'));
    }
}
loadListManagerTable();

function createData(data, classData){
    let a = document.createElement('td');
    a.setAttribute("class", classData);
    let textNode = document.createTextNode(data);
    a.appendChild(textNode);
    return a;
}
function createDataBySTT(STT){
    let a = document.createElement('td');
    a.setAttribute("class", "table-stt");
    let textNode = document.createTextNode(STT);
    a.appendChild(textNode);
    return a;
}
function createButton(status){
    let a = document.createElement('td');
    let lock = document.createElement('span');
    a.setAttribute("class", "table-lock");
    if (status){
        lock.setAttribute("class", "fa-solid fa-lock-open");
    } else{
        lock.setAttribute("class", "fa-solid fa-lock");
    }
    a.appendChild(lock);
    return a;
}

function renderTable(){
    let headerRow = document.createElement('tr');
    keys.forEach(key=>{
        let textNode = document.createTextNode(headers[key]);
        let th = creElem('th',[
            {key:'class',value:'th-style'},
            {key:'scope',value:'col'}
        ],textNode);
        //let th = document.createElement('th');
        //th.setAttribute("class", "th-style");
        //th.setAttribute("scope", "col");
        //th.appendChild(textNode);
        headerRow.appendChild(th);
    });
    //let theader = document.createElement('thead');
    let theader = creElem("thead",'',headerRow);
    //theader.appendChild(headerRow);
    //let table = document.createElement('table');
    //table.setAttribute("class", "table table-striped");
    //table.appendChild(theader);
    let table = creElem("table","table table-striped",theader);
    let tbody = document.createElement('tbody');
    let id = 1;
    contents.forEach(content=>{
        let dataRow = creElem('tr','',[]);
        dataRow.setAttribute("data-href",'/manager/related-people/detail-info');
        //let dataRow = document.createElement('tr');
        //dataRow.setAttribute("data-href","/manager/related-people/detail-info");
        let STT = createDataBySTT(id.toString());
        STT.onclick=function(){
            window.location.href="./manager-details-page.html";
        }
        let name = createData(content["name"], "table-name");
        name.onclick=function(){
            window.location.href="./manager-details-page.html";
        }
        let button = createButton(content["status"]);
        dataRow.appendChild(STT);
        dataRow.appendChild(name);
        dataRow.appendChild(button);
        tbody.appendChild(dataRow);
        ++id;
    });
    table.appendChild(tbody);
    myTable.appendChild(table);
}