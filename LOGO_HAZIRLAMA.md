# 🎨 TOZ Yapı - Logo Hazırlama ve Yerleştirme Rehberi

## 📐 Logo Spesifikasyonları

### Renk Paleti:
```
TOZ Dark Gray:  #2f3234
TOZ Green:      #00cc33
TOZ Yellow:     #ffde02
White:          #ffffff
```

### Boyutlar:

| Kullanım | Boyut | Format | Dosya Adı |
|----------|-------|--------|-----------|
| Header Logo | 160x40px | SVG/PNG | logo-header.svg |
| Favicon | 32x32px | ICO/PNG | favicon.ico |
| Apple Touch Icon | 180x180px | PNG | apple-touch-icon.png |
| PWA Icon 192 | 192x192px | PNG | icon-192x192.png |
| PWA Icon 512 | 512x512px | PNG | icon-512x512.png |
| Social Media OG | 1200x630px | JPG | og-image.jpg |

---

## 1️⃣ HEADER LOGO OLUŞTURMA

### SVG Logo (Önerilen):

**Dosya:** `images/logo-header.svg`

```xml
<svg width="160" height="40" viewBox="0 0 160 40" 
     xmlns="http://www.w3.org/2000/svg">
  <!-- Icon Box -->
  <rect width="40" height="40" rx="8" fill="#2f3234"/>
  
  <!-- Letter T -->
  <text x="20" y="27" 
        font-family="Arial, sans-serif" 
        font-size="24" 
        font-weight="bold" 
        fill="white" 
        text-anchor="middle">T</text>
  
  <!-- Company Name -->
  <text x="50" y="22" 
        font-family="Arial, sans-serif" 
        font-size="16" 
        font-weight="bold" 
        fill="#2f3234">TOZ YAPI</text>
  
  <!-- Subtitle -->
  <text x="50" y="34" 
        font-family="Arial, sans-serif" 
        font-size="9" 
        fill="#666" 
        text-transform="uppercase" 
        letter-spacing="0.5">TEKNOLOJİLERİ</text>
</svg>
```

### PNG Alternatifi:

Eğer SVG kullanamazsanız, PNG oluşturun:
- Photoshop/Illustrator'da tasarla
- 160x40px boyutunda kaydet
- Transparent background
- `images/logo-header.png` olarak kaydet

---

## 2️⃣ FAVICON OLUŞTURMA

### Online Araçlar:

1. **RealFaviconGenerator.net**
   - Tek yükleme ile tüm formatlar
   - Tüm tarayıcılar için optimize
   - Ücretsiz

2. **Favicon.io**
   - Text to favicon
   - Image to favicon
   - Emoji favicon

### Adımlar:

1. Logo'nu hazırla (512x512px kare)
2. RealFaviconGenerator.net'e yükle
3. Tüm formatları indir
4. `images/icons/` klasörüne koy

### HTML Head'e Ekle:

```html
<head>
  <!-- Standard favicon -->
  <link rel="icon" type="image/x-icon" href="images/icons/favicon.ico">
  
  <!-- Apple Touch Icon -->
  <link rel="apple-touch-icon" sizes="180x180" 
        href="images/icons/apple-touch-icon.png">
  
  <!-- Android Icons -->
  <link rel="icon" type="image/png" sizes="32x32" 
        href="images/icons/icon-32x32.png">
  <link rel="icon" type="image/png" sizes="16x16" 
        href="images/icons/icon-16x16.png">
  
  <!-- Manifest for PWA -->
  <link rel="manifest" href="manifest.json">
</head>
```

---

## 3️⃣ INDEX.HTML'DE LOGO DEĞİŞİKLİĞİ

### ŞU ANKİ KOD (Text Logo):

```html
<div class="logo">
  <div class="logo-icon">T</div>
  <div class="logo-text">
    <span class="logo-title">TOZ YAPI</span>
    <span class="logo-subtitle">TEKNOLOJİLERİ</span>
  </div>
</div>
```

### YENİ KOD (Image Logo):

```html
<div class="logo">
  <a href="/">
    <img src="images/logo-header.svg" 
         alt="TOZ Yapı Teknolojileri Logo"
         width="160"
         height="40"
         style="display: block;">
  </a>
</div>
```

### CSS Güncellemesi:

```css
/* styles.css içinde .logo stilini güncelle */
.logo {
  display: flex;
  align-items: center;
}

.logo img {
  height: 40px;
  width: auto;
}

.logo a {
  display: inline-block;
}
```

---

## 4️⃣ SOCIAL MEDIA OG IMAGE

### Boyut: 1200x630px

