// ============= Tambah CSS Langsung di JS =============
const style = document.createElement("style");
style.textContent = `
:root {
  --primary-color: #00b4d8;
  --secondary-color: #03045e;
  --bg-overlay: rgba(255, 255, 255, 0.85);
  --text-color: #212529;
  --button-hover: #0096c7;
}
* { box-sizing: border-box; margin: 0; padding: 0; }
body {
  font-family: 'Segoe UI', Tahoma, sans-serif;
  color: var(--text-color);
  background: #f0f0f0;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  opacity: 0;
  transition: opacity 0.6s ease-in;
}
body.bg-loaded { opacity: 1; background-image: url('cwu-foto.jpg'); }
.overlay {
  background-color: var(--bg-overlay);
  min-height: 100vh;
  width: 100%;
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
h1 {
  font-size: 2em;
  color: var(--secondary-color);
  margin-bottom: 10px;
  text-align: center;
}
p.lead {
  font-size: 1.1em;
  color: #444;
  margin-top: 0;
  text-align: center;
}
.button-group { margin-top: 20px; text-align: center; }
.twibbon-button, .rules-button {
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  color: #fff;
  padding: 14px 28px;
  font-size: 16px;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  text-decoration: none;
  transition: background 0.3s ease;
  display: inline-block;
  margin: 10px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}
.twibbon-button:hover, .rules-button:hover {
  background: linear-gradient(135deg, var(--button-hover), var(--secondary-color));
}
.caption-box {
  background: #ffffff;
  border-radius: 16px;
  padding: 25px;
  margin-top: 40px;
  box-shadow: 0 8px 20px rgba(0,0,0,0.05);
  max-width: 800px;
  width: 100%;
}
.caption-box h2 { margin: 0 0 10px; color: var(--secondary-color); }
textarea {
  width: 100%;
  height: 400px;
  font-size: 15px;
  padding: 12px;
  border-radius: 10px;
  border: 1px solid #ccc;
  resize: none;
}
.copy-btn {
  margin-top: 12px;
  padding: 12px 24px;
  background-color: var(--primary-color);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  transition: background 0.3s ease;
}
.copy-btn:hover { background-color: var(--button-hover); }
.social { margin-top: 30px; font-size: 16px; text-align: center; }
.social-icons {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 10px;
}
.social-icons a {
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: #fff;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
  transition: transform 0.2s ease;
}
.social-icons a:hover { transform: scale(1.1); }
.social-icons svg { width: 28px; height: 28px; }
@media (max-width: 600px) {
  h1 { font-size: 1.6em; }
  .twibbon-button, .rules-button {
    font-size: 14px;
    padding: 12px 20px;
    display: block;
    width: 100%;
    max-width: 300px;
    margin: 10px auto;
  }
  textarea { height: 350px; }
  .copy-btn { width: 100%; }
  .social-icons a { width: 44px; height: 44px; }
  .social-icons svg { width: 24px; height: 24px; }
}
`;
document.head.appendChild(style);

