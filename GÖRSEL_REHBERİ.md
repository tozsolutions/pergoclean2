# 🖼️ TOZ Yapı - Görsel Ekleme ve Optimizasyon Rehberi

## 📁 Klasör Yapısı

Önce `images` klasörü oluşturun:

```
pergo clean/
├── images/
│   ├── hero/           # Hero section görselleri
│   ├── products/       # Ürün kategorileri
│   ├── partners/       # İş ortakları logoları
│   ├── references/     # Referans projeler
│   ├── blog/           # Blog yazıları
│   └── icons/          # favicon, apple-touch-icon
├── index.html
├── styles.css
└── script.js
```

---

## 1️⃣ HERO SECTION GÖRSELLERİ

### Dosyalar:
- `images/hero/hero-bg.jpg` (1920x1080px)
- `images/hero/hero-overlay.png` (opsiyonel)

### index.html'de Değişiklik:

**ŞU ANKİ (Placeholder):**
```html
<section id="home" class="hero">
  <div class="hero-overlay"></div>
```

**GÖRSEL EKLENDİKTEN SONRA:**
```html
<section id="home" class="hero" style="background-image: url('images/hero/hero-bg.jpg');">
  <div class="hero-overlay"></div>
```

**VEYA CSS ile:**
```css
/* styles.css içine ekle */
.hero {
  background-image: url('../images/hero/hero-bg.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
```

### Önerilen Görseller:
- Modern bina görseli
- Panjur/kepenk montajı
- Pergola sistemleri
- Ankara şehir manzarası (opsiyonel)

---

## 2️⃣ ÜRÜN KATEGORİLERİ GÖRSELLERİ

### Dosyalar:
```
images/products/
├── panjur-systems.jpg      (800x600px)
├── kepenk-systems.jpg      (800x600px)
├── pergola-tente.jpg       (800x600px)
├── otomatik-kapi.jpg       (800x600px)
├── giyotin-cam.jpg         (800x600px)
└── akilli-sistemler.jpg    (800x600px)
```

### index.html'de Değişiklik:

**ŞU ANKİ:**
```html
<div class="product-image">
  <div class="product-placeholder">
    <svg width="64" height="64" ...></svg>
  </div>
  <span class="badge-new">Yeni</span>
</div>
```

**GÖRSEL EKLENDİKTEN SONRA:**
```html
<div class="product-image">
  <img src="images/products/panjur-systems.jpg" 
       alt="TOZ Yapı Panjur Sistemleri"
       loading="lazy"
       style="width: 100%; height: 100%; object-fit: cover;">
  <span class="badge-new">Yeni</span>
</div>
```

### Her Ürün İçin:

1. **Panjur Sistemleri:**
   ```html
   <img src="images/products/panjur-systems.jpg" alt="Panjur Sistemleri">
   ```

2. **Kepenk Sistemleri:**
   ```html
   <img src="images/products/kepenk-systems.jpg" alt="Kepenk Sistemleri">
   ```

3. **Pergola & Tente:**
   ```html
   <img src="images/products/pergola-tente.jpg" alt="Pergola ve Tente Sistemleri">
   ```

4. **Otomatik Kapı:**
   ```html
   <img src="images/products/otomatik-kapi.jpg" alt="Otomatik Kapı Sistemleri">
   ```

5. **Giyotin & Cam:**
   ```html
   <img src="images/products/giyotin-cam.jpg" alt="Giyotin Cam Sistemleri">
   ```

6. **Akıllı Sistemler:**
   ```html
   <img src="images/products/akilli-sistemler.jpg" alt="Akıllı Sistemler">
   ```

---

## 3️⃣ HAKKIMIZDA BÖLÜMÜ

### Dosyalar:
- `images/about/team-photo.jpg` (Ekip fotoğrafı)
- `images/about/office.jpg` (Ofis görseli)
- `images/about/factory.jpg` (Fabrika/üretim)