### Tasarım:
- Logo ortada veya solda
- "TOZ Yapı Teknolojileri" başlık
- Alt başlık: "Modern Yapı Sistemleri"
- Arka plan: Gradient (#2f3234 → #00cc33)
- İletişim bilgileri (opsiyonel)

### Dosya: `images/og-image.jpg`

### HTML Meta Tags:

```html
<head>
  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://www.tozyapi.com.tr/">
  <meta property="og:title" content="TOZ Yapı Teknolojileri - Modern Yapı Sistemleri">
  <meta property="og:description" content="Panjur, kepenk, pergola ve otomatik kapı sistemlerinde lider marka.">
  <meta property="og:image" content="images/og-image.jpg">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  
  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="TOZ Yapı Teknolojileri">
  <meta name="twitter:description" content="Modern Yapı Sistemleri">
  <meta name="twitter:image" content="images/og-image.jpg">
</head>
```

---

## 5️⃣ LOGO VARYASYONLARI

### Ana Logo Versiyonları:

1. **Primary Logo** (Ana kullanım)
   - Full color
   - Dark gray + green + yellow
   - Header, footer

2. **Monochrome Logo** (Tek renk)
   - All white (dark backgrounds)
   - All black (light backgrounds)
   - Watermarks, stamps

3. **Icon Only** (Sembol)
   - Just the "T" square
   - Favicon, social profile
   - App icons

4. **Horizontal Logo** (Yatay)
   - Icon + text yan yana
   - Header, email signature
   - Business cards

### Dosya İsimlendirme:

```
images/logos/
├── logo-primary.svg       # Ana logo (color)
├── logo-white.svg         # Beyaz versiyon
├── logo-black.svg         # Siyah versiyon
├── logo-icon.svg          # Sadece ikon
├── logo-horizontal.svg    # Yatay layout
└── logo-stacked.svg       # Dikey layout
```

---

## 6️⃣ FOOTER LOGO

### HTML:

```html
<footer class="footer">
  <div class="footer-company">
    <div class="footer-logo">
      <img src="images/logo-white.svg" 
           alt="TOZ Yapı Teknolojileri"
           width="160"
           height="40">
    </div>
    <p>2008'den beri yapı teknolojileri alanında yenilikçi çözümler sunuyoruz.</p>
  </div>
</footer>
```

### CSS:

```css
.footer-logo img {
  filter: brightness(0) invert(1); /* Make it white if needed */
}
```

---

## 7️⃣ RESPONSIVE LOGO

### Mobile Optimization:

```html
<picture>
  <source media="(max-width: 768px)" 
          srcset="images/logo-mobile.svg">
  <source media="(min-width: 769px)" 
          srcset="images/logo-desktop.svg">
  <img src="images/logo-desktop.svg" alt="TOZ Yapı">
</picture>
```

### CSS-only Approach:

```css
.logo img {
  content: url('images/logo-desktop.svg');
}

@media (max-width: 768px) {
  .logo img {
    content: url('images/logo-mobile.svg');
    width: 120px;
    height: 30px;
  }
}
```

---

## 8️⃣ DARK MODE LOGO

### CSS ile Dark Mode:

```css
/* Light mode (default) */
.logo img {
  content: url('images/logo-dark.svg');
}

/* Dark mode */
@media (prefers-color-scheme: dark) {
  .logo img {
    content: url('images/logo-light.svg');
  }
}
```

---

## 9️⃣ ANIMATED LOGO (Optional)

### CSS Animation:

```css
.logo img {
  transition: transform 0.3s ease;
}

.logo:hover img {
  transform: scale(1.05);
}
```

### SVG Animation:

```xml
<svg ...>
  <style>
    .logo-icon {
      animation: pulse 2s infinite;
    }
    
    @keyframes pulse {
      0%, 100% { transform: scale(1); }
      50% { transform: scale(1.05); }
    }
  </style>
  
  <rect class="logo-icon" ... />
</svg>
```

---

## 🔟 LOGO KULLANIM KURALLARI

### ✅ DOĞRU:
- Minimum clear space: 8px etrafında
- Minimum boyut: 40px yükseklik
- Kontrast arka planda kullan
- Vector format (SVG) tercih et

### ❌ YANLIŞ:
- Logo'yu stretch/zoom etme
- Düşük kontrast arka plan
- Renklerini değiştirme (brand guideline dışında)
- Efekt ekleme (shadow, glow, vb.)

---

## 📋 CHECKLIST

Logo yerleştirme kontrol listesi:

- [ ] SVG logo oluşturuldu (`logo-header.svg`)
- [ ] White version oluşturuldu (`logo-white.svg`)
- [ ] Favicon seti oluşturuldu (ICO, PNG)
- [ ] Apple touch icon hazır (180x180)
- [ ] PWA icons hazır (192, 512)
- [ ] OG image oluşturuldu (1200x630)
- [ ] index.html'de logo değiştirildi
- [ ] Footer'da logo güncellendi
- [ ] Responsive logo ayarlandı
- [ ] Dark mode logo hazır (opsiyonel)
- [ ] Tüm logolar optimize edildi
- [ ] Alt tags eklendi

---

## 🛠️ ONLINE LOGO ARAÇLARI

### Logo Oluşturma:
1. **Canva.com** - Free template-based
2. **Looka.com** - AI-powered
3. **Hatchful.shopify.com** - Free business logo

### Logo Optimizasyonu:
1. **SVGOMG.jakearchibald.com** - SVG optimizer
2. **TinyPNG.com** - PNG compression
3. **Squoosh.app** - Format conversion

### Favicon:
1. **RealFaviconGenerator.net**
2. **Favicon.io**
3. **Favicomatic.com**

---

## 📞 DESTEK

Logo tasarımı için profesyonel yardım:
- Fiverr.com
- 99designs.com
- Behance.net
- Dribbble.com

---

**Son Güncelleme:** 2026-03-22  
**Versiyon:** 1.0.0
