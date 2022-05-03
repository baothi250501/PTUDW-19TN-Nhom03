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
    let listButton = document.createElement('span');
    a.setAttribute("class", "table-list-button");
    return a;
}