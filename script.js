let inputdata=document.getElementById("qr-data");
let qrimg=document.querySelector("img");
document.querySelector("button").addEventListener("click",function(){
  if(inputdata.value.trim().length===0){
    qrimg.classList.remove("update");
    inputdata.classList.add("error");
    setTimeout(()=>{
      inputdata.classList.remove("error");
    },1000)
  }
  else{
    qrimg.src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data="+encodeURIComponent(inputdata.value.trim());
    qrimg.classList.add("update");
  }
  },false);

