{
  tag:'M8',
  title:'Pembahasan UTS 24-25 (Lengkap)',
  short:'Soal UTS semester lalu + pembahasan detail: PG, Genetic Algorithm, CSP, Rule-Based.',
  html:`<div class="exam"><b>Info UTS 24-25.</b> IF3111 Inteligensi Buatan · 14 Oktober 2024 · Open Sheet · 120 menit · Dosen: Meida Cahyo Untoro / Andika Setiawan. Terdiri dari 10 soal PG (30 poin) + 3 soal essay (70 poin).</div>

<h3>Bagian 1 — Pilihan Ganda (30 poin)</h3>

<p><b>Soal 1.</b> Berikut ini yang tidak mencerminkan karakteristik AI berdasarkan definisi AI adalah...</p>
<ul>
  <li>a. Thinking humanly &nbsp; b. Thinking rationally &nbsp; c. Acting rationally &nbsp; <b>d. Acting generally</b> &nbsp; e. Acting humanly</li>
</ul>
<div class="tip"><b>Jawaban: d.</b> Definisi AI hanya dikenal 4 pendekatan (thinking/acting, humanly/rationally). "Acting generally" bukan istilah yang dikenal dalam definisi AI.</div>

<p><b>Soal 2.</b> Pada gambar arsitektur agen (lingkungan → percepts → agen → aksi), aspek yang menjadi media penerima informasi dari lingkungan adalah...</p>
<ul>
  <li>a. Actuator &nbsp; b. Effector &nbsp; <b>c. Sensor</b> &nbsp; d. Environment &nbsp; e. Agent program</li>
</ul>
<div class="tip"><b>Jawaban: c. Sensor.</b> Sensor = komponen penerima percepts (input) dari lingkungan. Actuator/effector justru mengeluarkan aksi ke lingkungan.</div>

<p><b>Soal 3.</b> Turing Test merupakan salah satu bentuk pendekatan yang membuktikan kecerdasan buatan pada sifat...</p>
<ul>
  <li>a. Thinking humanly &nbsp; b. Thinking rationally &nbsp; c. Acting rationally &nbsp; d. Acting generally &nbsp; <b>e. Acting humanly</b></li>
</ul>
<div class="tip"><b>Jawaban: e. Acting humanly.</b> Turing Test menguji apakah mesin dapat <i>bertindak/berperilaku</i> sehingga tidak dibedakan dari manusia — bukan membuktikan proses berpikirnya.</div>

<p><b>Soal 4.</b> Perangkat lunak yang mampu mengumpulkan informasi dari lingkungan dan mengambil tindakan atau aksi berdasarkan informasi yang dikumpulkannya adalah...</p>
<ul>
  <li>a. Sensors &nbsp; b. Environment &nbsp; c. Architecture &nbsp; <b>d. Agent</b> &nbsp; e. Actuators</li>
</ul>
<div class="tip"><b>Jawaban: d. Agent.</b> Definisi klasik agen: entitas yang mempersepsi lingkungan melalui sensor dan bertindak melalui actuator.</div>

<p><b>Soal 5.</b> Berikut ini yang menjadi kriteria untuk mengukur keberhasilan perilaku agen (rational agents) adalah...</p>
<ul>
  <li>a. Performance evaluation &nbsp; <b>b. Performance measure</b> &nbsp; c. Performance matrix &nbsp; d. Performance index &nbsp; e. Performance task</li>
</ul>
<div class="tip"><b>Jawaban: b. Performance measure.</b> Dalam PEAS, <i>performance measure</i> mendefinisikan kriteria sukses perilaku agen (seberapa benar/t cepat/efektif aksinya).</div>

<p><b>Soal 6.</b> Berikut ini merupakan jenis-jenis environment dalam sistem agen AI, kecuali...</p>
<ul>
  <li>a. Deterministic vs Stochastic &nbsp; b. Episodic vs Sequential &nbsp; c. Fully Observable vs Partially Observable &nbsp; d. Static vs Dynamic &nbsp; <b>e. Supervised vs Unsupervised</b></li>
</ul>
<div class="tip"><b>Jawaban: e.</b> Supervised vs Unsupervised adalah <b>jenis pembelajaran mesin (machine learning)</b>, bukan sifat environment. Delapan sifat environment: observable, deterministic, episodic, static, discrete, single/multi agent.</div>

<p><b>Soal 7.</b> Jenis agen AI yang memiliki kemampuan memperbarui model internalnya berdasarkan pengamatan dari lingkungan adalah...</p>
<ul>
  <li>a. Simple Reflex Agent &nbsp; b. Model-Based Reflex Agent &nbsp; c. Goal-Based Agent &nbsp; d. Utility-Based Agent &nbsp; <b>e. Learning Agent</b></li>
</ul>
<div class="tip"><b>Jawaban: e. Learning Agent.</b> Learning agent punya komponen <i>learning element</i> yang memperbaiki model/kebijakan berdasarkan pengalaman dari lingkungan.</div>

<p><b>Soal 8.</b> Dalam pendekatan PEAS untuk robot pembersih lantai otomatis, yang termasuk dalam kategori actuators adalah...</p>
<ul>
  <li>a. Kamera (sensor visual) &nbsp; b. Sensor inframerah &nbsp; c. Baterai &nbsp; <b>d. Motor penggerak roda untuk menggerakkan robot</b> &nbsp; e. Algoritma rute pembersihan</li>
</ul>
<div class="tip"><b>Jawaban: d.</b> Actuator = komponen yang mengeksekusi aksi. Motor penggerak roda menggerakkan robot. Kamera &amp; IR = sensor; baterai = bagian platform; algoritma = program agen.</div>

<p><b>Soal 9.</b> Berikut algoritma uninformed search, kecuali yang menggunakan informasi tambahan seberapa dekat keadaan dengan goal...</p>
<ul>
  <li>a. Breadth-First Search &nbsp; b. Depth-First Search &nbsp; <b>c. Greedy Best-First Search</b> &nbsp; d. Uniform Cost Search &nbsp; e. Iterative Deepening Search</li>
</ul>
<div class="tip"><b>Jawaban: c.</b> Greedy Best-First memakai heuristic h(n) = estimasi jarak ke goal, sehingga termasuk <b>informed search</b>. BFS, DFS, UCS, IDS = uninformed (buta).</div>

<p><b>Soal 10.</b> Pernyataan yang paling tepat mengenai perbedaan antara search strategies dan problem solving adalah...</p>
<ul>
  <li><b>b. Search strategies fokus pada pencarian jalur menuju solusi, sedangkan problem solving lebih luas mencakup perumusan masalah dan pemilihan solusi</b></li>
</ul>
<div class="tip"><b>Jawaban: b.</b> Search strategy = teknik eksplorasi ruang state (BFS, DFS, A*, dll). Problem solving = proses lengkap: memahami/perumusan masalah → representasi → mencari → memilih/mengevaluasi solusi.</div>

<h3>Bagian 2 — Essay 1: Complex Local Search (Genetic Algorithm) — 25 poin</h3>
<p><b>Kasus:</b> Penjadwalan 6 MK inti (A Algoritma, B Sistem Operasi, C Struktur Data, D Jaringan Komputer, E Kecerdasan Buatan, F Pemrograman Web), 3 dosen tetap, 3 ruangan, 5 hari × 5 sesi = 25 slot. Setiap MK 4 SKS butuh 2 sesi/minggu (total 12 sesi). Tujuan: minimalkan bentrok ruangan/dosen dan alokasi yang tidak adil.

<p><b>a. (15 poin) Proses Seleksi, Crossover, dan Mutasi dengan Roulette Wheel Selection</b></p>

<h3>Representasi Kromosom</h3>
<p>Setiap individu (kromosom) = satu jadwal lengkap. Misal representasi gen per MK:</p>
<table>
  <tr><th>Gen</th><th>Isi</th><th>Nilai</th></tr>
  <tr><td>Gen untuk tiap MK (12 sesi total)</td><td>Slot waktu (0–24), dosen (1–3), ruangan (1–3)</td><td>Contoh: (MK=A, slot=7, dosen=1, ruang=2)</td></tr>
</table>
<p><b>Fitness</b> = skor jadwal: kurangi jumlah bentrok (dosen/ruangan di slot sama), plus penalti beban tidak adil (dosen terlalu banyak/menanggung kosong), plus bonus kecocokan preferensi dosen.</p>

<h3>1. Seleksi — Roulette Wheel Selection</h3>
<ol>
  <li>Hitung total fitness seluruh populasi: F_total = Σ fitness(i).</li>
  <li>Hitung peluang tiap individu: p(i) = fitness(i) / F_total. Individu dengan fitness tinggi mendapat "irisan" roda lebih besar.</li>
  <li>Putar roda (bilangan acak 0–1) sebanyak yang dibutuhkan untuk memilih induk. Individu fit sering terpilih, tapi individu kurang fit masih punya peluang kecil → menjaga keragaman genetik.</li>
</ol>

<h3>2. Crossover (Rekombinasi)</h3>
<p>Dua induk terpilih bertukar materi genetik pada titik potong acak:</p>
<pre>P_Induk1: [A-s1-d1-r1][B-s5-d2-r2][C-s9-d3-r3][D-s13-...][E-s17-...][F-s21-...]
P_Induk2: [A-s3-d2-r2][B-s7-d1-r1][C-s11-d2-r2][D-s15-...][E-s19-...][F-s23-...]
                 ↓ titik potong setelah gen ke-3
C_Induk1: [A-s1-d1-r1][B-s5-d2-r2][C-s9-d3-r3] | [D-s15-...][E-s19-...][F-s23-...]
C_Induk2: [A-s3-d2-r2][B-s7-d1-r1][C-s11-d2-r2] | [D-s13-...][E-s17-...][F-s21-...]
</pre>
<p>Crossover menggabungkan "blok jadwal yang sudah baik" dari dua orang tua — misal individu 1 unggul penjadwalan MK A–C, individu 2 unggul di D–F, keturunannya bisa mengambil yang terbaik dari keduanya.</p>

<h3>3. Mutasi</h3>
<p>Untuk menjaga agar tidak terjebak di solusi lokal dan memperbaiki jadwal yang masih bentrok, tiap gen punya peluang kecil bermutasi:</p>
<ul>
  <li><b>Swap mutation:</b> tukar slot dua MK agar bentrok berkurang.</li>
  <li><b>Random reset:</b> ubah satu gen (misal dosen/ruangan) ke nilai baru yang legal.</li>
  <li><b>Repair mutation:</b> jika deteksi bentrok dosen/ruangan pada slot sama, geser salah satu MK ke slot kosong lain.</li>
</ul>

<h3>Menghasilkan Jadwal Lebih Baik di Generasi Berikutnya</h3>
<ol>
  <li>Roulette wheel → individu fit jadi induk (seleksi tekanan alamiah).</li>
  <li>Crossover → transfer kombinasi gen yang baik antar induk.</li>
  <li>Mutasi → variasi kecil, memperbaiki bentrok sisa, cegah konvergensi dini.</li>
  <li><i>Elitism:</i> simpan 1–2 individu terbaik langsung ke generasi berikutnya agar fitness terbaik tidak hilang.</li>
  <li>Ulangi beberapa generasi → rata-rata fitness naik → jadwal makin minim bentrok &amp; makin adil.</li>
</ol>

<p><b>b. (10 poin) Adaptasi dengan Perubahan Ketersediaan Dosen</b></p>
<ol>
  <li><b>Perbarui fitness function / ruang solusi:</b> tambahkan constraint baru (dosen X tidak tersedia hari Y) sebagai <i>hard constraint</i> — individu yang menempatkan dosen X di hari Y diberi fitness 0 atau penalti besar, sehingga hampir mustahil terpilih oleh roulette wheel.</li>
  <li><b>Repair pada populasi eksisting:</b> alih-alih mulai dari nol, ambil populasi terbaik saat ini dan lakukan <i>repair mutation</i> hanya pada gen yang melanggar ketersediaan baru (geser sesi dosen ke hari/slot lain yang kosong).</li>
  <li><b>Elitism + injeksi variasi baru:</b> pertahankan individu yang tidak terpengaruh perubahan; sisipkan sebagian individu acak baru untuk mengeksplorasi ruang solusi yang baru.</li>
  <li><b>Iterasi GA kembali:</b> jalankan seleksi–crossover–mutasi lagi beberapa generasi. Melalui regenerasi, kombinasi jadwal baru yang legal akan muncul dan fitness rata-rata pulih.</li>
</ol>
<div class="tip"><b>Inti:</b> GA tangguh terhadap perubahan karena cukup mengubah fungsi fitness/constraint dan melanjutkan evolusi — tidak perlu menghitung ulang solusi dari awal seperti metode eksak.</div>

<h3>Bagian 3 — Essay 2: Constraint Satisfaction Problem (CSP) — 25 poin</h3>
<p><b>Kasus:</b> 5 MK (A Algoritma, B Struktur Data, C Sistem Operasi, D Jaringan Komputer, E Kecerdasan Buatan) · 2 lab (Lab1, Lab2) · 4 slot {1,2,3,4}. Lab1 khusus A, B, E; Lab2 khusus C, D. Constraints awal: (1) A di slot 1; (2) B setelah A; (3) D sebelum C; (4) E bebas tapi di Lab1; (5) maks 1 MK per slot per lab.</p>

<p><b>a. (15 poin) Tambahkan dua constraint:</b></p>
<ol>
  <li><b>B dan C harus di hari berbeda</b> → karena B hanya mungkin di Lab1 dan C hanya mungkin di Lab2, constraint ini otomatis terpenuhi <i>selama</i> B dan C tidak ditempatkan pada slot waktu yang sama. Jadi constraint tersembunyi: <b>slot(B) ≠ slot(C)</b>.</li>
  <li><b>A dan E tidak boleh di slot berturut-turut</b> → |slot(A) − slot(E)| ≠ 1, yaitu slot(E) ∉ {2} jika A = 1 (karena slot 0 tidak ada). Karena A=1, E hanya boleh di slot 3 atau 4.</li>
</ol>
<p>Dengan A=1, B di {2,3,4}, D di slot sebelum C, dan maks 1 MK per slot per lab, penyelesaian yang valid adalah:</p>
<table>
  <tr><th>MK</th><th>Lab</th><th>Slot</th></tr>
  <tr><td>A (Algoritma)</td><td>Lab1</td><td>1</td></tr>
  <tr><td>B (Struktur Data)</td><td>Lab1</td><td>3 atau 4</td></tr>
  <tr><td>E (Kecerdasan Buatan)</td><td>Lab1</td><td>4 atau 3</td></tr>
  <tr><td>D (Jaringan Komputer)</td><td>Lab2</td><td>1 atau 2</td></tr>
  <tr><td>C (Sistem Operasi)</td><td>Lab2</td><td>3 atau 4 (setelah D)</td></tr>
</table>
<p>Contoh assignment valid: A=slot1/Lab1, D=slot1/Lab2, C=slot3/Lab2, B=slot3/Lab1, E=slot4/Lab1. (D &amp; C beda slot karena D harus sebelum C; B &amp; E tidak bentrok karena beda slot di Lab1.)</p>

<p><b>b. (10 poin) Graf CSP dan cara kerjanya</b></p>
<p><b>Nodes (variabel):</b> A, B, C, D, E.<br>
<b>Edges (binary constraints) — pasangan variabel yang saling terkait:</b></p>
<table>
  <tr><th>Edge</th><th>Constraint</th></tr>
  <tr><td>A — B</td><td>slot(B) &gt; slot(A) (B setelah A)</td></tr>
  <tr><td>B — C</td><td>slot(B) ≠ slot(C) (hari berbeda)</td></tr>
  <tr><td>C — D</td><td>slot(D) &lt; slot(C) (D sebelum C)</td></tr>
  <tr><td>A — E</td><td>|slot(A) − slot(E)| ≠ 1 (tidak berturut-turut)</td></tr>
</table>
<p>Constraint lain bersifat <b>unary/assignment</b> (A=slot1; domain B={2,3,4}; domain E⊆{3,4} di Lab1; D, C di Lab2) sehingga tidak perlu jadi edge, cukup mempersempit domain.</p>

<h3>Bagaimana graf membantu menyelesaikan CSP</h3>
<ol>
  <li><b>Mempersempit domain (forward checking):</b> setiap kali satu variabel diberi nilai, langsung lihat tetangganya di graf dan hapus nilai yang melanggar. Contoh: setelah A=slot1, tetangga A (B dan E) langsung kehilangan beberapa opsi.</li>
  <li><b>Deteksi ambang batas:</b> jika tetangga saling terlalu banyak mempersempit, kekosongan domain terdeteksi cepat → backtrack, bukan eksplorasi buta.</li>
  <li><b>Minimum Degree Heuristic:</b> pilih variabel dengan tetangga terbanyak (degree tertinggi) untuk dikerjakan lebih dulu, agar konflik terselesaikan sejak awal. Di sini B dan C punya degree 2 — dikerjakan setelah A.</li>
  <li><b>AC-3 (Arc Consistency):</b> menghapus nilai dari domain tiap variabel yang tidak punya nilai konsisten pada tetangganya, mengurangi ruang pencarian drastis sebelum backtracking dimulai.</li>
  <li><b>Backtracking:</b> jika percobaan mentok, mundur satu langkah dan coba nilai lain pada variabel sebelumnya.</li>
</ol>

<h3>Bagian 4 — Essay 3: Backward/Forward Chaining (Rule-Based) — 20 poin</h3>
<p><b>Aturan:</b></p>
<ol>
  <li>Algoritma ∧ Struktur Data → Pemrograman Lanjut</li>
  <li>Basis Data → Manajemen Basis Data</li>
  <li>Struktur Data ∧ Matematika Diskrit → Algoritma</li>
  <li>Jaringan Komputer ∧ Sistem Operasi → Keamanan Jaringan</li>
  <li>Algoritma → Pemrograman Paralel</li>
  <li>Sistem Terdistribusi ∧ Keamanan Jaringan → Cloud Computing</li>
  <li>Pemrograman Lanjut → Keamanan Jaringan</li>
  <li>Keamanan Jaringan ∧ Cloud Computing → Cybersecurity</li>
</ol>
<p><b>Fakta awal:</b> mahasiswa sudah mengambil Struktur Data, Matematika Diskrit, Jaringan Komputer, Sistem Operasi.</p>

<p><b>Pertanyaan:</b> Buktikan mahasiswa memenuhi syarat mengambil Cybersecurity menggunakan Backward Chaining ATAU Forward Chaining.</p>

<h3>Forward Chaining (bukti dari fakta ke kesimpulan)</h3>
<table>
  <tr><th>Langkah</th><th>Fakta/Rule</th><th>Fakta baru</th></tr>
  <tr><td>1</td><td>Fakta awal</td><td>Struktur Data ✓, Matematika Diskrit ✓, Jaringan Komputer ✓, Sistem Operasi ✓</td></tr>
  <tr><td>2</td><td>R3: Struktur Data ∧ Matematika Diskrit → Algoritma</td><td>+ Algoritma</td></tr>
  <tr><td>3</td><td>R1: Algoritma ∧ Struktur Data → Pemrograman Lanjut</td><td>+ Pemrograman Lanjut</td></tr>
  <tr><td>4</td><td>R7: Pemrograman Lanjut → Keamanan Jaringan</td><td>+ Keamanan Jaringan</td></tr>
  <tr><td>5</td><td>R4: Jaringan Komputer ∧ Sistem Operasi → Keamanan Jaringan</td><td>(konfirmasi redundan)</td></tr>
  <tr><td>6</td><td>R5: Algoritma → Pemrograman Paralel</td><td>+ Pemrograman Paralel</td></tr>
  <tr><td>7</td><td>R6: Sistem Terdistribusi ∧ Keamanan Jaringan → Cloud Computing</td><td>✗ <b>Sistem Terdistribusi BELUM diambil</b> → Cloud Computing tidak dapat diturunkan</td></tr>
  <tr><td>8</td><td>R8: Keamanan Jaringan ∧ Cloud Computing → Cybersecurity</td><td>✗ Cloud Computing tidak ada → <b>Cybersecurity TIDAK terbukti</b></td></tr>
</table>

<h3>Backward Chaining (bukti dari tujuan ke fakta)</h3>
<ol>
  <li><b>Goal: Cybersecurity</b> → butuh R8: Keamanan Jaringan ∧ Cloud Computing.</li>
  <li>Sub-goal <b>Keamanan Jaringan</b> ✓ — terbukti lewat R7 (Pemrograman Lanjut → Keamanan Jaringan) dan langsung lewat R4 (Jaringan Komputer ∧ Sistem Operasi → Keamanan Jaringan). Keduanya didukung fakta awal.</li>
  <li>Sub-goal <b>Cloud Computing</b> — butuh R6: Sistem Terdistribusi ∧ Keamanan Jaringan. Keamanan Jaringan sudah ✓, tapi <b>Sistem Terdistribusi tidak ada di fakta awal</b>.</li>
  <li>Sub-goal <b>Sistem Terdistribusi</b> — tidak punya rule apapun yang menghasilkannya, dan bukan fakta awal. ✗ Mentok.</li>
  <li><b>Kesimpulan:</b> rantai bukti terputus di sub-goal Sistem Terdistribusi. <b>Mahasiswa BELUM memenuhi syarat mengambil Cybersecurity</b> — minimal harus menyelesaikan Sistem Terdistribusi dulu, baru R6 dan R8 bisa aktif.</li>
</ol>
<div class="warn"><b>Jawaban kunci:</b> kedua metode (forward &amp; backward chaining) memberi hasil sama — <b>Cybersecurity TIDAK dapat dibuktikan</b> dengan fakta yang diberikan, karena Rule 6 mensyaratkan <i>Sistem Terdistribusi</i> yang belum diambil mahasiswa.</div>
`}