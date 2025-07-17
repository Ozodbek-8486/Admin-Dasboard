# training-admin-dashboard

# 🛠️ Admin Dashboard

Zamonaviy va responsiv **Admin Panel** — foydalanuvchi ma'lumotlarini boshqarish, statistikalarni ko'rish va tizimni nazorat qilish uchun qulay interfeys.

## 📸 Demo

![Dashboard Screenshot](public/screenshots/Admin-dashboard.png)

## 🔧 Texnologiyalar

Bu loyiha quyidagi texnologiyalar asosida qurilgan:

<p align="left">
  <img src="https://skillicons.dev/icons?i=javascript,react,css,nextjs,tailwind," alt="Tech Stack Icons" />
</p>

- **TailwindCSS**
- **JavaScript (ES6+)**
- **React.js** / **Next.js**
- **Django** (backend va admin interfeys uchun)
- **Python** (Django asosida)
- **Chart.js / ApexCharts** (diagrammalar uchun)

## 🚀 Loyihani ishga tushirish

```bash
# 1. Repozitoriyani klonlash
git clone https://github.com/username/admin-dashboard.git
cd admin-dashboard

# 2. Frontendni o'rnatish
cd frontend
npm install
npm run dev  # http://localhost:3000 da ishga tushadi

# 3. Backendni o'rnatish
cd ../backend
python -m venv venv
source venv/bin/activate  # Windows uchun: venv\Scripts\activate
pip install -r requirements.txt
python manage.py runserver  # http://127.0.0.1:8000 da ishga tushadi
