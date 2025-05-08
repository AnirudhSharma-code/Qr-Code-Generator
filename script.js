let inputdata=document.getElementById("qr-data");
let qrimg=document.querySelector("img");
let dwldbtn=document.querySelector(".dwld-btn")
document.querySelector("button").addEventListener("click",function(){
  if(inputdata.value.trim().length===0){
    qrimg.classList.remove("update");
    dwldbtn.classList.remove("upd-btn");
    inputdata.classList.add("error");
    setTimeout(()=>{
      inputdata.classList.remove("error");
    },1000)
  }
  else{
    qrimg.src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data="+encodeURIComponent(inputdata.value.trim());
    qrimg.classList.add("update");
    setTimeout(()=>{
      dwldbtn.classList.add("upd-btn");
    },3000)
    dwldbtn.href="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data="+encodeURIComponent(inputdata.value.trim());
    dwldbtn.download="qr-image.png";
  }
  },false);
  function downloadImage(url, filename) {
    const img = new Image();
    img.crossOrigin = "Anonymous"; // Needed for CORS
  
    img.onload = function () {
      const canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0);
  
      // Convert to blob and trigger download
      canvas.toBlob(function (blob) {
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = filename;
        link.click();
      }, "image/png");
    };
  
    img.src = url;
  }
  
dwldbtn.addEventListener("click",function(e){
  e.preventDefault();
  downloadImage(qrimg.src,"qr-code.png");
},false);