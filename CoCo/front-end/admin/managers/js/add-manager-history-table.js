function createDataTable(data, classData){
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

function loadManagerHistoryTable(name){
    var myTable = document.querySelector('#manager-history-table');

    var listManager = [
        {date: new Date("10/01/2022"), action: "Thay đổi bệnh nhân Nguyễn Thị D sang bệnh viên giã chiến số 1"},
        {date: new Date("11/24/2022"), action: "Thêm bệnh nhân Nguyễn Thị D sang bệnh viên giã chiến số 1"},
        {date: new Date("05/23/2022"), action: "Thay đổi bệnh nhân Nguyễn Thị E sang bệnh viên giã chiến số 3"}
    ];
    var headers = ['STT', 'Thời gian', 'Hành động'];
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
        var time = createDataTable(formatDate(manager["date"]), "table-date");
        var action = createDataTable(manager["action"], "table-action")
        dataRow.appendChild(STT);
        dataRow.appendChild(time);
        dataRow.appendChild(action);
        table.appendChild(dataRow);
        ++stt;
    })
    myTable.appendChild(table);
}

function loadFullNameManager(name){
    var managerName = document.querySelector('#name');
    var a = document.createElement('p');
    a.setAttribute("class", "full-name-manager");
    var textNode = document.createTextNode(name);
    a.appendChild(textNode);
    managerName.appendChild(a);
}

function loadData(name){
    loadFullNameManager(name);
    loadManagerHistoryTable(name);
}