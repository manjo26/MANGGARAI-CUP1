const ADMIN_PASSWORD="admin123"

function login(){

let p=document.getElementById("password").value

if(p===ADMIN_PASSWORD){

document.getElementById("loginBox").style.display="none"
document.getElementById("adminPanel").style.display="block"

loadAdminMatches()

}else{
alert("Password salah")
}

}

const groupA=[
"PALOPO FC",
"ARENAFC",
"ARSENAL",
"AYAM GEPREK FC",
"JURU KUNCI FC"
]

const groupB=[
"MANGGARAI RAYA",
"BANGKA NACAP FC",
"GAPURTO FC",
"PSCEWANG",
"PESONA FC"
]

const matches=[

["PALOPO FC","JURU KUNCI FC"],
["ARENAFC","AYAM GEPREK FC"],
["PALOPO FC","AYAM GEPREK FC"],
["JURU KUNCI FC","ARSENAL"],
["PALOPO FC","ARSENAL"],
["AYAM GEPREK FC","ARENAFC"],
["PALOPO FC","ARENAFC"],
["ARSENAL","AYAM GEPREK FC"],
["ARENAFC","JURU KUNCI FC"],
["ARSENAL","PALOPO FC"],

["MANGGARAI RAYA","PESONA FC"],
["BANGKA NACAP FC","PSCEWANG"],
["MANGGARAI RAYA","PSCEWANG"],
["PESONA FC","GAPURTO FC"],
["MANGGARAI RAYA","GAPURTO FC"],
["PSCEWANG","BANGKA NACAP FC"],
["MANGGARAI RAYA","BANGKA NACAP FC"],
["GAPURTO FC","PESONA FC"],
["PESONA FC","BANGKA NACAP FC"],
["GAPURTO FC","PSCEWANG"]

]

function loadAdminMatches(){

let div=document.getElementById("adminMatches")

matches.forEach((m,i)=>{

div.innerHTML+=`
<p>
${m[0]}
<input id="s1${i}">
vs
<input id="s2${i}">
${m[1]}
</p>
`

})

}

function saveScores(){

let scores=[]

matches.forEach((m,i)=>{

let s1=document.getElementById("s1"+i).value
let s2=document.getElementById("s2"+i).value

scores.push([s1,s2])

})

localStorage.setItem("scores",JSON.stringify(scores))

alert("Skor tersimpan!")

location.reload()

}

function createTable(group,id){

let table=document.getElementById(id)

if(!table) return

group.forEach(team=>{

let row=`
<tr>
<td>${team}</td>
<td>0</td>
<td>0</td>
<td>0</td>
<td>0</td>
<td>0</td>
<td>0</td>
<td>0</td>
<td>0</td>
</tr>
`

table.innerHTML+=row

})

}

createTable(groupA,"tableA")
createTable(groupB,"tableB")

function loadMatches(){

let div=document.getElementById("matches")

if(!div) return

matches.forEach(m=>{

div.innerHTML+=`<p>${m[0]} vs ${m[1]}</p>`

})

}

loadMatches()
