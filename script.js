const PASSWORD = "admin123";

// ===== DATA =====
function getTeams() {
  return JSON.parse(localStorage.getItem("teams")) || [];
}

function saveTeams(data) {
  localStorage.setItem("teams", JSON.stringify(data));
}

// ===== LOGIN =====
function login() {
  let pass = document.getElementById("password").value;

  if (pass === PASSWORD) {
    document.getElementById("adminPanel").style.display = "block";
    loadTeams();
  } else {
    alert("Password salah!");
  }
}

// ===== TAMBAH TIM =====
function addTeam() {
  let name = document.getElementById("teamName").value;
  let group = document.getElementById("group").value;

  if (!name) return alert("Isi nama tim!");

  let teams = getTeams();

  teams.push({
    name,
    group,
    main: 0,
    win: 0,
    lose: 0,
    goal: 0,
    conceded: 0,
    diff: 0,
    point: 0
  });

  saveTeams(teams);
  loadTeams();

  alert("Tim ditambahkan!");
}

// ===== LOAD DROPDOWN =====
function loadTeams() {
  let teams = getTeams();

  let t1 = document.getElementById("team1");
  let t2 = document.getElementById("team2");

  if (!t1 || !t2) return;

  t1.innerHTML = "";
  t2.innerHTML = "";

  teams.forEach(t => {
    let opt1 = new Option(t.name, t.name);
    let opt2 = new Option(t.name, t.name);

    t1.add(opt1);
    t2.add(opt2);
  });
}

// ===== INPUT SKOR =====
function saveScore() {
  let team1Name = document.getElementById("team1").value;
  let team2Name = document.getElementById("team2").value;
  let s1 = parseInt(document.getElementById("score1").value);
  let s2 = parseInt(document.getElementById("score2").value);

  let teams = getTeams();

  let t1 = teams.find(t => t.name === team1Name);
  let t2 = teams.find(t => t.name === team2Name);

  if (!t1 || !t2) return alert("Tim tidak ditemukan!");

  t1.main++;
  t2.main++;

  t1.goal += s1;
  t1.conceded += s2;
  t2.goal += s2;
  t2.conceded += s1;

  t1.diff = t1.goal - t1.conceded;
  t2.diff = t2.goal - t2.conceded;

  if (s1 > s2) {
    t1.win++;
    t2.lose++;
    t1.point += 3;
  } else if (s2 > s1) {
    t2.win++;
    t1.lose++;
    t2.point += 3;
  }

  saveTeams(teams);

  alert("Skor disimpan!");
}

// ===== RENDER KLASMEN =====
function renderTable() {
  let data = getTeams();

  let groupA = data.filter(t => t.group === "A");
  let groupB = data.filter(t => t.group === "B");

  groupA.sort((a,b) => b.point - a.point || b.diff - a.diff || b.goal - a.goal);
  groupB.sort((a,b) => b.point - a.point || b.diff - a.diff || b.goal - a.goal);

  function draw(id, group) {
    let html = `
    <tr>
    <th>Tim</th><th>M</th><th>W</th><th>L</th>
    <th>GM</th><th>GK</th><th>SG</th><th>Poin</th>
    </tr>`;

    group.forEach((t, i) => {
      let cls = i===0?"top1":i===1?"top2":i===2?"top3":"";
      html += `
      <tr class="${cls}">
        <td>${t.name}</td>
        <td>${t.main}</td>
        <td>${t.win}</td>
        <td>${t.lose}</td>
        <td>${t.goal}</td>
        <td>${t.conceded}</td>
        <td>${t.diff}</td>
        <td>${t.point}</td>
      </tr>`;
    });

    document.getElementById(id).innerHTML = html;
  }

  if (document.getElementById("groupA")) {
    draw("groupA", groupA);
    draw("groupB", groupB);
  }
}

renderTable();
