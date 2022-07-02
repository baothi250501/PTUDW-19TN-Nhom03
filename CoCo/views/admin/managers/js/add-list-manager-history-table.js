var listManagerHistory = [
    {name:"Nguyễn Văn A", date: new Date("10/01/2022"), action: "Thay đổi bệnh nhân Nguyễn Thị D sang bệnh viên giã chiến số 1"},
    {name:"Nguyễn Văn B", date: new Date("11/24/2022"), action: "Thêm bệnh nhân Nguyễn Thị D sang bệnh viên giã chiến số 1"},
    {name:"Nguyễn Văn C", date: new Date("05/23/2022"), action: "Thay đổi bệnh nhân Nguyễn Thị E sang bệnh viên giã chiến số 3"},
    {name:"Nguyễn Văn C", date: new Date("05/23/2022"), action: "Thay đổi bệnh nhân Nguyễn Thị E sang bệnh viên giã chiến số 3"},
    {name:"Nguyễn Văn C", date: new Date("05/23/2022"), action: "Thay đổi bệnh nhân Nguyễn Thị E sang bệnh viên giã chiến số 3"},
    {name:"Nguyễn Văn C", date: new Date("05/23/2022"), action: "Thay đổi bệnh nhân Nguyễn Thị E sang bệnh viên giã chiến số 3"},
    {name:"Nguyễn Văn A", date: new Date("10/01/2022"), action: "Thay đổi bệnh nhân Nguyễn Thị D sang bệnh viên giã chiến số 1"},
    {name:"Nguyễn Văn B", date: new Date("11/24/2022"), action: "Thêm bệnh nhân Nguyễn Thị D sang bệnh viên giã chiến số 1"},
    {name:"Nguyễn Văn C", date: new Date("05/23/2022"), action: "Thay đổi bệnh nhân Nguyễn Thị E sang bệnh viên giã chiến số 3"},
    {name:"Nguyễn Văn C", date: new Date("05/23/2022"), action: "Thay đổi bệnh nhân Nguyễn Thị E sang bệnh viên giã chiến số 3"}
];

if(typeof(Storage) !== 'undefined'){
    if (localStorage.length === 0 || localStorage.getItem("listManagerHistory") === null){
          localStorage.setItem('listManagerHistory', JSON.stringify(listManagerHistory));
    } else {
        listManagerHistory = JSON.parse(localStorage.getItem('listManagerHistory'));
    }
}
loadListManagerHistoryTable();

function createData(data, classData){
    let a = document.createElement('td');
    a.setAttribute("class", classData);
    let textNode = document.createTextNode(data);
    a.appendChild(textNode);
    return a;
}
function formatDate(date){
    const dd = ('0' + date.getDate()).slice(-2);
    const mm = ('0' + (date.getMonth() + 1)).slice(-2);
    const yyyy = date.getFullYear();
    return `${dd}/${mm}/${yyyy}`;
}
function createDataBySTT(STT){
    let a = document.createElement('td');
    a.setAttribute("class", "table-stt");
    let textNode = document.createTextNode(STT);
    a.appendChild(textNode);
    return a;
}

function loadListManagerHistoryTable(){
    var myTable = document.querySelector('#list-manager-history-table');
    var headers = ['STT', 'Tên tài khoản', 'Thời gian', 'Hành động'];
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
    listManagerHistory.forEach(manager=>{
        var dataRow = document.createElement('tr');
        var STT = createDataBySTT(stt.toString());
        var name = createData(manager["name"], "table-name");
        var time = createData(formatDate(manager["date"]), "table-date");
        var action = createData(manager["action"], "table-action")
        dataRow.appendChild(STT);
        dataRow.appendChild(name);
        dataRow.appendChild(time);
        dataRow.appendChild(action);
        tbody.appendChild(dataRow);
        ++stt;
    })
    table.appendChild(tbody);
    myTable.appendChild(table);
}