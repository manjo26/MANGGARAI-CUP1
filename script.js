const passwordAdmin = "12345";

let teams = JSON.parse(localStorage.getItem("teams")) || {

"PALOPO FC":{group:"A",m:0,w:0,d:0,l:0,gf:0,ga:0,p:0},
"JURU KUNCI FC":{group:"A",m:0,w:0,d:0,l:0,gf:0,ga:0,p:0},
"ARENA FC":{group:"A",m:0,w:0,d:0,l:0,gf:0,ga:0,p:0},
"AYAM GEPREK FC":{group:"A",m:0,w:0,d:0,l:0,gf:0,ga:0,p:0},
"ARSENAL":{group:"A",m:0,w:0,d:0,l:0,gf:0,ga:0,p:0},

"MANGGARAI RAYA":{group:"B",m:0,w:0,d:0,l:0,gf:0,ga:0,p:0},
"PESONA FC":{group:"B",m:0,w:0,d:0,l:0,gf:0,ga:0,p:0},
"BANGKA NACAP FC":{group:"B",m:0,w:0,d:0,l:0,gf:0,ga:0,p:0},
"PSCEWANG":{group:"B",m:0,w:0,d:0,l:0,gf:0,ga:0,p:0},
"GAPURTO FC":{group:"B",m:0,w:0,d:0,l:0,gf:0,ga:0,p:0}

};

function save(){
localStorage.setItem("teams",JSON.stringify(teams));
}

function login(){

let pass=document.getElementById("password").value;

if(pass==="12345"){

document.getElementById("loginBox").style.display="none";
document.getElementById("adminPanel").style.display="block";

loadTeams();

}else{

alert("Password salah");

}

}

function loadTeams(){

let team1=document.getElementById("team1");
let team2=document.getElementById("team2");

team1.innerHTML="";
team2.innerHTML="";

for(let t in teams){

let o1=document.createElement("option");
o1.value=t;
o1.text=t;

let o2=document.createElement("option");
o2.value=t;
o2.text=t;

team1.appendChild(o1);
team2.appendChild(o2);

}

}

function saveScore(){

let t1=document.getElementById("team1").value;
let t2=document.getElementById("team2").value;

let s1=parseInt(document.getElementById("score1").value);
let s2=parseInt(document.getElementById("score2").value);

if(t1===t2){
alert("Tim tidak boleh sama");
return;
}

teams[t1].m++;
teams[t2].m++;

teams[t1].gf+=s1;
teams[t1].ga+=s2;

teams[t2].gf+=s2;
teams[t2].ga+=s1;

if(s1>s2){
teams[t1].w++;
teams[t2].l++;
teams[t1].p+=3;
}
else if(s2>s1){
teams[t2].w++;
teams[t1].l++;
teams[t2].p+=3;
}
else{
teams[t1].d++;
teams[t2].d++;
teams[t1].p+=1;
teams[t2].p+=1;
}

save();

alert("Skor disimpan");

}

function render(){

let tableA=document.querySelector("#tableA tbody");
let tableB=document.querySelector("#tableB tbody");

if(!tableA) return;

tableA.innerHTML="";
tableB.innerHTML="";

let groupA=Object.entries(teams)
.filter(t=>t[1].group==="A")
.sort((a,b)=>b[1].p-a[1].p);

let groupB=Object.entries(teams)
.filter(t=>t[1].group==="B")
.sort((a,b)=>b[1].p-a[1].p);

groupA.forEach(t=>{
tableA.innerHTML+=`
<tr>
<td>${t[0]}</td>
<td>${t[1].m}</td>
<td>${t[1].w}</td>
<td>${t[1].d}</td>
<td>${t[1].l}</td>
<td>${t[1].gf}</td>
<td>${t[1].ga}</td>
<td>${t[1].p}</td>
</tr>`;
});

groupB.forEach(t=>{
tableB.innerHTML+=`
<tr>
<td>${t[0]}</td>
<td>${t[1].m}</td>
<td>${t[1].w}</td>
<td>${t[1].d}</td>
<td>${t[1].l}</td>
<td>${t[1].gf}</td>
<td>${t[1].ga}</td>
<td>${t[1].p}</td>
</tr>`;
});

}

render();
