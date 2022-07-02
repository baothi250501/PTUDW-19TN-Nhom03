let myTable = document.querySelector('#table');
let packages = [
    {name:"Combo Thịt, Cá, Trứng 1", price:"200.000"},
    {name:"Combo Thịt, Cá, Trứng 2", price:"250.000"},
    {name:"Combo Thịt, Cá, Trứng 3", price:"300.000"}
];
let headers = ['STT', 'Tên', 'Giá', ' '];
let table = document.createElement('table');
let headerRow = document.createElement('tr');
headers.forEach(header=>{
    let th = document.createElement('th');
    let textNode = document.createTextNode(header);
    th.appendChild(textNode);
    headerRow.appendChild(th);
});
table.appendChild(headerRow);
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
function createButton(){
    let a = document.createElement('td');
    let del = document.createElement('span');
    let edit = document.createElement('span');
    a.setAttribute("class", "table-button");
    edit.setAttribute("class", "fa-solid fa-pen");
    del.setAttribute("class", "fa-solid fa-trash-can")
    a.appendChild(edit);
    a.appendChild(del);
    return a;
}
let stt = 1;
packages.forEach(package=>{
    let dataRow = document.createElement('tr');
    let STT = createDataBySTT(stt.toString());
    let name = createData(package["name"], "table-name");
    let price = createData(package["price"], "table-price");
    let button = createButton();
    dataRow.appendChild(STT);
    dataRow.appendChild(name);
    dataRow.appendChild(price);
    dataRow.appendChild(button);
    table.appendChild(dataRow);
    ++stt;
})
myTable.appendChild(table);