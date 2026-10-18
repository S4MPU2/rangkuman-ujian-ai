{
  tag:'M4',
  title:'Metode Searching',
  short:'BFS, DFS, UCS, IDS, GBFS, A* - karakteristik, tabel, contoh.',
  html:`<h3>Uninformed Search (Blind Search)</h3>
<p>Tidak ada pengetahuan tambahan selain definisi masalah → pencarian seperti “coba-coba”.</p>

<h4>1. Breadth-First Search (BFS)</h4>
<ul>
  <li>Jelajahi <b>level demi level</b> dari akar sampai ketemu goal.</li>
  <li>Implementasi: queue; simpan semua node level sebelum turun.</li>
  <li><b>Sifat:</b> ✅ Complete (b terbatas) ✅ Optimal (biaya sama) ❌ Boros ruang (O(b^d)).</li>
  <li><b>Rute:</b> A→C→F→D→B→E→G (level per level).</li>
</ul>
<div class="tip">Komentar: <b>BFS selalu menemukan solusi terpendek</b> jika semua langkah punya biaya seragam.</div>

<h4>2. Depth-First Search (DFS)</h4>
<ul>
  <li>Jelajahi <b>mendalam satu jalur</b> hingga ujung pohon, baru <b>backtrack</b> untuk cabang lain.</li>
  <li>Implementasi: stack; tidak perlu menyimpan semua level.</li>
  <li><b>Sifat:</b> ❌ Tidak Complete (terjebak tak hingga) ❌ Tidak Optimal. Hemat memori.</li>
  <li><b>Rute:</b> A→B→E→F→C→D→G (dalam panduan).</li>
</ul>

<h4>3. Uniform Cost Search (UCS)</h4>
<ul>
  <li>Pilih node dengan <b>biaya kumulatif terkecil</b> (bukan hanya langkah).</li>
  <li>Implementasi: priority queue (frontier) urutakan berdasarkan total cost g(n).</li>
  <li><b>Sifat:</b> ✅ Complete ✅ Optimal (cost minimum).</li>
  <li><b>Rute:</b> A → B(2) → E(3) → G(6) menggunakan cost tiap tepi.</li>
</ul>

<h4>4. Depth-Limited Search (DLS)</h4>
<ul>
  <li>VARIAN DFS dengan <b>batas kedalaman L</b>. Jika melewati L, <b>backtrack</b>.</li>
  <li><b>Sifat:</b> ❌ Tidak Complete (solusi mungkin di level > L). Hemat memori.</li>
</ul>

<h4>5. Iterative Deepening Search (IDS) / Illuminated DFS</h4>
<ul>
  <li>Gabungan: lakukan DLS berulang dengan L=1,2,3,… sampai ketemu solusi.</li>
  <li><b>Sifat:</b> ✅ Complete ✅ Optimal (jika cost per langkah sama) • Seperti DFS ruang).
</ul>
<p>Keuntungan: kompleksitas waktu serupa DFS, tapi memiliki keunggulan BFS.</p>

<h3>Informed Search (Heuristic Search)</h3>
<p>Gunakan <span class="kbd">h(n)</span> = estimasi biaya jarak ke goal untuk mempercepat pencarian.</p>

<h4>Greedy Best-First Search (GBFS)</h4>
<ul>
  <li>Pilih node berikutnya dengan <span class="kbd">h(n)</span> terkecil (k liat goal).</li>
  <li><b>Sifat:</b> ✅ Complete (b terbatas) ❌ Tidak optimal (terjebak jalur kelihatan dekat tapi panjang).</li>
  <li>Eksponensial; sangat cepat tapi tidak menjamin solusi terbaik.</li>
  <li><b>Contoh:</b> Rute Bandung→Yogyakarta via Tasikmalaya→Purwokerto→Kebumen (bukan rute paling cepat).</li>
</ul>
<div class="warn">⚠️ Sering kali GBFS tercekik di “dead end” karena hanya panduan visual.</div>

<h4>A* Search (A-star)</h4>
<ul>
  <li>Gabungkan: <span class="kbd">f(n) = g(n) + h(n)</span>
    <ul><li><span class="kbd">g(n)</span>: biaya nyata dari start ke node.</li><li><span class="kbd">h(n)</span>: estimasi ke goal (heuristik).</li></ul>
  </li>
  <li><b>Sifat:</b> ✅ Complete ✅ Optimal (jika <span class="kbd">h(n)</span> admissible, tidak lebih →).
  </li>
  <li>Kompleksitas: waktu tergantung heuristik, ruang: O(b^d) — menyimpan semua node terbuka.</li>
  <li><b>Contoh nyata:</b> Rute jalan Bandung→Yogyakarta Optimal 328 km via IDS/UCS/GBFS/A*.
</ul>
<div class="tip">Intuisi A* = UCS + “petunjuk arah”. Semakin akurat h(n), semakin cepat.</div>

<h3>Tabel Perbandingan (Ganti-kapasitas-hafalan)</h3>
<table>
  <tr><th>Algoritma</th><th>Complete</th><th>Optimal</th><th>Time</th><th>Space</th><th>Catatan</th></tr>
  <tr><td>BFS</td><td class="yes">Ya (b ≤)</td><td class="yes">Ya (cost =)</td><td>O(b^d)</td><td>O(b^d)</td><td>Solusi terpendek, muter-muter</td></tr>
  <tr><td>DFS</td><td class="no">Tidak</td><td class="no">Tidak</td><td>O(b^m)</td><td>O(b·m)</td><td>Hemat ruang, sering kelaparan</td></tr>
  <tr><td>UCS</td><td class="yes">Ya</td><td class="yes">Ya</td><td>O(b^C)</td><td>O(b^C)</td><td>Untuk edge cost ≠ 1</td></tr>
  <tr><td>GBFS</td><td class="yes">Ya*</td><td class="no">Tidak</td><td>O(b^m)</td><td>O(b^m)</td><td>Cepat tapi biasa tidak optimal</td></tr>
  <tr><td>A*</td><td class="yes">Ya</td><td class="yes">Ya (admissible)</td><td>O(b^d)</td><td>O(b^d)</td><td>Paling kuat, tapi butuh memori besar</td></tr>
</table>

<div class="exam"><b>Tips ujian:</b> Selalu sebutkan tiga hal bila bandingkan algoritma:
  <ol><li>Completeness/optimalitas</li><li>Kompleksitas waktu &amp; ruang</li><li>Ketentuan (kapan pakai, kapan tidak)</li></ol>
</div>
`}