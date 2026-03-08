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
{week:"Pekan 1",matches:[["PALOPO FC","JURU KUNCI FC"],["ARENAFC","AYAM GEPREK FC"]]},
{week:"Pekan 2",matches:[["PALOPO FC","AYAM GEPREK FC"],["JURU KUNCI FC","ARSENAL"]]},
{week:"Pekan 3",matches:[["PALOPO FC","ARSENAL"],["AYAM GEPREK FC","ARENAFC"]]},
{week:"Pekan 4",matches:[["PALOPO FC","ARENAFC"],["ARSENAL","AYAM GEPREK FC"]]},
{week:"Pekan 5",matches:[["ARENAFC","JURU KUNCI FC"],["ARSENAL","PALOPO FC"]]}
],

B:[
{week:"Pekan 1",matches:[["MANGGARAI RAYA","PESONA FC"],["BANGKA NACAP FC","PSCEWANG"]]},
{week:"Pekan 2",matches:[["MANGGARAI RAYA","PSCEWANG"],["PESONA FC","GAPURTO FC"]]},
{week:"Pekan 3",matches:[["MANGGARAI RAYA","GAPURTO FC"],["PSCEWANG","BANGKA NACAP FC"]]},
{week:"Pekan 4",matches:[["MANGGARAI RAYA","BANGKA NACAP FC"],["GAPURTO FC","PESONA FC"]]},
{week:"Pekan 5",matches:[["PESONA FC","BANGKA NACAP FC"],["GAPURTO FC","PSCEWANG"]]}
]

}

let scores=JSON.parse(localStorage.getItem("scores")) || []

function loadAdminMatches(){

let div=document.getElementById("adminMatches")
if(!div) return

div.innerHTML=""

let index=0

for(let g in schedule){

div.innerHTML+=`<h2>🏆 Grup ${g}</h2>`

schedule[g].forEach(w=>{

div.innerHTML+=`<h3>📅 ${w.week}</h3>`

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

function createTeam(name){

return{
name:name,
P:0,W:0,D:0,L:0,GF:0,GA:0,GD:0,PTS:0
}

}

function calculateGroup(groupTeams,startIndex){

let teams=groupTeams.map(createTeam)

let index=startIndex

schedule[startIndex===0?"A":"B"].forEach(w=>{

w.matches.forEach(m=>{

let s=scores[index]

if(s){

let t1=teams.find(t=>t.name===m[0])
let t2=teams.find(t=>t.name===m[1])

t1.P++
t2.P++

t1.GF+=s[0]
t1.GA+=s[1]

t2.GF+=s[1]
t2.GA+=s[0]

if(s[0]>s[1]){
t1.W++
t2.L++
t1.PTS+=3
}
else if(s[0]<s[1]){
t2.W++
t1.L++
t2.PTS+=3
}
else{
t1.D++
t2.D++
t1.PTS++
t2.PTS++
}

}

index++

})

})

teams.forEach(t=>t.GD=t.GF-t.GA)

teams.sort((a,b)=>b.PTS-a.PTS || b.GD-a.GD)

return teams

}

function renderTable(id,teams){

let table=document.getElementById(id)

if(!table) return

teams.forEach(t=>{

table.innerHTML+=`
<tr>
<td>${t.name}</td>
<td>${t.P}</td>
<td>${t.W}</td>
<td>${t.D}</td>
<td>${t.L}</td>
<td>${t.GF}</td>
<td>${t.GA}</td>
<td>${t.GD}</td>
<td>${t.PTS}</td>
</tr>
`

})

}

let groupAResult=calculateGroup(groupA,0)
let groupBResult=calculateGroup(groupB,10)

renderTable("tableA",groupAResult)
renderTable("tableB",groupBResult)

function showSemifinal(){

let semi=document.getElementById("semi")
if(!semi) return

let A1=groupAResult[0].name
let A2=groupAResult[1].name

let B1=groupBResult[0].name
let B2=groupBResult[1].name

semi.innerHTML=`
<p>${A1} vs ${B2}</p>
<p>${B1} vs ${A2}</p>
`

}

showSemifinal()
