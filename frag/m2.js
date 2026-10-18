{
  tag:'M2',
  title:'Intelligent Agent',
  short:'Konsep agent, PEAS, 5 tipe agent, jenis environment.',
  html:`<h3>Apa itu Agent?</h3>
<ul>
  <li><b>Agent</b>: segala hal yang dapat <em>memperoleh info (perceiving)</em> dari environment-nya melalui <b>sensor</b> dan <b>bertindak (acting)</b> pada environment melalui <b>effectors</b>.</li>
  <li>Definisi: <i>Perangkat lunak yang mengumpulkan informasi terkait environment dan mengambil aksi.</i></li>
  <li>Contoh: robot, search engine, asisten virtual.</li>
</ul>

<h3>Agent vs AI Model</h3>
<table>
  <tr><th></th><th>AI Model</th><th>Intelligent Agent</th></tr>
  <tr><td>Input/output</td><td>Menerima input → hasilkan output</td><td>Memilih aksi → capai tujuan</td></tr>
  <tr><td>Nature</td><td>Sering pasif</td><td>Berinteraksi dengan environment</td></tr>
  <tr><td>Contoh</td><td>Classifier MRI</td><td>Clinical decision-support agent</td></tr>
</table>
<p>Model jadi bagian agent <em>bila dipakai untuk memilih aksi di task environment</em>.</p>

<h3>PEAS</h3>
<ul>
  <li><b>Performance measure:</b> ukuran keberhasilan. <b>Environment:</b> kondisi sekeliling agent.</li>
  <li><b>Actuators:</b> apa yang bisa dilakukan agent. <b>Sensors:</b> apa yang diterima agen.</li>
</ul>

<h3>Contoh PEAS</h3>
<table>
  <tr><th>Agent</th><th>P</th><th>E</th><th>A</th><th>S</th></tr>
  <tr><td>Robot penyedot debu</td><td>Lantai bersih, efisien energi</td><td>Ruangan, dinding, rintangan</td><td>Motor roda, vacuum</td><td>Sensor debu, jarak, benturan</td></tr>
  <tr><td>e-Commerce recommender</td><td>Penjualan naik, kepuasan, retensi</td><td>Produk, DB penjual, perilaku user</td><td>Rekomendasi, notifikasi</td><td>Riwayat belanja, klik, rating</td></tr>
  <tr><td>Delivery robot</td><td>Paket tepat waktu, aman, hemat</td><td>Trotoar kampus, cuaca, rambu</td><td>Roda, rem, speaker, lampu</td><td>Kamera, GPS, lidar, sensor</td></tr>
</table>

<h3>Lima Tipe Agent (tingkat kompleksitas naik kiri→kanan)</h3>
<ol>
  <li><b>Simple reflex agent:</b> hanya pakai <b>rule IF-THEN</b> berdasarkan persepsi terbaru. <em>Percept → Condition-Action rule</em>.</li>
  <li><b>Model-based reflex agent:</b> punya <b>representasi internal</b> tentang state environment. Bisa handle observasi sebagian.</li>
  <li><b>Goal-based agent:</b> punya <b>tujuan (goal)</b>. Pilih aksi yang mencapai goal. Cocog multi-jalur.</li>
  <li><b>Utility-based agent:</b> punya <b>utility function</b> — nilai tiap keadaan. Pilih aksi maksimalkan ekspektasi utilitas. Handle trade-off (misal: aman vs cepat).</li>
  <li><b>Learning agent:</b> <b>meningkatkan kinerja</b> dari pengalaman (performance feedback → explore/learn).</li>
</ol>

<div class="tip"><b>Struktur semua agent sama:</b> <b>function → model/policy → utility</b> (jika ada) → <b>learning</b> (jika ada).</div>

<h3>Environment (6 properti kunci)</h3>
<table>
  <tr><th>#</th><th>Ciri</th><th>Penuh / Parsial</th><th>Contoh</th></tr>
  <tr><td>1. Observable?</td><td>Fully vs Partially observable</td><td>info lengkap vs sebagian</td><td>catur (full) vs AV (partial)</td></tr>
  <tr><td>2. Deterministic?</td><td>Deterministic vs Stochastic</td><td>akibat pasti vs acak</td><td>robot Rubik (deter) vs AV (stochastik)</td></tr>
  <tr><td>3. Episodic?</td><td>Episodic vs Sequential</td><td>tindak-terpisah vs berurutan</td><td>deteksi spam (episodik) vs AV (sekuensial)</td></tr>
  <tr><td>4. Static?</td><td>Static vs Dynamic</td><td>tak berubah saat berpikir</td><td>catur (static) vs lalu-lintas AV (dinamis)</td></tr>
  <tr><td>5. Discrete?</td><td>Discrete vs Continuous</td><td>state diskrit vs kontinu</td><td>catur (diskrit) vs kemudi (kontinu)</td></tr>
  <tr><td>6. Single-agent?</td><td>Single vs Multi-agent</td><td>1 agen vs >1 agen</td><td>vacuum (single) vs game (multi)</td></tr>
</table>
<div class="tip">Di dunia nyata, environment biasanya: <b>parial, stochastik, sekuensial, dinamis, kontinu, multi-agent</b> → ini menentukan desain agen.</div>

<h3>Agent Klasik vs LLM-Based Agent</h3>
<table>
  <tr><th></th><th>Agent Klasik</th><th>LLM Agent</th></tr>
  <tr><td>Model</td><td>Rule/policy/pola eksplisit</td><td>Bernalar via language model</td></tr>
  <tr><td>Action space</td><td>Terbatas</td><td>Pilih tools/API sesuai tugas</td></tr>
  <tr><td>Environment</td><td>Simulasi/terstruktur</td><td>Web, file, database, terminal</td></tr>
  <tr><td>Evaluasi</td><td>Relatif terukur</td><td>Akurasi, safety, biaya, latency, traceability</td></tr>
</table>
<p><b>Agentic AI bukan pengganti</b> agent klasik — melainkan perluasan dengan <b>model + tools + memory + planning + oversight</b>.</p>
`}