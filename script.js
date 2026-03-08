const password="admin123"

function login(){

let p=document.getElementById("pass").value

if(p===password){
document.getElementById("panel").style.display="block"
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

const schedule={

A:[
{week:"Pekan 1",matches:[["PALOPO FC","JURU KUNCI FC"],["ARENAFC","AYAM GEPREK FC"]],bye:"ARSENAL"},
{week:"Pekan 2",matches:[["PALOPO FC","AYAM GEPREK FC"],["JURU KUNCI FC","ARSENAL"]],bye:"ARENAFC"},
{week:"Pekan 3",matches:[["PALOPO FC","ARSENAL"],["AYAM GEPREK FC","ARENAFC"]],bye:"JURU KUNCI FC"},
{week:"Pekan 4",matches:[["PALOPO FC","ARENAFC"],["ARSENAL","AYAM GEPREK FC"]],bye:"JURU KUNCI FC"},
{week:"Pekan 5",matches:[["ARENAFC","JURU KUNCI FC"],["ARSENAL","PALOPO FC"]],bye:"AYAM GEPREK FC"}
],

B:[
{week:"Pekan 1",matches:[["MANGGARAI RAYA","PESONA FC"],["BANGKA NACAP FC","PSCEWANG"]],bye:"GAPURTO FC"},
{week:"Pekan 2",matches:[["MANGGARAI RAYA","PSCEWANG"],["PESONA FC","GAPURTO FC"]],bye:"BANGKA NACAP FC"},
{week:"Pekan 3",matches:[["MANGGARAI RAYA","GAPURTO FC"],["PSCEWANG","BANGKA NACAP FC"]],bye:"PESONA FC"},
{week:"Pekan 4",matches:[["MANGGARAI RAYA","BANGKA NACAP FC"],["GAPURTO FC","PESONA FC"]],bye:"PSCEWANG"},
{week:"Pekan 5",matches:[["PESONA FC","BANGKA NACAP FC"],["GAPURTO FC","PSCEWANG"]],bye:"MANGGARAI RAYA"}
]

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

for(let g in schedule){

div.innerHTML+=`<h3>Grup ${g}</h3>`

schedule[g].forEach(w=>{

div.innerHTML+=`<h4>${w.week}</h4>`

w.matches.forEach(m=>{

div.innerHTML+=`<p>${m[0]} vs ${m[1]}</p>`

})

div.innerHTML+=`<p><i>${w.bye} (Libur)</i></p>`

})

}

}

loadMatches()

function loadAdminMatches(){

let div=document.getElementById("adminMatches")

let i=0

for(let g in schedule){

schedule[g].forEach(w=>{

w.matches.forEach(m=>{

div.innerHTML+=`
<p>
${m[0]}
<input id="s1${i}">
vs
<input id="s2${i}">
${m[1]}
</p>
`

i++

})

})

}

}

function saveScores(){

let scores=[]
let inputs=document.querySelectorAll("input")

inputs.forEach(i=>{

scores.push(i.value)

})

localStorage.setItem("scores",JSON.stringify(scores))

alert("Skor disimpan!")

}
