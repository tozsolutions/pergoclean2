# PergoClean Web Sitesi

Vercel ve GitHub deploy uyumlu, Next.js tabanlı kurumsal web sitesi.

## İçerik
- Ana sayfa tasarımı
- SEO meta yapısı
- Sitemap + robots
- LocalBusiness structured data
- Fiyat hesaplama formu
- Randevu formu
- Fotoğraf ön değerlendirme formu
- İletişim formu
- n8n webhook entegrasyonu için API route'ları
- Avrupa standartları sayfası
- Blog merkezi
- Admin panel taslağı

## Kurulum
```bash
npm install
cp .env.example .env.local
npm run dev
```

## Deploy
### Vercel
1. Projeyi GitHub'a gönderin
2. Vercel üzerinden import edin
3. `.env.example` içindeki env değişkenlerini Vercel Project Settings > Environment Variables alanına ekleyin
4. Deploy edin

### GitHub
```bash
git init
git add .
git commit -m "Initial PergoClean website"
git branch -M main
git remote add origin REPO_URL
git push -u origin main
```

## n8n Örnek Webhook Akışı
Her form JSON payload gönderir:
```json
{
  "source": "pergoclean-web",
  "type": "quote",
  "createdAt": "2026-04-02T10:00:00.000Z",
  "data": {
    "adSoyad": "Örnek Kullanıcı",
    "telefon": "0555 555 55 55"
  }
}
```

## Kritik not
Gerçek dosya yükleme, CRM senkronizasyonu, tam admin panel ve giriş sistemi istenirse ikinci fazda:
- Vercel Blob veya S3
- Supabase / PostgreSQL
- Auth sistemi
- n8n log tablosu
eklenmelidir.
