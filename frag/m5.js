{
  tag:'M5',
  title:'Constraint Satisfaction Problem (CSP)',
  short:'Komponen CSP, backtracking, heuristik, AC-3.',
  html:`<h3>Apa itu CSP?</h3>
<p><b>CSP</b> = model AI dalam bentuk <b>pencarian problem</b> di mana solusinya harus memenuhi <b>variabel + domain + constraint</b>.</p>
<p>Bedanya dengan standard search: fokus pada <b>assignment nilai</b> yang valid, <b>bukan path dari initial→goal</b>. <em>Path irrelevant</em>.</p>

<h3>3 Komponen CSP</h3>
<table>
  <tr><th>#</th><th>Komponen</th><th>Arti</th><th>Contoh (map coloring)</th></tr>
  <tr><td>1</td><td><b>Variabel (X)</b></td><td>Sesuatu yang harus diberi nilai</td><td>Setiap daerah {WA, NT, Q, NSW, SA, V, T}</td></tr>
  <tr><td>2</td><td><b>Domain (D)</b></td><td>Himpunan nilai yang mungkin</td><td>3 warna {Red, Green, Blue}</td></tr>
  <tr><td>3</td><td><b>Constraint (C)</b></td><td>Aturan/batasan kombinasi</td><td>Daerah bertetangga warna berbeda</td></tr>
</table>
<p><b>Solusi CSP</b> = complete &amp; consistent assignment (setiap variabel punya nilai, semua constraint terpenuhi).</p>

<h3>CSP vs Standard Search</h3>
<table>
  <tr><th>Aspek</th><th>Standard Search</th><th>CSP</th></tr>
  <tr><td>Makna</td><td>Jalur dari initial → goal</td><td>Penugasan nilai variabel</td></tr>
  <tr><td>Solusi</td><td>Path (sequence of actions)</td><td>Assignment (setiap variabel)</td></tr>
  <tr><td>Heuristik</td><td>Penting (mis. A*)</td><td>Terdapat (MRV, Degree), tapi intinya <b>constraint checking</b></td></tr>
</table>

<h3>Backtracking Search = DFS untuk CSP</h3>
<p>Menyusun nilai variabel satu per satu (depth-first), mundur jika buntu.</p>
<ol>
  <li>Berikan nilai satu variabel (acak/urut).</li>
  <li>Periksa constraint → konsisten lanjut ke variabel berikutnya; tidak konsisten coba nilai lain.</li>
  <li>Jika tidak ada nilai yang cocok → <b>backtrack</b> ke variabel sebelumnya.</li>
  <li>Ulangi sampai semua variabel terisi valid atau terbukti tak ada solusi.</li>
</ol>
<div class="tip">Karena kompleksitasnya eksponensial O(d^n), <b>penting optimasi</b>.</div>

<h3>Heuristik Backtracking (hafalkan urutan dan maknanya)</h3>
<ol>
  <li><b>MRV (Minimum Remaining Values):</b> Pilih variabel dengan <b>domain tersisa paling sedikit</b> (fail-fast).</li>
  <li><b>Degree Heuristic:</b> Jika seri MRV, pilih variabel yang <b>memengaruhi paling banyak</b> variabel lain (tie-break).</li>
  <li><b>LCV (Least Constraining Value):</b> Pilih nilai yang <b>paling sedikit membatasi</b> variabel lain.</li>
</ol>

<h3>Propagasi Constraint (pemangkin ruang pencarian)</h3>
<ul>
  <li><b>Node consistency:</b> nilai variabel konsisten dengan <em>unary</em> constraint.</li>
  <li><b>Arc consistency:</b> nilai variabel konsisten dengan <em>binary</em> constraint.</li>
  <li><b>Path consistency:</b> konsisten dengan implisit 3-variabel.</li>
  <li><b>k-Consistency:</b> konsisten dengan <em>higher-order</em> constraint.</li>
</ul>

<h4>Forward Checking</h4>
<ul><li>Memantau <b>domain yang tersisa</b> pada variabel yang belum diisi.</li><li><b>Berhenti</b> jika variabel kehabatan nilai legal.</li></ul>

<h4>Arc Consistency (AC-3)</h4>
<ul>
<li>Buat <b>antrian arc</b>; pop tiap arc (X,Y), hapus nilai X tak punya pasangan valid Y.</li>
<li>Jika domain X berubah, masukkan arc (Z,X) kembali — <b>propagasi</b>.</li>
<li><b>Deteksi dini kegagalan</b> lebih cepat dibanding forward checking.</li>
</ul>
<div class="warn">🔄 <b>Urutan biasanya:</b> Pilih variabel (MRV→Degree) → Pilih nilai (LCV) → Cek constraint (Forward Checking) → Akibatkan (AC-3).</div>

<h3>Contoh Kasus nyata</h3>
<ul>
  <li><b>Penjadwalan kuliah</b>: var=waktu, domain=slot, constraint=dosen/ruangan tak bentrok.</li>
  <li><b>Warna peta (Sudoku/N-Queens)</b>: angka 1-9 tak bertemu di baris/kolom/blok.</li>
  <li><b>Alokasi sumber daya</b>: pekerja tidak boleh kerja ganda.</li>
  <li><b>Rute bus</b>: kapasitas jalan tidak boleh berlebih.</li>
  <li><b>Spesifikasi konfigurasi</b>: CPU kompatibel dengan motherboard.</li>
</ul>

<div class="exam">
Soal klasik: "Kenapa Arc Consistency penting?"<br>
→ <b>Membantu mendeteksi kegagalan lebih awal</b> dan memangkas ruang pencarian ekstrim.
</div>
`}