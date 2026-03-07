<!DOCTYPE html>
<html>
<head>
<title>Manggarai Cup eFootball</title>

<style>

body{
font-family:Arial;
background:#0f172a;
color:white;
text-align:center;
}

h1{
color:#22c55e;
}

.container{
display:flex;
justify-content:center;
gap:50px;
flex-wrap:wrap;
}

table{
border-collapse:collapse;
background:#1e293b;
margin:10px;
}

th,td{
border:1px solid white;
padding:8px 12px;
}

th{
background:#22c55e;
}

input{
width:40px;
text-align:center;
}

button{
padding:10px 20px;
background:#22c55e;
border:none;
color:white;
font-size:16px;
cursor:pointer;
margin-top:10px;
}

</style>
</head>

<body>

<h1>🏆 MANGGARAI CUP EFOOTBALL</h1>
<p>Turnamen 2 Grup</p>

<div class="container">

<div>
<h2>GRUP A</h2>

<table id="tableA">
<tr>
<th>Tim</th>
<th>Main</th>
<th>Poin</th>
</tr>

<tr><td>ARENA FC</td><td>0</td><td>0</td></tr>
<tr><td>Ayam Geprek FC</td><td>0</td><td>0</td></tr>
<tr><td>BANGKA NACAP FC</td><td>0</td><td>0</td></tr>
<tr><td>GAPURTO FC</td><td>0</td><td>0</td></tr>
<tr><td>Macan Sangatta</td><td>0</td><td>0</td></tr>

</table>
</div>

<div>
<h2>GRUP B</h2>

<table id="tableB">
<tr>
<th>Tim</th>
<th>Main</th>
<th>Poin</th>
</tr>

<tr><td>MANGGARAI RAYA</td><td>0</td><td>0</td></tr>
<tr><td>Palopo FC</td><td>0</td><td>0</td></tr>
<tr><td>PESONA FC™</td><td>0</td><td>0</td></tr>
<tr><td>PS Cewang</td><td>0</td><td>0</td></tr>

</table>

</div>

</div>

<h2>📊 Input Skor Pertandingan</h2>

<table style="margin:auto">

<tr>
<th>Tim 1</th>
<th>Skor</th>
<th>Skor</th>
<th>Tim 2</th>
</tr>

<tr>
<td>ARENA FC</td>
<td><input id="s1"></td>
<td><input id="s2"></td>
<td>Ayam Geprek FC</td>
</tr>

<tr>
<td>BANGKA NACAP FC</td>
<td><input id="s3"></td>
<td><input id="s4"></td>
<td>GAPURTO FC</td>
</tr>

<tr>
<td>Palopo FC</td>
<td><input id="s5"></td>
<td><input id="s6"></td>
<td>PESONA FC™</td>
</tr>

</table>

<button onclick="updateScore()">Update Klasemen</button>

<h2>🏆 SEMIFINAL</h2>

<p id="semi1">Juara Grup A vs Runner Up Grup B</p>
<p id="semi2">Juara Grup B vs Runner Up Grup A</p>

<h2>🥇 FINAL</h2>

<p>Pemenang Semifinal 1 vs Pemenang Semifinal 2</p>

<script>

function updateScore(){

let s1=document.getElementById("s1").value
let s2=document.getElementById("s2").value

let table=document.getElementById("tableA")

if(s1>s2){
table.rows[1].cells[2].innerHTML=3
}

else if(s1<s2){
table.rows[2].cells[2].innerHTML=3
}

else{
table.rows[1].cells[2].innerHTML=1
table.rows[2].cells[2].innerHTML=1
}

}

</script>

</body>
</html>
