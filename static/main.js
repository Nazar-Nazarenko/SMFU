const res = document.querySelector('.reserve-container')
const reserveMain = document.querySelector('.reserve-main');
const reserveMainBlock = document.querySelector('.main-block');
const menuSelect = document.querySelector('.menu-select');
const homeScreen = document.querySelector('.home-screen');
const act = document.querySelector('.action-container');
const qrCode = document.querySelector('.qr-block');
const toAllDetailsBtn = document.querySelector('.to-all-details-btn');
let currentDate = prepareDate();
let currentDate1 = prepareDate();
let currentDate2 = prepareDate();
let currentDate3 = prepareDate();
let currentDateExpanded = prepareDate();
document.querySelector('.current-date').innerHTML = currentDate;
document.querySelector('.current-date-1').innerHTML = currentDate1;
document.querySelector('.current-date-2').innerHTML = currentDate2;
document.querySelector('.current-date-3').innerHTML = currentDate3;
document.querySelector('.date-expanded').innerHTML = currentDateExpanded;

function openReserve() {
    reserveMain.style.display = 'block';
    act.style.display = 'none';
    homeScreen.style.display = 'none';
}

function openAction() {
    reserveMain.style.display = 'none';
    act.style.display = 'block';
}

function closeReserve() {
    reserveMain.style.display = 'none';
    homeScreen.style.display = 'block';
    if (res.style.display === 'block') {
        res.style.display = 'none';
        reserveMainBlock.style.display = 'block';
        reserveMain.style.display = 'block';
        homeScreen.style.display = 'none';
        menuSelect.style.display = 'none';
    }
}

function closeAction() {
    act.style.display = 'none';
}

function closeReserveMain() {
    reserveMain.style.display = 'none';
    homeScreen.style.display = 'block';
}

function openAllReserveInfo() {
    reserveMainBlock.style.display = 'none';
    res.style.display = 'block';
}
function openAllReserveInfoMenu() {
    menuSelect.style.display = 'block';
    toAllDetailsBtn.style.display = 'block';
}

function openQrCode() {
    qrCode.style.display = 'block';
    reserveMainBlock.style.display = 'none';
    if (menuSelect.style.display === 'block') {
        menuSelect.style.display = 'none';
        qrCode.style.display = 'none';
        reserveMainBlock.style.display = 'block';
    }
}

function closeQrCode() {
    qrCode.style.display = 'none';
    reserveMainBlock.style.display = 'block';
}

function prepareDate() {
    return new Date().toLocaleDateString()
}