### HTML Ekleme:
```html
<div class="about-images">
  <img src="images/about/team-photo.jpg" 
       alt="TOZ Yapı Ekibi"
       style="width: 100%; border-radius: 12px; box-shadow: 0 10px 30px rgba(0,0,0,0.1);">
</div>
```

---

## 4️⃣ İŞ ORTAKLARI LOGOLARI

### Dosyalar:
```
images/partners/
├── dorma-logo.webp
├── somfy-logo.webp
├── nice-logo.webp
├── record-logo.webp
├── alumil-logo.webp
└── ... (diğer partnerler)
```

### HTML Ekleme:
```html
<div class="partners-grid">
  <img src="images/partners/dorma-logo.webp" alt="Dorma Partner" class="partner-logo">
  <img src="images/partners/somfy-logo.webp" alt="Somfy Partner" class="partner-logo">
  <!-- Diğer logolar -->
</div>
```

### CSS:
```css
.partner-logo {
  max-width: 150px;
  height: auto;
  filter: grayscale(100%);
  opacity: 0.7;
  transition: all 0.3s ease;
}

.partner-logo:hover {
  filter: grayscale(0%);
  opacity: 1;
}
```

---

## 5️⃣ REFERANS PROJELER

### Dosyalar:
```
images/references/
├── cimer-project.jpg
├── airport-hangar.jpg
├── villa-panjur.jpg
├── hospital-project.jpg
└── hotel-pergola.jpg
```

### HTML Section Ekle:
```html
<section id="references" class="references-section">
  <div class="container">
    <h2 class="section-title">Referans Projelerimiz</h2>
    <div class="references-grid">
      <div class="reference-card">
        <img src="images/references/cimer-project.jpg" alt="Cumhurbaşkanlığı İletişim Projesi">
        <div class="reference-info">
          <h3>Cumhurbaşkanlığı İletişim</h3>
          <p>Panjur ve Kepenk Sistemleri</p>
        </div>
      </div>
      <!-- Diğer projeler -->
    </div>
  </div>
</section>
```

---

## 6️⃣ FAVICON VE ICONLAR

### Dosyalar:
```
images/icons/
├── favicon.ico          (32x32, 64x64)
├── apple-touch-icon.png (180x180)
├── icon-192x192.png     (192x192)
└── icon-512x512.png     (512x512)
```

### index.html Head Bölümüne Ekle:
```html
<head>
  <link rel="icon" type="image/x-icon" href="images/icons/favicon.ico">
  <link rel="apple-touch-icon" href="images/icons/apple-touch-icon.png">
  <link rel="manifest" href="manifest.json">
</head>
```

---

## 🎨 GÖRSEL OPTİMİZASYONU

### Online Araçlar:

1. **Squoosh.app** (Google)
   - WebP dönüşümü
   - Kalite optimizasyonu
   - Before/after karşılaştırma

2. **TinyPNG.com**
   - PNG sıkıştırma
   - Toplu işleme
   - %70'e varan küçültme

3. **CompressJPEG.com**
   - JPEG optimizasyonu
   - Batch processing

### Komut Satırı (Advanced):

```bash
# Sharp ile WebP dönüşümü
npm install -g sharp-cli

# Tüm JPG'leri WebP'ye çevir
sharp input.jpg -o output.webp -q 85

# Bulk conversion
for file in *.jpg; do sharp "$file" -o "${file%.jpg}.webp" -q 85; done
```

### Optimum Ayarlar:

| Format | Kalite | Max Boyut | Kullanım |
|--------|--------|-----------|----------|
| WebP | 80-85% | <200 KB | Modern browsers |
| JPEG | 85% | <300 KB | Fallback |
| PNG | 80% | <100 KB | Logo, transparent |
| SVG | - | <50 KB | Icons, logos |

---

## 📱 RESPONSIVE IMAGES

### Srcset Kullanımı:

