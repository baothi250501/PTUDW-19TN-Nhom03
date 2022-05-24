var listManager = [
    {name:"Nguyen Van A", status: false},
    {name:"Nguyen Van B", status: true},
    {name:"Nguyen Van C", status: false},
    {name:"Nguyen Van A", status: false},
    {name:"Nguyen Van A", status: false},
    {name:"Nguyen Van A", status: false},
    {name:"Nguyen Van A", status: false},
    {name:"Nguyen Van A", status: false},
    {name:"Nguyen Van A", status: false},
    {name:"Nguyen Van A", status: false}
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

function loadListManagerTable(){
    var myTable = document.querySelector('#list-manager-table');
    var headers = ['STT', 'Tên', 'Khóa tài khoản'];
    var table = document.createElement('table');
    table.setAttribute("class", "table table-striped");
    var theader = document.createElement('thead');
    var headerRow = document.createElement('tr');
    headers.forEach(header=>{
        var th = document.createElement('th');
        th.setAttribute("class", "th-style");
        th.setAttribute("scope", "col");
        var textNode = document.createTextNode(header);
        th.appendChild(textNode);
        headerRow.appendChild(th);
    });
    theader.appendChild(headerRow);
    table.appendChild(theader);
    var tbody = document.createElement('tbody');
    var stt = 1;
    listManager.forEach(manager=>{
        var dataRow = document.createElement('tr');
        dataRow.setAttribute("data-href","./manager-details-page.html");
        var STT = createDataBySTT(stt.toString());
        STT.onclick=function(){
            window.location.href="./manager-details-page.html";
        }
        var name = createData(manager["name"], "table-name");
        name.onclick=function(){
            window.location.href="./manager-details-page.html";
        }
        var button = createButton(manager["status"]);
        dataRow.appendChild(STT);
        dataRow.appendChild(name);
        dataRow.appendChild(button);
        tbody.appendChild(dataRow);
        ++stt;
    });
    table.appendChild(tbody);
    myTable.appendChild(table);
}