// ============= Tambah Konten HTML dari JS =============
document.body.innerHTML = `
  <div class="overlay">
    <h1>🚨 I'M READY FOR OPEN RECRUITMENT CWU UNUJA 2025 🚨</h1>
    <p class="lead">Ayo jadi bagian dari kami! Pasang Twibbon-mu dan tunjukkan semangatmu ✨</p>

    <div class="button-group">
      <a href="https://twibbo.nz/wirausaha25" class="twibbon-button" target="_blank">🎉 Pasang Twibbon</a>
      <a href="https://drive.google.com/file/d/12blA5WNfz3CvaJAnj8yOfYQ4GGW1Kqja/view?usp=sharing" class="rules-button" target="_blank">📄 Lihat Ketentuan</a>
    </div>

    <div class="caption-box">
      <h2>📋 Caption Siap Pakai</h2>
      <textarea id="captionText" readonly>🚨 I’M READY FOR OPEN RECRUITMENT CLUB WIRAUSAHA UNUJA 2025 🚨

"Menjadi mahasiswa bukan hanya tentang kuliah dan tugas, tapi juga tentang membangun masa depan sejak sekarang."

Saya (nama kamu) dari Prodi (prodi kamu) Universitas Nurul Jadid, dengan penuh keyakinan dan semangat, siap bergabung dengan Club Wirausaha UNUJA 2025.

Saya percaya, bergabung dengan Club Wirausaha bukan hanya tentang belajar bisnis, tapi tentang melatih kepemimpinan, membentuk pola pikir kreatif, dan menciptakan peluang di tengah tantangan zaman.

💼 Di sinilah saya ingin berkembang:
✅ Bersama komunitas yang suportif
✅ Dibimbing oleh para praktisi dan mentor hebat
✅ Berkontribusi nyata lewat aksi dan kolaborasi
✅ Siap jadi mahasiswa yang produktif dan berdampak

"Saya tidak hanya ingin jadi penonton perubahan. Saya ingin jadi bagian dari pelakunya."

Ayo bergabung! Karena masa depan cerah adalah milik mereka yang berani memulai.

Yuk Gabung CWU
Tag 3 tmen unuja kamu(hapus bagian ini)
1.
2.
3.

FOLLOW US
Instagram: @Clubwirausaha.unuja
Tiktok: @club.wirausaha

#clubwirausahaunuja
#OprecCWU25
#unujaofficial
#WirausahaMuda
#MahasiswaProduktif</textarea>
      <button class="copy-btn" onclick="copyCaption()">Salin Caption</button>
    </div>

    <div class="social">
      <p>🔗 Ikuti kami di sosial media:</p>
      <div class="social-icons">
        <a href="https://instagram.com/clubwirausaha.unuja" target="_blank" aria-label="Instagram">
          <svg fill="#E1306C" viewBox="0 0 24 24"><path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.9.2 2.4.4.6.2 1 .5 1.5 1s.8.9 1 1.5c.2.5.3 1.2.4 2.4.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.2 1.9-.4 2.4-.2.6-.5 1-1 1.5s-.9.8-1.5 1c-.5.2-1.2.3-2.4.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.9-.2-2.4-.4-.6-.2-1-.5-1.5-1s-.8-.9-1-1.5c-.2-.5-.3-1.2-.4-2.4C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.2-1.9.4-2.4.2-.6.5-1 1-1.5s.9-.8 1.5-1c.5-.2 1.2-.3 2.4-.4C8.4 2.2 8.8 2.2 12 2.2m0-2.2C8.7 0 8.3 0 7 .1 5.7.1 4.7.3 3.9.6 3 .9 2.3 1.3 1.6 2c-.7.7-1.1 1.4-1.4 2.3C0 5.1-.1 6.1 0 7.4c.1 1.3.1 1.7.1 4.6s0 3.3-.1 4.6c-.1 1.3 0 2.3.2 3.1.3.9.7 1.6 1.4 2.3.7.7 1.4 1.1 2.3 1.4.8.3 1.8.4 3.1.2 1.3-.1 1.7-.1 4.6-.1s3.3 0 4.6.1c1.3.1 2.3 0 3.1-.2.9-.3 1.6-.7 2.3-1.4.7-.7 1.1-1.4 1.4-2.3.3-.8.4-1.8.2-3.1-.1-1.3-.1-1.7-.1-4.6s0-3.3.1-4.6c.1-1.3 0-2.3-.2-3.1-.3-.9-.7-1.6-1.4-2.3-.7-.7-1.4-1.1-2.3-1.4-.8-.3-1.8-.4-3.1-.2C15.3.1 14.9.1 12 .1z"/><path d="M12 5.8a6.2 6.2 0 1 0 6.2 6.2A6.2 6.2 0 0 0 12 5.8zm0 10.2a4 4 0 1 1 4-4 4 0 0 1-4 4z"/><circle cx="18.4" cy="5.6" r="1.4"/></svg>
        </a>
        <a href="https://www.tiktok.com/@cwu.unuja?is_from_webapp=1&sender_device=pc" target="_blank" aria-label="TikTok">
          <svg fill="#000" viewBox="0 0 24 24"><path d="M12.74 2h3.22c.1 1.1.45 2.1 1.03 3 .58.9 1.38 1.62 2.35 2.06.7.33 1.5.5 2.3.53v3.33c-1.3 0-2.6-.3-3.8-.9-.6-.3-1.1-.6-1.6-1v7.5c0 1.4-.4 2.8-1.2 4a7.2 7.2 0 0 1-6.3 3.3c-1.6 0-3.2-.5-4.5-1.5A7.4 7.4 0 0 1 2 14.9c0-2 1-3.9 2.5-5.1a7.2 7.2 0 0 1 4.9-1.7v3.4a3.9 3.9 0 0 0-2.7.8 3.8 3.8 0 0 0-1.4 2.9c0 1 .4 2 1.1 2.7a3.8 3.8 0 0 0 5.3 0c.7-.7 1.1-1.7 1.1-2.7V2z"/></svg>
        </a>
      </div>
    </div>
  </div>
`;

// ============= Fungsi JS =============
window.copyCaption = function() {
  const caption = document.getElementById("captionText").value;
  navigator.clipboard.writeText(caption).then(() => {
    alert("Caption berhasil disalin!");
  }).catch(err => {
    console.error("Gagal menyalin caption: ", err);
  });
};

// Preload gambar lalu apply background
const img = new Image();
img.src = "cwu-foto.jpg";
img.onload = () => document.body.classList.add("bg-loaded");


