{
  tag:'M7',
  title:'Planning Agent',
  short:'STRIPS, plan-space search, POP, kaitannya dengan agentic AI.',
  html:`<h3>Planning vs Problem Solving</h3>
<ul>
  <li>Planning = <b>membuat rencana (sequence of actions) untuk mencapai goal</b> dalam kondisi + aksi.</li>
  <li>Persoalan planning sering <b>non-deterministik</b>: start bisa di beberapa state sekaligus (sets of atomic states).</li>
  <li>Pencarian per-state (enumerasi) → <b>tidak efisien</b> (eksponen dari jumlah state).</li>
  <li>Solusinya: deskripsikan state <b>sebagai logika</b> (proposisi), bukan enumerasi. → lebih ringkas.</li>
</ul>
<div class="exam"><b>Situation Calculus:</b><br>
Satu bentuk planning klasik: <span class="kbd">Result(North, Result(Grab, Result(South, S0)))</span><br>
— membangun situasi hasil aksi secara berlapis. Baca dari dalam: <b>South → Grab → North</b>.</div>

<h3>Representasi STRIPS (fokus utama)</h3>
<p>Bahasa khusus untuk state, goal, action:</p>
<table>
  <tr><th>Komponen</th><th>Bentuk</th></tr>
  <tr><td><b>State</b></td><td>Konjungsi <b>positive &amp; negatif literals</b> (contoh: <span class="kbd">At(robot,r3) ∧ Closed(door6)</span>)</td></tr>
  <tr><td><b>Goal</b></td><td>Konjungasi literal (misal: <span class="kbd">Have(Milk) ∧ Have(Banana)</span>)</td></tr>
  <tr><td><b>Action/Operator</b></td><td>Nama + <b>Precondition</b> + <b>Effects</b> (add-list &amp; delete-list)</td></tr>
</table>
<h4>Contoh Operasi STRIPS</h4>
<p><span class="kbd">Go(x,y)</span> : Pre <span class="kbd">At(x)</span> • Eff <span class="kbd">At(y), ¬At(x)</span><br>
<span class="kbd">Buy(x,store)</span> : Pre <span class="kbd">At(store) ∧ Sells(store,x)</span> • Eff <span class="kbd">Have(x)</span></p>

<h3>Planning Algorithms</h3>
<table>
  <tr><th></th><th>Progression</th><th>Regression</th></tr>
  <tr><td>Arah</td><td>Maju (search langsung dari start, terapkan aksi)</td><td>Mundur (dari goal → cari kondisi sebelum aksi)</td></tr>
  <tr><td>Fokus</td><td>Efek semua aksi dari state saat ini (besar percabangan)</td><td>Apa yang harus true sebelum goal</td></tr>
  <tr><td>Kekurangan</td><td>Besar percabangan</td><td>Butuh direction (aksi mana dulu)</td></tr>
</table>

<h3>Plan-Space Planning &amp; POP</h3>
<ul>
  <li><b>Plan-space:</b> mulai dari <b>rencana kosong</b>, tambahkan step demi step. Pisah antara <b>urutan (order)</b> dan <b>pelaksanaan (execution)</b>.</li>
  <li><b>Least-commitment:</b> tunda keputusan yang belum perlu.</li>
  <li><b>Means-ends analysis:</b> cocokkan sarana (action) dengan tujuan.</li>
</ul>
<h4>Partially Ordered Plan (POP) = 4 elemen</h4>
<table>
  <tr><th>Komponen</th><th>Arti</th></tr>
  <tr><td><b>Steps</b></td><td>Kumpulan operator (langkah dalam rencana)</td></tr>
  <tr><td><b>Ordering constraints</b></td><td>Urutan: <span class="kbd">Si &lt; Sj</span> (langkah i mendahului j)</td></tr>
  <tr><td><b>Variable bindings</b></td><td>Nilai variabel: <span class="kbd">v = x</span></td></tr>
  <tr><td><b>Causal links</b></td><td><span class="kbd">Si →c Sj</span>: langkah i memenuhi prasyarat c untuk langkah j</td></tr>
</table>

<h3>Syarat Plan Lengkap &amp; Konsisten</h3>
<ul>
  <li><b>Complete:</b> setiap <em>precondition</em> dipenuhi oleh beberapa step lain.</li>
  <li><b>Konsisten:</b> ordering + binding konsisten (tiada konflik) .</li>
  <li><b>Threat:</b> step S mengancam causal link Si →c Sj jika <span class="kbd">¬c ∈ effects(S)</span> dan bisa diletakkan di antara. Resolve: <b>Promote</b> (S sebelum Si) atau <b>Demote</b> (S sesudah Sj).</li>
</ul>

<h3>POP Algorithm</h3>
<ol>
  <li>Buat initial plan (start &lt; finish).</li>
  <li>Ulangi sampai plan lengkap: pilih subgoal → pilih operator → <b>resolve threats</b>.</li>
  <li>Cek konsistensi, jika plan berubah → loop.</li>
</ol>

<div class="exam"><b>Latihan:</b><br>
Goal <span class="kbd">Have(Milk) ∧ Have(Banana) ∧ Have(Drill)</span>, start <span class="kbd">At(Home)</span>.<br>
Gunakan action <span class="kbd">Go</span> dan <span class="kbd">Buy</span> → rentetan pergi ke store, beli, kembali. POP memberi kebebasan urutan (buat 2 toko berbeda waktu).</div>

<h3>Hubungan dengan Agentic AI</h3>
<ul>
  <li>Konsep planning klasik ber-evolusi menjadi <b>CoT, ToT, ReAct (Reason + Act)</b>.</li>
  <li>Agentic AI = realisasi modern dari planning, dengan <b>tools + memory + planning + oversight</b>.</li>
  <li>AI tidak hanya menyusun rencana di "kertas", tapi mengeksekusi tugas kompleks end-to-end.</li>
</ul>
<div class="tip"><b>Ringkasan minggu 2-7</b> alur materi: memahami 4 pendekatan AI (M1) → agent cerdas (M2) → problem &amp; state (M3) → metode search (M4) → CSP (M5) → local/adversarial (M6) → planning (M7).</div>
`}