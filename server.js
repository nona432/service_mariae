const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`
<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Mariage DZ - Tous vos خدمات الأعراس</title>
  <style>
    * { box-sizing: border-box; }
    body { font-family: system-ui, -apple-system, sans-serif; background-color: #0f0f11; color: #f3f4f6; margin: 0; padding: 20px; direction: rtl; }
    .container { max-width: 550px; margin: auto; background: #18181c; padding: 30px; border-radius: 20px; box-shadow: 0 10px 30px rgba(0,0,0,0.5); border: 1px solid #d4af37; }
    .logo-container { text-align: center; margin-bottom: 20px; }
    .logo-container img { width: 140px; height: 140px; border-radius: 50%; border: 2px solid #d4af37; object-fit: cover; }
    h2 { text-align: center; color: #d4af37; margin-top: 10px; margin-bottom: 25px; font-size: 22px; font-weight: bold; }
    .form-group { margin-bottom: 18px; }
    label { display: block; margin-bottom: 6px; font-weight: 600; color: #e5e7eb; font-size: 15px; }
    input, select { width: 100%; padding: 12px; background-color: #24242a; border: 1px solid #3f3f46; border-radius: 8px; color: #fff; font-size: 15px; outline: none; transition: border-color 0.2s; }
    input:focus, select:focus { border-color: #d4af37; }
    input::placeholder { color: #9ca3af; }
    button { width: 100%; background: linear-gradient(135deg, #25d366, #128c7e); color: white; border: none; padding: 14px; font-size: 17px; font-weight: bold; border-radius: 8px; cursor: pointer; margin-top: 15px; transition: transform 0.2s, opacity 0.2s; display: flex; align-items: center; justify-content: center; gap: 8px; }
    button:hover { opacity: 0.95; transform: translateY(-1px); }
  </style>
</head>
<body>

<div class="container">
  <div class="logo-container">
    <!-- شعار الخدمة -->
    <img src="https://i.ibb.co/213553663402/logo.png" onerror="this.src='https://via.placeholder.com/140/000000/d4af37?text=Mariage+DZ'" alt="Mariage DZ Logo">
  </div>

  <h2>💍 حجز خدمات الأعراس (Mariage DZ)</h2>

  <form id="marriageForm">
    <div class="form-group">
      <label>الاسم واللقب *</label>
      <input type="text" id="fullname" required placeholder="أدخل اسمك الكامل">
    </div>

    <div class="form-group">
      <label>رقم الهاتف *</label>
      <input type="tel" id="phone" required placeholder="05XX XX XX XX">
    </div>

    <div class="form-group">
      <label>الخدمة المطلوبة *</label>
      <select id="service" required>
        <option value="">-- اختر الخدمة --</option>
        <option value="Dj">Dj</option>
        <option value="Photographe">Photographe</option>
        <option value="Groupe pas photo">Groupe pas photo (مجموعة ممنوع التصوير)</option>
        <option value="Groupe pas d’enfant">Groupe pas d’enfant (مجموعة ممنوع الأطفال)</option>
        <option value="Organisé mariage">Organisé mariage (تنظيم الأعراس)</option>
        <option value="Lazare & la fumée 💨">Lazare & la fumée 💨 (الليزر والدخان)</option>
        <option value="Machta">Machta (ماشطة)</option>
        <option value="Groupe dbka">Groupe dbka (فرقة دبكة)</option>
        <option value="Chanteur">Chanteur (مغني)</option>
        <option value="Décoration">Décoration (تزيين)</option>
        <option value="Coiffeuse">Coiffeuse (حلاقة)</option>
        <option value="Make up artiste & Onglerie">Make up artiste & Onglerie (مكياج وأظافر)</option>
        <option value="كراء فستان العروس">كراء فستان العروس</option>
        <option value="كراء ملابس الاعراس">كراء ملابس الاعراس</option>
        <option value="كراء بذلة عريس">كراء بذلة عريس</option>
        <option value="كراء سيارات">كراء سيارات</option>
        <option value="فرقة موسيقية">فرقة موسيقية</option>
        <option value="توزيعات">توزيعات</option>
        <option value="حلويات">حلويات</option>
        <option value="كيكة العرس">كيكة العرس</option>
        <option value="صالة اعراس">صالة اعراس</option>
      </select>
    </div>

    <div class="form-group">
      <label>الولاية *</label>
      <input type="text" id="wilaya" required placeholder="مثال: البليدة، الجزائر، وهران...">
    </div>

    <div class="form-group">
      <label>المكان بالتفصيل *</label>
      <input type="text" id="location" required placeholder="البلدية أو اسم القاعة">
    </div>

    <div class="form-group">
      <label>تاريخ المناسبة *</label>
      <input type="date" id="eventDate" required>
    </div>

    <div class="form-group">
      <label>إمكانية السعر / الميزانية (د.ج)</label>
      <input type="text" id="budget" placeholder="مثال: 40,000 دج">
    </div>

    <button type="button" onclick="sendToWhatsApp()">إرسال الطلب عبر الواتساب 📲</button>
  </form>
</div>

<script>
function sendToWhatsApp() {
  // الرقم الجديد الخاص بك: 0553663402
  const phoneNumber = "213553663402"; 

  const fullname = document.getElementById('fullname').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const service = document.getElementById('service').value;
  const wilaya = document.getElementById('wilaya').value.trim();
  const location = document.getElementById('location').value.trim();
  const eventDate = document.getElementById('eventDate').value;
  const budget = document.getElementById('budget').value.trim();

  if(!fullname || !phone || !service || !wilaya || !location || !eventDate) {
    alert("يرجى ملء جميع الحقول المطلوبة (الاسم، رقم الهاتف، الخدمة، الولاية، المكان، وتاريخ المناسبة)");
    return;
  }

  const message = \`مرحباً، أرغب في حجز خدمة عبر المنصة:%0A%0A\` +
    \`👤 *الاسم واللقب:* \${fullname}%0A\` +
    \`📞 *رقم الهاتف:* \${phone}%0A\` +
    \`🛠️ *الخدمة المطلوبة:* \${service}%0A\` +
    \`📍 *الولاية:* \${wilaya}%0A\` +
    \`📌 *المكان بالتفصيل:* \${location}%0A\` +
    \`📅 *تاريخ المناسبة:* \${eventDate}%0A\` +
    \`💰 *الميزانية/إمكانية السعر:* \${budget || 'غير محدد'}\`;

  const whatsappURL = \`https://wa.me/\${phoneNumber}?text=\${message}\`;
  
  window.open(whatsappURL, '_blank');
}
</script>

</body>
</html>
  `);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
