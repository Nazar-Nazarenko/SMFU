const res = document.querySelector('.reserve-container')
const act = document.querySelector('.action-container')

function openReserve() {
    console.log("open reserve");
    console.log("close action");
    act.style.display = 'none';
    res.style.display = 'block';
}

function openAction() {
    console.log("open action");
    console.log("close reserve");
    res.style.display = 'none';
    act.style.display = 'block';
}

function closeReserve() {
    res.style.display = 'none';
}

function closeAction() {
    act.style.display = 'none';
}
