const groupA = [
"PALOPO FC",
"ARENAFC",
"ARSENAL",
"AYAM GEPREK FC",
"JURU KUNCI FC"
]

const groupB = [
"MANGGARAI RAYA",
"BANGKA NACAP FC",
"GAPURTO FC",
"PSCEWANG",
"PESONA FC"
]

let matches = [

{team1:"PALOPO FC",team2:"JURU KUNCI FC",score1:null,score2:null},
{team1:"ARENAFC",team2:"AYAM GEPREK FC",score1:null,score2:null},

{team1:"PALOPO FC",team2:"AYAM GEPREK FC",score1:null,score2:null},
{team1:"JURU KUNCI FC",team2:"ARSENAL",score1:null,score2:null},

{team1:"PALOPO FC",team2:"ARSENAL",score1:null,score2:null},
{team1:"AYAM GEPREK FC",team2:"ARENAFC",score1:null,score2:null},

{team1:"PALOPO FC",team2:"ARENAFC",score1:null,score2:null},
{team1:"ARSENAL",team2:"AYAM GEPREK FC",score1:null,score2:null},

{team1:"ARENAFC",team2:"JURU KUNCI FC",score1:null,score2:null},
{team1:"ARSENAL",team2:"PALOPO FC",score1:null,score2:null},

{team1:"MANGGARAI RAYA",team2:"PESONA FC",score1:null,score2:null},
{team1:"BANGKA NACAP FC",team2:"PSCEWANG",score1:null,score2:null},

{team1:"MANGGARAI RAYA",team2:"PSCEWANG",score1:null,score2:null},
{team1:"PESONA FC",team2:"GAPURTO FC",score1:null,score2:null},

{team1:"MANGGARAI RAYA",team2:"GAPURTO FC",score1:null,score2:null},
{team1:"PSCEWANG",team2:"BANGKA NACAP FC",score1:null,score2:null},

{team1:"MANGGARAI RAYA",team2:"BANGKA NACAP FC",score1:null,score2:null},
{team1:"GAPURTO FC",team2:"PESONA FC",score1:null,score2:null},

{team1:"PESONA FC",team2:"BANGKA NACAP FC",score1:null,score2:null},
{team1:"GAPURTO FC",team2:"PSCEWANG",score1:null,score2:null}

]

function createTable(group,tableId){

let table=document.getElementById(tableId)

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
let admin=document.getElementById("adminMatches")

matches.forEach((m,i)=>{

if(div){
div.innerHTML+=`
<p>${m.team1} vs ${m.team2}</p>
`
}

if(admin){

admin.innerHTML+=`
<p>
${m.team1}
<input id="s1${i}">
vs
<input id="s2${i}">
${m.team2}
</p>
`

}

})

}

loadMatches()

function saveScores(){

matches.forEach((m,i)=>{

let s1=document.getElementById("s1"+i).value
let s2=document.getElementById("s2"+i).value

m.score1=s1
m.score2=s2

})

alert("Skor berhasil disimpan!")

}
