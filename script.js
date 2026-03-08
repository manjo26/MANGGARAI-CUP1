let klasemen = {
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
};

function tampil(){

let A=[]
let B=[]

for(let tim in klasemen){

if(klasemen[tim].g==="A"){
A.push({nama:tim,...klasemen[tim]})
}else{
B.push({nama:tim,...klasemen[tim]})
}

}

A.sort((a,b)=>b.p-a.p)
B.sort((a,b)=>b.p-a.p)

let tabelA=document.getElementById("grupA")
let tabelB=document.getElementById("grupB")

tabelA.innerHTML=""
tabelB.innerHTML=""

tabelA.innerHTML=`
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

tabelB.innerHTML=`
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
tabelA.innerHTML+=`
<tr>
<td>${i+1}</td>
<td>${t.nama}</td>
<td>${t.m}</td>
<td>${t.w}</td>
<td>${t.d}</td>
<td>${t.l}</td>
<td>${t.p}</td>
</tr>`
})

B.forEach((t,i)=>{
tabelB.innerHTML+=`
<tr>
<td>${i+1}</td>
<td>${t.nama}</td>
<td>${t.m}</td>
<td>${t.w}</td>
<td>${t.d}</td>
<td>${t.l}</td>
<td>${t.p}</td>
</tr>`
})

}

tampil()
