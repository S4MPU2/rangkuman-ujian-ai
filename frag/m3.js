{
  tag:'M3',
  title:'Problem Solving & Searching',
  short:'Logika, problem solving agent, state space, cara ukur pencarian.',
  html:`<h3>Logika = Dasar Penalaran</h3>
<ul>
  <li><b>Logika</b> = bahasa formal untuk menyimpan aturan &amp; validasi kesimpulan, lalu inferensi.</li>
  <li>Bi-conditional tdk diuji detail; <b>fokus</b>: logika membantu agent untuk <b>menalar terkontrol</b> (aturan, validasi, constraint).</li>
  <li>Aturan modern: <span class="kbd">IF confidence &lt; X THEN human-verification</span>, <span class="kbd">IF stale THEN do-not-recommend</span>.</li>
</ul>

<h3>Problem Solving Agent</h3>
<ul>
  <li>Intelligent agent otomatis yang: <b>mendefinisikan tujuan → representasikan masalah → mencari solusi (urutan aksi)</b>.</li>
  <li>Goal terhubung ke aksi/rencana; agent berlogika untuk mencapai goal.</li>
</ul>

<h3>6 Komponen Masalah</h3>
<table>
  <tr><th>#</th><th>Komponen</th><th>Maksud</th></tr>
  <tr><td>1</td><td><b>Initial state</b></td><td>Kondisi awal sebelum solusi</td></tr>
  <tr><td>2</td><td><b>Goal state</b></td><td>Kondisi tujuan yang ingin dicapai</td></tr>
  <tr><td>3</td><td><b>State space</b></td><td>Semua kemungkinan keadaan yang bisa dicapai</td></tr>
  <tr><td>4</td><td><b>Actions/operators</b></td><td>Langkah yang bisa diambil</td></tr>
  <tr><td>5</td><td><b>Transition model</b></td><td>Efek aksi: mengubah state menjadi state baru</td></tr>
  <tr><td>6</td><td><b>Path cost</b></td><td>Total bobot aksi menuju goal (jarak/waktu/energi/risk)</td></tr>
</table>

<div class="warn"><b>Contoh</b> (dikecilkan, biar mud diuji):<br>
Robot rumah→kampus: <b>init</b>=di rumah, <b>goal</b>=di kampus, <b>aksi</b>=keluar/jalan/naik motor,<br>
<b>transisi</b>=posisi berubah, <b>path cost</b>=jarak+waktu+uang.<br>
- Task agent modern: init=belum tahu jawaban, goal=ringkasan berbasis sumber, aksi=search/open/summarize/save.
</div>

<h3>Searching</h3>
<ul>
  <li><b>Searching</b> = mencari <b>urutan aksi</b> dari initial state ke goal state dengan menjelajahi <b>state space</b>.</li>
  <li>Di balik layar: setiap state = <b>node</b>, aksi = <b>edge</b>, biaya = <b>path cost</b>, berhenti saat <b>goal test</b>.</li>
  <li><b>Search strategy</b> = algoritma yang dipakai agent untuk menemukan solusi.</li>
</ul>
<div class="tip">Pemetaan dunia nyata: <b>Node</b>=lokasi/konfig/status • <b>Edge</b>=aksi •
<b>Cost</b>=waktu/jarak/energi/uang/risk • <b>Goal test</b>=syarat berhenti.</div>

<h3>5 Strategi Pencarian (Bedakan betul!)</h3>
<table>
  <tr><th>#</th><th>Strategi</th><th>Ciri utama</th><th>Contoh</th></tr>
  <tr><td>1</td><td><b>Uninformed (blind)</b></td><td>Tanpa info tambahan; coba-coba</td><td>BFS, DFS, UCS, DLS, IDS</td></tr>
  <tr><td>2</td><td><b>Informed (heuristic)</b></td><td>Pakai heuristik <span class="kbd">h(n)</span> untuk cepat</td><td>Greedy, Best-First, A*</td></tr>
  <tr><td>3</td><td><b>Local search</b></td><td>Perbaiki solusi sementara (path irrelevant)</td><td>Hill climbing, GA, Simulated Annealing</td></tr>
  <tr><td>4</td><td><b>Adversarial</b></td><td>Lingkungan kompetitif, agen berlawanan</td><td>Minimax, Alpha-Beta</td></tr>
  <tr><td>5</td><td><b>CSP</b></td><td>Tujuan: penuhi semua constraint</td><td>Backtracking, FC, AC</td></tr>
</table>

<h3>4 Kriteria Ukur Performa</h3>
<table>
  <tr><th>Kriteria</th><th>Arti</th></tr>
  <tr><td><b>Completeness</b></td><td>Menemukan solusi jika memang ada?</td></tr>
  <tr><td><b>Optimality</b></td><td>Menemukan solusi <b>terbaik</b>?</td></tr>
  <tr><td><b>Time complexity</b></td><td>Node/langkah dieksplorasi (big-O dengan <span class="kbd">b</span>=cabang, <span class="kbd">d</span>=kedalaman solusi, <span class="kbd">m</span>=kedalaman maks)</td></tr>
  <tr><td><b>Space complexity</b></td><td>Memori yang dibutuhkan</td></tr>
</table>

<h3>Perbandingan Cepat</h3>
<table>
  <tr><th>Algoritma</th><th>Complete?</th><th>Optimal?</th><th>Catatan</th></tr>
  <tr><td>BFS</td><td class="yes">Ya (b terbatas)</td><td class="yes">Ya (cost sama)</td><td>Solusi terpendek, tapi boros memori</td></tr>
  <tr><td>DFS</td><td class="no">Tidak</td><td class="no">Tidak</td><td>Hemat memori, bisa terjebak tak hingga</td></tr>
  <tr><td>UCS</td><td class="yes">Ya</td><td class="yes">Ya (cost min)</td><td>Cocok cost berbeda</td></tr>
  <tr><td>Greedy</td><td class="yes">Ya*</td><td class="no">Tidak selalu</td><td>Cepat, bisa terjebak lokal</td></tr>
  <tr><td>A*</td><td class="yes">Ya</td><td class="yes">Ya (jika admissible)</td><td>Paling optimal, tapi boros memori</td></tr>
</table>

<div class="exam"><b>Soal ujian populer:</b> “Jelaskan state space, initial &amp; goal state dari kasus X”
→ hafalkan 6 komponen + contoh robot.</div>
`}