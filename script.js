let klasemen = JSON.parse(localStorage.getItem("klasemen")) || {

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

function tampil(){

let A=[]
let B=[]

for(let tim in klasemen){

if(klasemen[tim].g=="A"){
A.push([tim,klasemen[tim]])
}else{
B.push([tim,klasemen[tim]])
}

}

A.sort((a,b)=>b[1].p-a[1].p)
B.sort((a,b)=>b[1].p-a[1].p)

let tabelA=document.getElementById("grupA")
let tabelB=document.getElementById("grupB")

if(tabelA){

tabelA.innerHTML = `
<tr>
<th>No</th>
<th>Tim</th>
<th>M</th>
<th>W</th>
<th>D</th>
<th>L</th>
<th>P</th>
</tr>
`

A.forEach((t,i)=>{

tabelA.innerHTML += `
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

tabelB.innerHTML = `
<tr>
<th>No</th>
<th>Tim</th>
<th>M</th>
<th>W</th>
<th>D</th>
<th>L</th>
<th>P</th>
</tr>
`

B.forEach((t,i)=>{

tabelB.innerHTML += `
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

}

tampil()
