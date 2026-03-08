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

let scores=JSON.parse(localStorage.getItem("scores")) || []

function loadAdminMatches(){

let div=document.getElementById("adminMatches")
if(!div) return

let index=0

for(let g in schedule){

div.innerHTML+=`<h2>Grup ${g}</h2>`

schedule[g].forEach(w=>{

div.innerHTML+=`<h3>${w.week}</h3>`

w.matches.forEach(m=>{

let s1=scores[index]?.[0] ?? ""
let s2=scores[index]?.[1] ?? ""

div.innerHTML+=`

<div class="match">

<span>${m[0]}</span>

<input id="s1${index}" value="${s1}">

<span>vs</span>

<input id="s2${index}" value="${s2}">

<span>${m[1]}</span>

</div>

`

index++

})

})

}

}

function saveScores(){

scores=[]

let i=0

for(let g in schedule){

schedule[g].forEach(w=>{

w.matches.forEach(()=>{

let s1=document.getElementById("s1"+i).value
let s2=document.getElementById("s2"+i).value

scores.push([Number(s1),Number(s2)])

i++

})

})

}

localStorage.setItem("scores",JSON.stringify(scores))

alert("Skor disimpan!")

location.reload()

}

function showSemifinal(){

let semi=document.getElementById("semi")

if(!semi) return

semi.innerHTML=`
<p>Juara Grup A vs Runner-up Grup B</p>
<p>Juara Grup B vs Runner-up Grup A</p>
`

}

showSemifinal()

function showFinal(){

let final=document.getElementById("final")

if(!final) return

final.innerHTML=`<p>Pemenang Semifinal 1 vs Pemenang Semifinal 2</p>`

}

showFinal()
