let data = JSON.parse(localStorage.getItem("klasemen"))

if(!data){

data = {

"PALOPO FC":{m:0,w:0,d:0,l:0,p:0,g:"A"},
"ARENA FC":{m:0,w:0,d:0,l:0,p:0,g:"A"},
"ARSENAL":{m:0,w:0,d:0,l:0,p:0,g:"A"},
"AYAM GEPREK FC":{m:0,w:0,d:0,l:0,p:0,g:"A"},
"JURU KUNCI FC":{m:0,w:0,d:0,l:0,p:0,g:"A"},

"MANGGARAI RAYA":{m:0,w:0,d:0,l:0,p:0,g:"B"},
"BANGKA NACAP FC":{m:0,w:0,d:0,l:0,p:0,g:"B"},
"GAPURTO FC":{m:0,w:0,d:0,l:0,p:0,g:"B"},
"PSCEWANG":{m:0,w:0,d:0,l:0,p:0,g:"B"},
"PESONA FC":{m:0,w:0,d:0,l:0,p:0,g:"B"}

}

}

function simpan(){
localStorage.setItem("klasemen",JSON.stringify(data))
}

function tampil(){

let A=[]
let B=[]

for(let tim in data){

if(data[tim].g==="A"){
A.push([tim,data[tim]])
}else{
B.push([tim,data[tim]])
}

}

A.sort((a,b)=>b[1].p-a[1].p)
B.sort((a,b)=>b[1].p-a[1].p)

let tabelA=document.getElementById("grupA")
let tabelB=document.getElementById("grupB")

if(!tabelA) return

tabelA.innerHTML=""
tabelB.innerHTML=""

A.forEach((t,i)=>{

tabelA.innerHTML+=`
<tr>
<td>${i+1}</td>
<td>${t[0]}</td>
<td>${t[1].m}</td>
<td>${t[1].w}</td>
<td>${t[1].d}</td>
<td>${t[1].l}</td>
<td>${t[1].p}</td>
</tr>
`

})

B.forEach((t,i)=>{

tabelB.innerHTML+=`
<tr>
<td>${i+1}</td>
<td>${t[0]}</td>
<td>${t[1].m}</td>
<td>${t[1].w}</td>
<td>${t[1].d}</td>
<td>${t[1].l}</td>
<td>${t[1].p}</td>
</tr>
`

})

}

tampil()
