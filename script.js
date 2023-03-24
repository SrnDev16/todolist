const date = document.getElementById('date');
const info = document.getElementById('info');
const form = document.getElementById('form');
const listItem = document.getElementById('list-item');


let dataList = []

init();

function init() {
    listItem.innerHTML = '';
    dataList.forEach(addDataToList)
}


function addDataToList(data) {
    const day = data.date;
    const info = data.info;
    const div = document.createElement('div');
    div.classList.add('item');
    div.innerHTML = `<p>${day}</p><p>${info}</p><button id="deleteBtn" onclick="removeData(${data.id})">X</button>`
    listItem.appendChild(div)
}

function addDataToListener(e) {
    e.preventDefault()
    if (date.value.trim() === '' || info.value.trim() === '') {
        alert('กรุณากรอกข้อมุลให้ครบถ้วน');
    } else {
        const data = {
            id: Math.floor(Math.random() * 1000),
            date: date.value,
            info: info.value
        }
        dataList.push(data);
        addDataToList(data);
        date.value = '';
        info.value = '';
    }

}

function removeData(id) {
    dataList = dataList.filter(dataList => dataList.id !== id);
    init()
}

form.addEventListener('submit', addDataToListener)