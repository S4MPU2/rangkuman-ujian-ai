{
  tag:'M6',
  title:'Beyond Classical Search',
  short:'Adversarial search (Minimax, α-β), Local search (Hill, SA, GA).',
  html:`<h3>Local Search</h3>
<p>Strategi yang <b>tidak menjelajah seluruh ruang</b> — hanya membutuhkan <b>state tujuan</b> (complete solution → <b>complete &amp; consistent</b>). Fokus perbaikan <b>solusi sementara</b>.</p>

<h4>1. Hill-Climbing (Greedy Local Search)</h4>
<ul>
  <li>Selalu bergerak ke neighbor dengan nilai <span class="kbd">h</span> terbaik saat itu.</li>
  <li>Analog: pendaki di tengah kabut — hanya bisa melihat langkah dekat, tak bisa muslihat jauh.</li>
</ul>
<div class="exam"><b>Simulasi 8-queens:</b><br>
Heuristik <span class="kbd">h</span> = jumlah pasangan queen yang <b>tidak saling serang</b>.<br>
Setiap putaran: hitung h tiap neighbor (ubah posisi 1 queen), pilih nilai tertinggi, berhenti bila tidak ada peningkatan.</div>

<h3>Kelemahan Hill-Climbing vs Solusi</h3>
<ul>
  <li><b>Local maxima</b>: terjebak nilai lokal — solution tidak terbaik <em>global</em>.</li>
  <li><b>Plateau/shoulder</b>: nilai sama — perlu <b>sideways move</b> (gerakan ke samping, batasi iterasi).</li>
</ul>
<div class="tip">Strategi perbaikan: <b>Stochastic Hill-Climbing</b> (pilih acak di antara candit), <b>Random Restart</b> (cari ulang dari awal; efektif untuk 8-queens).</div>

<h4>2. Simulated Annealing (SA)</h4>
<ul>
  <li>Terinspirasi <b>proses pemadatan logam</b>: dulu tinggi (acak), <b>temperatur menurun</b> → semakin selektif (stabil).</li>
  <li>Mengijinkan <b>solusi lebih buruk</b> dengan peluang (probabilitas) tertentu → keluar dari local optima.</li>
  <li><b>Alur:</b> Pilih neighbor random → hitung ΔE dan temperatur → terima jika lebih baik ATAU dengan probabilitas.</li>
  <li>Jika suhu menurun cukup lambat, SA cenderung memberi <b>optimum global</b>.</li>
  <li>Aplikasi: layout VLSI, penjadwalan pesawat/KAI.</li>
</ul>

<h4>3. Genetic Algorithm (GA)</h4>
<ul>
  <li>Berdasarkan <b>seleksi alam</b> pada <b>populasi state</b> (kromosom).</li>
  <li>Konsep: fitness → select parent → cross-over → mutation → populasi baru.</li>
</ul>
<ol>
  <li><b>Encoding:</b> representasi kromosom (string bit/angka).</li>
  <li><b>Initialization:</b> populasi awal acak.</li>
  <li><b>Fitness function:</b> ukur kualitas tiap kromosom.</li>
  <li><b>Selection:</b> pilih parent (fitness tinggi → peluang besar).</li>
  <li><b>Crossover:</b> kombinasi dua parent → anak baru.</li>
  <li><b>Mutation:</b> ubah kecil kromosom baru.</li>
  <li>Ulangi sampai solusi baik / iterasi habis.</li>
</ol>
<div class="tip"><b>Contoh 8-queens</b> pada GA:<br>
Kromosom = posisi 8 ratu (1 per kolom). Fitness = jumlah pasangan ratu <i>tidak saling serang</i>.<br>
Selection → 31%, 29%, 26%, 14% (probabilitas proporsional fitness); crossover: 32752411 + 24748552 → anak 32748552.</div>

<h3>Adversarial Search (Games)</h3>
<p>Environment kompetitif: <b>satu agen menang = agen lain kalah</b>. Perlu <b>perkiraan lawan</b> dan <b>pencarian sampai kedalaman tertentu</b>.</p>

<h4>Minimax</h4>
<ul>
  <li>Untuk game <b>deterministik 2-pemain</b>. Asumsikan lawan bermain optimal.</li>
  <li><b>MAX</b> (kita) maksimalkan nilai; <b>MIN</b> (lawan) minimalkan nilai.</li>
  <li><b>Sifat:</b> Complete (pohon terbatas) • Optimal (vs lawan terbaik) • Waktu O(b^m) • Ruang O(b·m).</li>
  <li>Di game besar (catur: b≈35, m≈100) eksplorasi penuh tak mungkin.</li>
</ul>

<h4>Alpha-Beta Pruning (α-β)</h4>
<ul>
  <li>Optimasi: <b>pangkas cabang</b> yang tidak mempengaruhi hasil.</li>
  <li><b>α</b> = batas terbaik untuk MAX; <b>β</b> = batas terbaik untuk MIN.</li>
  <li>Jika nilai node kurang dari α / lebih dari β → berhenti menjelajah cabang.</li>
  <li>Efektif dengan urutan langkah baik: <b>O(b^(m/2))</b> (perluasan 2x kedalaman).</li>
  <li>Hasil akhir <b>sama</b> dengan minimax, hanya lebih cepat.</li>
</ul>
<div class="warn">Ingat: <b>pruning tidak mengubah hasil akhir</b>, hanya mempercepat.</div>

<h4>Contoh nyata Game AI</h4>
<ul>
  <li><b>Chinook</b> (checkers): mengalahkan juara dunia Marion Tinsley (1994).</li>
  <li><b>Deep Blue</b> (catur): mengalahkan Garry Kasparov (1997), 200 juta posisi/detik.</li>
  <li><b>Go</b>: branch &gt; 300 → pakai pattern knowledge.</li>
  <li><b>AlphaZero</b>: menang di catur/Go/Shogi via self-play (modern reinforcement).</li>
</ul>
`}