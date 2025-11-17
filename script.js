const hh=document.getElementById("hh")
const mm=document.getElementById("mm")
const ss=document.getElementById("ss")
const a=document.getElementById("a")


function soat(){
    let soat=moment().format("hh")
    let minut=moment().format("mm")
    let sekund=moment().format("ss")
    let pm=moment().format("a")
    
    hh.textContent=soat;
    mm.textContent=minut;
    ss.textContent=sekund;
    a.textContent=pm;
    console.log(hh,mm,ss,a);
}

setInterval(soat,1000);

