const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send(`
<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>💍 Service Mariage - منصة خدمات الأعراس في الجزائر</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      theme: {
        extend: {
          colors: { gold: '#D4AF37', 'gold-light': '#F3E5AB', darkbg: '#121212', cardbg: '#1E1E1E' }
        }
      }
    }
  </script>
</head>
<body class="bg-darkbg text-white font-sans">
  <nav class="border-b border-gold/30 bg-black p-4 sticky top-0 z-50">
    <div class="max-w-6xl mx-auto flex justify-between items-center">
      <div class="text-2xl font-bold text-gold">💍 Service Mariage</div>
      <button onclick="openModal('طلب خدمة')" class="bg-gold text-black px-4 py-2 rounded-xl text-sm font-bold">إرسال طلب</button>
    </div>
  </nav>

  <section class="text-center py-10 px-4">
    <h1 class="text-3xl md:text-5xl font-extrabold text-gold mb-2">💍 Service Mariage</h1>
    <p class="text-gray-300">منصة خدمات الأعراس في الجزائر - التواصل عبر الواتساب مباشرة</p>
  </section>

  <main class="max-w-4xl mx-auto p-4">
    <div class="bg-cardbg border border-gold/40 p-6 rounded-2xl text-center">
      <h2 class="text-2xl font-bold text-gold mb-4">أهلاً بك في منصة Service Mariage</h2>
      <p class="text-gray-300 mb-6">احجز أفضل خدمات الاعراس مباشرة وراسل المزودين عبر الواتساب.</p>
      <button onclick="openModal('خدمات عامة')" class="bg-gold hover:bg-gold-light text-black font-bold px-6 py-3 rounded-xl">
        📲 اضغط هنا لإرسال طلب عبر الواتساب
      </button>
    </div>
  </main>

  <div id="requestModal" class="fixed inset-0 bg-black/80 hidden flex items-center justify-center p-4 z-50">
    <div class="bg-cardbg border border-gold rounded-2xl max-w-lg w-full p-6 relative">
      <button onclick="closeModal()" class="absolute top-4 left-4 text-gray-400 hover:text-white">✕</button>
      <h3 class="text-xl font-bold text-gold mb-4">طلب خدمة عبر الواتساب</h3>
      <form id="whatsappForm" class="space-y-3">
        <input type="text" id="clientName" placeholder="الاسم الكامل" required class="w-full bg-black border border-gray-700 rounded-lg p-2.5 text-white">
        <input type="tel" id="clientPhone" placeholder="رقم الهاتف" required class="w-full bg-black border border-gray-700 rounded-lg p-2.5 text-white">
        <input type="text" id="weddingWilaya" placeholder="الولاية" required class="w-full bg-black border border-gray-700 rounded-lg p-2.5 text-white">
        <button type="submit" class="w-full bg-green-600 text-white font-bold py-3 rounded-xl">
          📲 إرسال مباشرة للواتساب
        </button>
      </form>
    </div>
  </div>

  <script>
    const MY_WHATSAPP_NUMBER = "213600000000"; // غير هذا الرقم لرقمك الخاض
    function openModal() { document.getElementById('requestModal').classList.remove('hidden'); }
    function closeModal() { document.getElementById('requestModal').classList.add('hidden'); }
    document.getElementById('whatsappForm').addEventListener('submit', function(e) {
      e.preventDefault();
      const name = document.getElementById('clientName').value;
      const phone = document.getElementById('clientPhone').value;
      const wilaya = document.getElementById('weddingWilaya').value;
      const text = \`💍 *طلب خدمة جديد - Service Mariage*%0A%0A👤 *الاسم:* \${name}%0A📞 *الهاتف:* \${phone}%0A📍 *الولاية:* \${wilaya}\`;
      window.open(\`https://wa.me/\${MY_WHATSAPP_NUMBER}?text=\${text}\`, '_blank');
      closeModal();
    });
  </script>
</body>
</html>
  `);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
