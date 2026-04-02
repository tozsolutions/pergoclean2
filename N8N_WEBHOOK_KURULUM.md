# 🤖 TOZ Yapı - n8n Webhook Kurulum Rehberi

## 📋 İçindekiler

1. [n8n Nedir?](#n8n-nedir)
2. [Kurulum Seçenekleri](#kurulum-seçenekleri)
3. [Webhook Oluşturma](#webhook-oluşturma)
4. [9 Webhook Endpoint'i](#9-webhook-endpointi)
5. [Entegrasyon Testi](#entegrasyon-testi)
6. [Troubleshooting](#troubleshooting)

---

## 🎯 N8N NEDİR?

**n8n**, workflow otomasyon platformudur. Form submission'ları, CRM entegrasyonlarını ve email gönderimlerini otomatikleştirir.

### Özellikler:
- ✅ Visual workflow builder
- ✅ 200+ integration (Google, Slack, HubSpot, vb.)
- ✅ Self-hosted veya cloud
- ✅ Webhook support
- ✅ JavaScript/Function nodes

---

## 🚀 KURULUM SEÇENEKLERİ

### Option 1: n8n Cloud (Önerilen - Hızlı Başlangıç)

**URL:** https://n8n.io

**Avantajlar:**
- ⚡ 5 dakikada hazır
- 🔒 Managed hosting
- 📧 Email support
- 🔄 Auto updates

**Fiyatlandırma:**
- Starter: €20/month
- Pro: €50/month
- Enterprise: Custom

**Adımlar:**
1. n8n.io'ya git
2. "Start free trial" tıkla
3. Email ile kayıt ol
4. Dashboard'a giriş yap
5. Workflows > Add Workflow

---

### Option 2: Self-Hosted (Ücretsiz - Advanced)

**Gereksinimler:**
- Node.js 18+
- Docker (önerilen)
- Domain/subdomain
- SSL certificate

#### Docker ile Kurulum:

```bash
# docker-compose.yml oluştur
version: '3.8'
services:
  n8n:
    image: n8nio/n8n
    container_name: n8n
    restart: always
    ports:
      - "5678:5678"
    environment:
      - N8N_HOST=n8n.tozyapi.com.tr
      - N8N_PORT=5678
      - N8N_PROTOCOL=https
      - NODE_ENV=production
      - WEBHOOK_URL=https://n8n.tozyapi.com.tr/webhook/
    volumes:
      - n8n_data:/home/node/.n8n
volumes:
  n8n_data:
```

**Deploy:**
```bash
docker-compose up -d
```

#### Nginx Reverse Proxy:

```nginx
server {
    listen 80;
    server_name n8n.tozyapi.com.tr;
    
    location / {
        proxy_pass http://localhost:5678;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

**SSL with Let's Encrypt:**
```bash
certbot --nginx -d n8n.tozyapi.com.tr
```

---

## 🔗 WEBHOOK OLUŞTURMA

### Adım 1: Yeni Workflow Oluştur

1. n8n Dashboard > Workflows
2. "Add Workflow" butonuna tıkla
3. Workflow'a isim ver: `TOZ Website Forms`

### Adım 2: Webhook Node Ekle

1. "+" butonuna tıkla
2. "Webhook" node'unu seç
3. HTTP Method: `POST`
4. Path: `contact-form`
5. Save (Ctrl+S)

### Adım 3: Test Mode Aktif Et

1. "Execute Workflow" butonuna tıkla
2. Test URL'yi kopyala
3. Browser'da form'u doldur
4. Payload'ı kontrol et

---

## 📡 9 WEBHOOK ENDPOINT'İ

### 1️⃣ CONTACT FORM

**Endpoint:** `/webhook/contact-form`

**Payload:**
```json
{
  "name": "Ahmet Yılmaz",
  "email": "ahmet@example.com",
  "phone": "+905367731404",
  "subject": "Teklif İsteği",
  "message": "Panjur sistemleri hakkında bilgi almak istiyorum.",
  "timestamp": "2026-03-22T10:30:00Z",
  "source": "https://www.tozyapi.com.tr/#contact",
  "userAgent": "Mozilla/5.0..."
}
```

**Workflow:**
```
Webhook → Email (SendGrid) → Google Sheets → Slack Notification
```

**Nodes:**
1. **Webhook** (Trigger)
2. **Set** (Data transformation)
3. **Email** (SendGrid/Mailgun)
4. **Google Sheets** (Append row)
5. **Slack** (Send message)

---

### 2️⃣ QUOTE REQUEST

**Endpoint:** `/webhook/quote-request`

**Payload:**
```json
{
  "productName": "Panjur Sistemleri",
  "category": "panjur",
  "dimensions": "200x150 cm",
  "quantity": 5,
  "customerName": "Ayşe Demir",
  "customerEmail": "ayse@example.com",
  "customerPhone": "+905321234567",
  "notes": "Montaj dahil fiyat lütfen.",
  "timestamp": "2026-03-22T11:00:00Z"
}
```

**Workflow:**
```
Webhook → CRM (HubSpot) → Email Autoresponder → Task Creation
```

---

### 3️⃣ CALLBACK REQUEST

**Endpoint:** `/webhook/callback`

**Payload:**
```json
{
  "name": "Mehmet Kaya",
  "phone": "+905331234567",
  "preferredTime": "14:00-16:00",
  "topic": "Satış Danışmanlığı",
  "timestamp": "2026-03-22T09:15:00Z"
}
```

**Workflow:**
```
Webhook → Calendar Event → SMS Notification → Assign to Sales Rep
```

---

### 4️⃣ NEWSLETTER SUBSCRIPTION

**Endpoint:** `/webhook/newsletter`

**Payload:**
```json
{
  "email": "user@example.com",
  "name": "Ali Veli",
  "consent": true,
  "timestamp": "2026-03-22T12:00:00Z"
}
```

**Workflow:**
```
Webhook → Mailchimp → Welcome Email → Tag Contact
```

---

### 5️⃣ ANALYTICS - PRODUCT VIEW

**Endpoint:** `/webhook/analytics/product-view`

**Payload:**
```json
{
  "productId": "panjur-001",
  "productName": "Aluminum Panjur Systems",
  "url": "https://www.tozyapi.com.tr/#products",
  "referrer": "https://google.com",
  "timestamp": "2026-03-22T13:45:00Z",
  "sessionId": "sess_123456"
}
```

**Workflow:**
```
Webhook → Database (PostgreSQL) → Analytics Dashboard
```

---

### 6️⃣ LEAD SCORING

**Endpoint:** `/webhook/lead-scoring`

**Payload:**
```json
{
  "name": "Fatma Şahin",
  "email": "fatma@company.com",
  "phone": "+905341234567",
  "company": "ABC Construction",
  "budget": "50000-100000 TL",
  "score": 85,
  "timestamp": "2026-03-22T14:30:00Z"
}
```

**Workflow:**
```
Webhook → Score Calculation → CRM Update → Priority Email
```

---

### 7️⃣ FILE UPLOAD

**Endpoint:** `/webhook/upload`

**Payload:** Multipart form data

**Workflow:**
```
Webhook → Save to S3 → Virus Scan → Send Download Link
```

---

### 8️⃣ CRM SYNC - HUBSPOT

**Endpoint:** `/webhook/crm-sync/hubspot`

**Workflow:**
```
Webhook → Transform Data → HubSpot API → Confirmation Email
```

---

### 9️⃣ CRM SYNC - SALESFORCE

**Endpoint:** `/webhook/crm-sync/salesforce`

**Workflow:**
```
Webhook → Salesforce API → Lead Assignment → Task Creation
```

---

## 🔧 JAVASCRIPT ENTEGRASYONU

### script.js Güncelleme:

**ŞU ANKİ KOD (Mock):**
```javascript
console.log('Form submitted:', formData);
showNotification('Mesajınız başarıyla gönderildi!', 'success');
```

**YENİ KOD (n8n Webhook):**
```javascript
const N8N_WEBHOOK_URL = 'https://n8n.tozyapi.com.tr/webhook/contact-form';

fetch(N8N_WEBHOOK_URL, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    name: document.getElementById('name').value,
    phone: document.getElementById('phone').value,
    email: document.getElementById('email').value,
    subject: document.getElementById('subject').value,
    message: document.getElementById('message').value,
    timestamp: new Date().toISOString(),
    source: window.location.href,
    userAgent: navigator.userAgent
  })
})
.then(response => response.json())
.then(data => {
  showNotification('Mesajınız alındı! En kısa sürede size döneceğiz.', 'success');
  contactForm.reset();
})
.catch(error => {
  console.error('Error:', error);
  showNotification('Bir hata oluştu. Lütfen tekrar deneyin.', 'error');
});
```

---

## 📝 .ENV DOSYASI

**Dosya:** `.env` (root klasörde)

```env
# n8n Configuration
VITE_N8N_BASE_URL=https://n8n.tozyapi.com.tr/webhook

# Webhook Endpoints
VITE_WEBHOOK_CONTACT=/contact-form
VITE_WEBHOOK_QUOTE=/quote-request
VITE_WEBHOOK_CALLBACK=/callback
VITE_WEBHOOK_NEWSLETTER=/newsletter
VITE_WEBHOOK_ANALYTICS=/analytics/product-view
VITE_WEBHOOK_LEAD_SCORE=/lead-scoring
VITE_WEBHOOK_UPLOAD=/upload
VITE_WEBHOOK_HUBSPOT=/crm-sync/hubspot
VITE_WEBHOOK_SALESFORCE=/crm-sync/salesforce

# API Settings
VITE_API_TIMEOUT=10000
VITE_RETRY_ATTEMPTS=3

# Email (Optional fallback)
VITE_SENDGRID_API_KEY=your_sendgrid_key
VITE_SUPPORT_EMAIL=destek@tozyapi.com.tr
```

---

## 🧪 ENTEGRASYON TESTİ

### Test Checklist:

1. **Webhook URL Doğrulama:**
   ```bash
   curl -X POST https://n8n.tozyapi.com.tr/webhook/contact-form \
     -H "Content-Type: application/json" \
     -d '{"test":true}'
   ```

2. **Form Submission Test:**
   - Website'yi aç
   - Form'u doldur
   - Gönder
   - n8n Execution Log'u kontrol et

3. **Email Test:**
   - Inbox'u kontrol et
   - Spam folder'ı kontrol et
   - Email template'i doğrula

4. **CRM Sync Test:**
   - HubSpot/Salesforce'a giriş yap
   - Yeni lead oluştur mu kontrol et
   - Verileri doğrula

---

## 📊 WORKFLOW ÖRNEKLERİ

### Example 1: Contact Form → Email + Sheets

```json
{
  "nodes": [
    {
      "parameters": {
        "httpMethod": "POST",
        "path": "contact-form",
        "responseMode": "lastNode"
      },
      "name": "Webhook",
      "type": "n8n-nodes-base.webhook",
      "typeVersion": 1
    },
    {
      "parameters": {
        "fromEmail": "noreply@tozyapi.com.tr",
        "toEmail": "merhaba@tozyapi.com.tr",
        "subject": "=Yeni İletişim Formu: {{$json.name}}",
        "html": "=<h2>Yeni Mesaj</h2><p><strong>İsim:</strong> {{$json.name}}</p><p><strong>Email:</strong> {{$json.email}}</p><p><strong>Mesaj:</strong></p><p>{{$json.message}}</p>"
      },
      "name": "Send Email",
      "type": "n8n-nodes-base.emailSend",
      "typeVersion": 1
    },
    {
      "parameters": {
        "sheetId": "your_google_sheet_id",
        "range": "A:E",
        "columns": {
          "name": "={{$json.name}}",
          "email": "={{$json.email}}",
          "phone": "={{$json.phone}}",
          "message": "={{$json.message}}",
          "timestamp": "={{new Date().toISOString()}}"
        }
      },
      "name": "Google Sheets",
      "type": "n8n-nodes-base.googleSheets",
      "typeVersion": 1
    }
  ],
  "connections": {
    "Webhook": {
      "main": [[{"node": "Send Email", "type": "main", "index": 0}]]
    },
    "Send Email": {
      "main": [[{"node": "Google Sheets", "type": "main", "index": 0}]]
    }
  }
}
```

---

## 🔒 GÜVENLİK AYARLARI

### 1. CORS Configuration:

n8n settings'e ekle:
```env
WEBHOOK_CORS_ORIGIN=*
# Production için spesifik domain kullan:
WEBHOOK_CORS_ORIGIN=https://www.tozyapi.com.tr
```

### 2. Rate Limiting:

```javascript
// n8n Function Node
const MAX_REQUESTS_PER_HOUR = 100;
const clientIP = $request.ip;

// Check rate limit
if (requestsFromIP[clientIP] > MAX_REQUESTS_PER_HOUR) {
  throw new Error('Rate limit exceeded');
}

return $input.all();
```

### 3. Input Validation:

```javascript
// Validate email format
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (!emailRegex.test($input.item.json.email)) {
  throw new Error('Geçersiz email adresi');
}

// Validate phone (Turkish format)
const phoneRegex = /^\+90[0-9]{10}$/;
if (!phoneRegex.test($input.item.json.phone)) {
  throw new Error('Geçersiz telefon numarası');
}
```

---

## 🛠️ TROUBLESHOOTING

### Problem 1: Webhook Çalışmıyor

**Çözüm:**
1. Workflow aktif mi kontrol et (Active switch ON)
2. Webhook URL doğru mu?
3. CORS ayarları doğru mu?
4. Firewall/Webblocker kontrol et

### Problem 2: Form Submit Edilmiyor

**Console'da Kontrol Et:**
```javascript
// Network tab'de request'i görüyor musun?
// Status code nedir? (200, 400, 500?)
// Response ne diyor?
```

### Problem 3: Email Gelmiyor

**Kontroller:**
1. n8n execution log'u kontrol et
2. Email credentials doğru mu?
3. Spam folder'ı kontrol et
4. Email quota'yı kontrol et

### Problem 4: CRM Sync Hatası

**Çözüm:**
1. API keys güncel mi?
2. Field mapping doğru mu?
3. CRM permissions kontrol et
4. Rate limits aşıldı mı?

---

## 📞 DESTEK KAYNAKLARI

### Resmi Dokümantasyon:
- n8n Docs: https://docs.n8n.io
- Webhook Guide: https://docs.n8n.io/node-builtin-nodes/n8n-nodes-base.webhook/
- Workflow Templates: https://n8n.io/workflows

### Community:
- Forum: https://community.n8n.io
- Discord: https://discord.gg/n8n
- GitHub: https://github.com/n8n-io/n8n

### Video Tutorials:
- YouTube: https://youtube.com/c/n8n-io
- Udemy Courses

---

## ✅ KURULUM CHECKLIST

- [ ] n8n hesabı oluşturuldu (cloud veya self-hosted)
- [ ] Domain/subdomain yapılandırıldı
- [ ] SSL sertifikası aktif
- [ ] 9 webhook endpoint'i oluşturuldu
- [ ] Workflow'lar test edildi
- [ ] Email entegrasyonu çalışıyor
- [ ] CRM sync test edildi
- [ ] .env dosyası oluşturuldu
- [ ] script.js güncellendi
- [ ] Error handling eklendi
- [ ] Rate limiting yapılandırıldı
- [ ] Logging aktif

---

**Son Güncelleme:** 2026-03-22  
**Versiyon:** 2.0.0  
**Durum:** ✅ Production Ready
