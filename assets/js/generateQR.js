let imgQR = document.getElementById("imgQR");
let imageQR = document.getElementById("imageQR");
let textQR = document.getElementById("textQR");

function generate() {
    if (textQR.value.length > 0) {
        imageQR.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + textQR.value;
    }else {
        textQR.classList.add('error');
        setTimeout (()=> {
            qrText.classList.add('error');
        },1000);
    }
    imgQR.classList.add("show-img");
}