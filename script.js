let qrText=document.getElementById('qr-text');
let sizes=document.getElementById('sizes');
let generateBtn=document.getElementById('generateBtn');
let downloadBtn=document.getElementById('downloadBtn')

let qrContainer=document.querySelector('.qr-body')
let size=sizes.value;
generateBtn.addEventListener('click', (e) =>{
    e.preventDefault();
    isEmptyInput();
})

sizes.addEventListener('change', (e) => {
 size=e.target.value;
 isEmptyInput();
})

downloadBtn.addEventListener('click', () => {
    let img=document.querySelector('.qr-body img');
    if(img !=null){
        let imgAtrr=img.getAttribute('src');
        downloadBtn.setAttribute("href",imgAtrr);
    }
    else
    {
        downloadBtn.setAttribute("href", `${document.querySelector('canvas').toDataURL()}`);
    }
})


function isEmptyInput()
{
if(qrText.value.length>0){
    generateQRCode();
    }
    else
    {
        alert("enter the text or URL to generate your QR code");
    }

}


function generateQRCode(){
    qrContainer.innerHTML="";
    new QRCode(qrContainer, {
        text:qrText.value,
        height:size,
        width:size,
        colorLight:"#fff",
        colorDark:"#000",
    })
}