function loadAdminMatches(){

let div=document.getElementById("adminMatches")
if(!div) return

div.innerHTML=""

let index=0

for(let g in schedule){

div.innerHTML += `<h2 class="group-title">🏆 Grup ${g}</h2>`

schedule[g].forEach(w=>{

div.innerHTML += `<h3 class="week">📅 ${w.week}</h3>`

w.matches.forEach(m=>{

let s1=scores[index]?.[0] ?? ""
let s2=scores[index]?.[1] ?? ""

div.innerHTML += `

<div class="match-card">

<div class="team">${m[0]}</div>

<input class="score" id="s1${index}" value="${s1}">

<span class="vs">vs</span>

<input class="score" id="s2${index}" value="${s2}">

<div class="team">${m[1]}</div>

</div>

`

index++

})

div.innerHTML += `<p>${w.bye} (Libur)</p>`

})

}

}
