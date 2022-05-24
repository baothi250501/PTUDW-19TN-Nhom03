var listAddresses = [
    {name:"Bệnh viện dã chiến số 1", tankage: 1000, currentQuantity: 50, type: 2},
    {name:"Bệnh viện dã chiến số 1", tankage: 1000, currentQuantity: 50, type: 2},
    {name:"Bệnh viện dã chiến số 1", tankage: 1000, currentQuantity: 50, type: 2},
    {name:"Bệnh viện dã chiến số 1", tankage: 1000, currentQuantity: 50, type: 2},
    {name:"Bệnh viện dã chiến số 1", tankage: 1000, currentQuantity: 50, type: 2},
    {name:"Bệnh viện dã chiến số 1", tankage: 1000, currentQuantity: 50, type: 2},
    {name:"Bệnh viện dã chiến số 1", tankage: 1000, currentQuantity: 50, type: 2},
    {name:"Bệnh viện dã chiến số 1", tankage: 1000, currentQuantity: 50, type: 2},
    {name:"Bệnh viện dã chiến số 1", tankage: 1000, currentQuantity: 50, type: 2},
    {name:"Bệnh viện dã chiến số 1", tankage: 1000, currentQuantity: 50, type: 2}
];

if(typeof(Storage) !== 'undefined'){
    if (localStorage.length === 0 || localStorage.getItem("listAddresses") === null){
          localStorage.setItem('listAddresses',JSON.stringify(listAddresses));
          loadListAddressesTable();
    } else {
        listAddresses = JSON.parse(localStorage.getItem('listAddresses'));
        loadListAddressesTable();
    }
}
else 
    loadListAddressesTable();

function createData(data, classData){
    let a = document.createElement('td');
    a.setAttribute("class", classData);
    let textNode = document.createTextNode(data);
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

function createCheckbox(){
    let a = document.createElement('td');
    a.setAttribute("class","table-checkbox")
    let checkBox = document.createElement('input');
    checkBox.type="checkbox";
    checkBox.disabled = true;
    checkBox.setAttribute("class","custom-check-box");
    checkBox.checked = false;
    a.appendChild(checkBox);
    return a;
}

function changeStatus(a, status){
    status ? a.checked = true : a.checked = false;
}

function createDataBySTT(STT){
    let a = document.createElement('td');
    a.setAttribute("class", "table-stt");
    let textNode = document.createTextNode(STT);
    a.appendChild(textNode);
    return a;
}

function loadListAddressesTable(){
    var myTable = document.querySelector('#list-addresses-table');
    var headers = ['STT', 'Tên địa điểm', 'Sức chứa', 'Số lượng hiện tại', 'Cách ly', 'Điều trị',''];
    var table = document.createElement('table');
    table.setAttribute("class", "custom-table table table-striped");
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
    listAddresses.forEach(address=>{
        var dataRow = document.createElement('tr');
        var STT = createDataBySTT(stt.toString());
        var name = createData(address["name"], "table-text");
        var tankage = createData(address["tankage"], "table-number");
        var currentQuantity = createData(address["currentQuantity"], "table-number")
        var isolation = createCheckbox(false);
        var treatment = createCheckbox(false);
        switch (address["type"]){
            case 1:
                changeStatus(isolation, true);
                break;
            case 2:
                changeStatus(treatment, true);
                break;
            case 3:
                changeStatus(isolation, true);
                changeStatus(treatment, true);
                break;
            default:
                break;
        }
        var button = createButton();
        dataRow.appendChild(STT);
        dataRow.appendChild(name);
        dataRow.appendChild(tankage);
        dataRow.appendChild(currentQuantity);
        dataRow.appendChild(isolation);
        dataRow.appendChild(treatment);
        dataRow.appendChild(button);
        tbody.appendChild(dataRow);
        ++stt;
    })
    table.appendChild(tbody);
    myTable.appendChild(table);
}