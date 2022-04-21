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
    var headerRow = document.createElement('tr');
    headers.forEach(header=>{
        var th = document.createElement('th');
        var textNode = document.createTextNode(header);
        th.appendChild(textNode);
        headerRow.appendChild(th);
    });
    table.appendChild(headerRow);
    var stt = 1;
    listManager.forEach(manager=>{
        var dataRow = document.createElement('tr');
        var STT = createDataBySTT(stt.toString());
        var name = createData(manager["name"], "table-name");
        var button = createButton(manager["status"]);
        dataRow.appendChild(STT);
        dataRow.appendChild(name);
        dataRow.appendChild(button);
        table.appendChild(dataRow);
        ++stt;
    })
    myTable.appendChild(table);
}