```html
<img src="images/products/panjur-800.jpg"
     srcset="images/products/panjur-400.jpg 400w,
             images/products/panjur-800.jpg 800w,
             images/products/panjur-1200.jpg 1200w"
     sizes="(max-width: 600px) 400px,
            (max-width: 1200px) 800px,
            1200px"
     alt="Panjur Sistemleri"
     loading="lazy">
```

### Lazy Loading:

```html
<!-- Otomatik lazy loading -->
<img src="image.jpg" loading="lazy" alt="...">

<!-- JavaScript Intersection Observer (zaten var) -->
<script>
// script.js içinde hazır
</script>
```

---

## 🔍 SEO İÇİN ALT TAGS

### Doğru Kullanım:

✅ **İYİ:**
```html
<img src="panjur.jpg" alt="TOZ Yapı Aluminum Panjur Sistemleri Ankara">
<img src="kepenk.jpg" alt="Otomatik Kepenk Fiyatları İstanbul">
```

❌ **KÖTÜ:**
```html
<img src="panjur.jpg" alt="">
<img src="panjur.jpg" alt="image123.jpg">
<img src="panjur.jpg" alt="panjur panjur panjur">
```

### SEO Best Practices:
- Anahtar kelime kullan (doğal şekilde)
- Lokasyon ekle (Ankara, İstanbul, vb.)
- Ürün özelliği belirt (Otomatik, Aluminum, vb.)
- Max 125 karakter
- Unique alt text her görsel için

---

## ⚡ PERFORMANCE TIPS

### 1. Görsel Boyutları:

| Kullanım | Max Genişlik | Max Boyut | Format |
|----------|--------------|-----------|--------|
| Hero Full-screen | 1920px | 300 KB | WebP |
| Product Card | 800px | 150 KB | WebP |
| Thumbnail | 400px | 50 KB | WebP |
| Logo | 200px | 30 KB | SVG/WebP |
| Icon | 64px | 10 KB | SVG |

### 2. Preload Critical Images:

```html
<head>
  <link rel="preload" as="image" href="images/hero/hero-bg.jpg">
  <link rel="preload" as="image" href="images/logo.png">
</head>
```

### 3. LCP (Largest Contentful Paint) Optimizasyonu:

```html
<!-- Hero image'e fetchpriority ekle -->
<img src="hero-bg.jpg" 
     fetchpriority="high"
     loading="eager"
     alt="...">
```

---

## 📋 CHECKLIST

### Görsel Ekleme Kontrol Listesi:

- [ ] `images/` klasörü oluşturuldu
- [ ] Hero görseli eklendi (`hero-bg.jpg`)
- [ ] 6 ürün kategorisi görseli eklendi
- [ ] Hakkımızda bölümüne ekip/ofis fotoğrafı eklendi
- [ ] Partner logoları WebP formatında eklendi
- [ ] Favicon ve touch icons eklendi
- [ ] Tüm `<img>` tag'lerinde `alt` attribute var
- [ ] Lazy loading aktif (`loading="lazy"`)
- [ ] Responsive srcset kullanıldı (büyük görsellerde)
- [ ] Görseller optimize edildi (WebP, <200 KB)
- [ ] Preload critical images eklendi
- [ ] SEO-friendly alt tags yazıldı

---

## 🛠️ HAZIR GÖRSEL KAYNAKLARI

### Ücretsiz Stok Fotoğraf:

1. **Unsplash.com** - Yüksek kalite, ücretsiz
2. **Pexels.com** - Ticari kullanım serbest
3. **Pixabay.com** - Geniş koleksiyon
4. **Burst.shopify.com** - İş odaklı

### Arama Terimleri:
```
- modern building facade
- aluminum windows
- automatic shutters
- pergola systems
- smart home technology
- construction materials
- architectural details
- contemporary architecture
```

---

## 📞 DESTEK

Görsel optimizasyonu için:
- Squoosh.app: https://squoosh.app
- TinyPNG: https://tinypng.com
- WebP Docs: https://developers.google.com/speed/webp

---

**Son Güncelleme:** 2026-03-22  
**Versiyon:** 1.0.0
