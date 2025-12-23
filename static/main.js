const res = document.querySelector('.reserve-container')
const reserveMain = document.querySelector('.reserve-main');
const runningLineDia = document.querySelector('.running-line-dia');
const runningLineDiaDrive = document.querySelector('.running-line-dia-drive');
const openDrivingLicenceBtn = document.querySelector('.open-driving-licence');
const diaMain = document.querySelector('.dia-main');
const diaMainPhoto = document.querySelector('.dia-main-photo');
const igorPhoto = document.querySelector('.igor');
const igorBtn = document.querySelector('.igor-btn');
const num = document.querySelector('.num');
const diaOpenQrDiaBtn = document.querySelector('.open-qr-dia-btn');
const diaCloseQrDiaBtn = document.querySelector('.close-qr-btn');
const reserveMainBlock = document.querySelector('.main-block');
const menuSelect = document.querySelector('.menu-select');
const menuSelectBackground = document.querySelector('.menu-select-background');
const homeScreen = document.querySelector('.home-screen');
const act = document.querySelector('.action-container');
const qrCode = document.querySelector('.qr-block');
const qrCodeDia = document.querySelector('.qr-block-dia');
const drivingLicence = document.querySelector('.driving-licence');
const toAllDetailsBtn = document.querySelector('.to-all-details-btn');
const updateDocumentBtn = document.querySelector('.update-document');
const gotItBtn = document.querySelector('.got-it');
const updatedDocument = document.querySelector('.updated-document');
let currentDate = prepareDate();
let currentDate1 = prepareDate();
let currentDate2 = prepareDate();
let currentDate3 = prepareDate();
let currentDateInner = prepareDate();
let currentDate1Inner = prepareDate();
let currentDate2Inner = prepareDate();
let currentDate3Inner = prepareDate();
let today = getTodayDate();
let today1 = getTodayDate();
let timeNow = getTimeNow();
let timeNow1 = getTimeNow();
document.querySelector('.current-date').innerHTML = currentDate;
document.querySelector('.current-date-1').innerHTML = currentDate1;
document.querySelector('.current-date-2').innerHTML = currentDate2;
document.querySelector('.current-date-3').innerHTML = currentDate3;
document.querySelector('.current-date-inner').innerHTML = currentDateInner;
document.querySelector('.current-date-1-inner').innerHTML = currentDate1Inner;
document.querySelector('.current-date-2-inner').innerHTML = currentDate2Inner;
document.querySelector('.current-date-3-inner').innerHTML = currentDate3Inner;
document.querySelector('.driving-licence-date').innerHTML = today;
document.querySelector('.driving-licence-date-1').innerHTML = today1;
document.querySelector('.driving-licence-time').innerHTML = timeNow;
document.querySelector('.driving-licence-time-1').innerHTML = timeNow1;
console.log('timeNow::',timeNow);

function openReserve() {
    reserveMain.style.display = 'block';
    act.style.display = 'none';
    homeScreen.style.display = 'none';
    igorBtn.style.display = 'none';
}

function openAction() {
    reserveMain.style.display = 'none';
    act.style.display = 'block';
    openDrivingLicenceBtn.style.display = 'block';
    igorBtn.style.display = 'none';
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
        menuSelectBackground.style.display = 'none';
    }
}

function closeAction() {
    act.style.display = 'none';
    igorBtn.style.display = 'block';
}

function closeReserveMain() {
    reserveMain.style.display = 'none';
    homeScreen.style.display = 'block';
    igorBtn.style.display = 'block';
}

function openAllReserveInfo() {
    reserveMainBlock.style.display = 'none';
    res.style.display = 'block';
}

function updateDocument() {
    menuSelect.style.display = 'none';
    updatedDocument.style.display = 'block';
    gotItBtn.style.display = 'block';
}

function gotIt() {
    updatedDocument.style.display = 'none';
    gotItBtn.style.display = 'none';
    menuSelectBackground.style.display = 'none';
}

function openAllReserveInfoMenu() {
    menuSelect.style.display = 'block';
    menuSelectBackground.style.display = 'block';
    toAllDetailsBtn.style.display = 'block';
    updateDocumentBtn.style.display = 'block';
}

function openQrCode() {
    qrCode.style.display = 'block';
    reserveMainBlock.style.display = 'none';
    if (menuSelect.style.display === 'block') {
        menuSelect.style.display = 'none';
        menuSelectBackground.style.display = 'none';
        qrCode.style.display = 'none';
        reserveMainBlock.style.display = 'block';
    }
}

function openDiaQrCode() {
    qrCodeDia.style.display = 'block';
    drivingLicence.style.display = 'none';
    diaMain.style.display = 'none';
    diaOpenQrDiaBtn.style.display = 'none';
    diaCloseQrDiaBtn.style.display = 'block';
    diaMainPhoto.style.display = 'none';
    runningLineDia.style.visibility = 'hidden';
}

function openDrivingLicence() {
    if (drivingLicence.style.display === 'none') {
        drivingLicence.style.display = 'block';
        diaMain.style.display = 'none';
        diaOpenQrDiaBtn.style.display = 'none';
        diaCloseQrDiaBtn.style.display = 'block';
        diaMainPhoto.style.display = 'none';
        runningLineDia.style.visibility = 'hidden';
    } else {
        drivingLicence.style.display = 'none';
        diaMain.style.display = 'block';
        diaOpenQrDiaBtn.style.display = 'block';
        diaCloseQrDiaBtn.style.display = 'none';
        diaMainPhoto.style.display = 'block';
        runningLineDia.style.visibility = 'visible  ';
    }
}

function closeQrCode() {
    qrCode.style.display = 'none';
    reserveMainBlock.style.display = 'block';
}

function closeQrCodeDia() {
    qrCodeDia.style.display = 'none';
    diaMain.style.display = 'block';
    diaMainPhoto.style.display = 'block';
    runningLineDia.style.visibility = 'visible';
    diaOpenQrDiaBtn.style.display = 'block';
    diaCloseQrDiaBtn.style.display = 'none';
}

function prepareDate() {
    let today = new Date();
    today.setDate(today.getDate() - 1);
    return today.toLocaleDateString()
}

function getTodayDate() {
    return new Date().toLocaleDateString();
}

function getTimeNow() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    return `${hours}:${minutes}`;
}

function setIgorPhoto() {
    igorPhoto.style.display = 'block';
    num.innerHTML = '2';
    igorBtn.style.display = 'none';
    openDrivingLicenceBtn.style.pointerEvents = 'none';
}
