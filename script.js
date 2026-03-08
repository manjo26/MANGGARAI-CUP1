let klasemen = JSON.parse(localStorage.getItem("klasemen")) || {

"PALOPO FC":{main:0,poin:0,grup:"A"},
"ARENA FC":{main:0,poin:0,grup:"A"},
"ARSENAL":{main:0,poin:0,grup:"A"},
"AYAM GEPREK FC":{main:0,poin:0,grup:"A"},
"JURU KUNCI FC":{main:0,poin:0,grup:"A"},

"MANGGARAI RAYA":{main:0,poin:0,grup:"B"},
"BANGKA NACAP FC":{main:0,poin:0,grup:"B"},
"GAPURTO FC":{main:0,poin:0,grup:"B"},
"PSCEWANG":{main:0,poin:0,grup:"B"},
"PESONA FC":{main:0,poin:0,grup:"B"}

};

function simpan(){
localStorage.setItem("klasemen",JSON.stringify(klasemen));
}

if(document.getElementById("formSkor")){

document.getElementById("formSkor").addEventListener("submit",function(e){

e.preventDefault()

let tim1=document.getElementById("tim1").value
let tim2=document.getElementById("tim2").value

let skor1=parseInt(document.getElementById("skor1").value)
let skor2=parseInt(document.getElementById("skor2").value)

klasemen[tim1].main++
klasemen[tim2].main++

if(skor1>skor2){
klasemen[tim1].poin+=3
}

else if(skor2>skor1){
klasemen[tim2].poin+=3
}

else{
klasemen[tim1].poin+=1
klasemen[tim2].poin+=1
}

simpan()

alert("Skor berhasil disimpan")

})

}

function tampil(){

let grupA=[]
let grupB=[]

for(let tim in klasemen){

if(klasemen[tim].grup=="A"){
grupA.push([tim,klasemen[tim]])
}else{
grupB.push([tim,klasemen[tim]])
}

}

grupA.sort((a,b)=>b[1].poin-a[1].poin)
grupB.sort((a,b)=>b[1].poin-a[1].poin)

let tabelA=document.getElementById("grupA")
let tabelB=document.getElementById("grupB")

if(tabelA){

tabelA.innerHTML+="<tr><td>"+grupA[0][0]+"</td><td>"+grupA[0][1].main+"</td><td>"+grupA[0][1].poin+"</td></tr>"

tabelB.innerHTML+="<tr><td>"+grupB[0][0]+"</td><td>"+grupB[0][1].main+"</td><td>"+grupB[0][1].poin+"</td></tr>"

}

}

tampil()
