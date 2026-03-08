let grupA = [
"PALOPO FC",
"ARENA FC",
"ARSENAL",
"AYAM GEPREK FC",
"JURU KUNCI FC"
]

let grupB = [
"MANGGARAI RAYA",
"BANGKA NACAP FC",
"GAPURTO FC",
"PSCEWANG",
"PESONA FC"
]

function buatTabel(){

let tabelA = document.getElementById("grupA")
let tabelB = document.getElementById("grupB")

grupA.forEach((tim,index)=>{

let row = `
<tr>
<td>${index+1}</td>
<td>${tim}</td>
<td>0</td>
<td>0</td>
<td>0</td>
<td>0</td>
<td>0</td>
</tr>
`

tabelA.innerHTML += row

})

grupB.forEach((tim,index)=>{

let row = `
<tr>
<td>${index+1}</td>
<td>${tim}</td>
<td>0</td>
<td>0</td>
<td>0</td>
<td>0</td>
<td>0</td>
</tr>
`

tabelB.innerHTML += row

})

}

buatTabel()
