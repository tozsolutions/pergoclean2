export default function AdminPage() {
  return (
    <main className="section">
      <div className="container">
        <span className="eyebrow">Admin Panel Taslağı</span>
        <h1 className="heading-lg">Webhook URL yönetimi ve otomasyon yapısı</h1>
        <p className="lead">
          Bu kurulumda Vercel deploy mantığına uygun olarak webhook URL&apos;leri environment variable üzerinden yönetilir.
          Kalıcı ve çok kullanıcılı gerçek admin panel için veritabanı gerekir. Bu başlangıç paketi, hızlı deploy ve n8n entegrasyonu
          için güvenli env temelli mimariyle hazırlandı.
        </p>
        <div className="grid" style={{ marginTop: 24 }}>
          <div className="card" style={{ padding: 24 }}>
            <h2 className="heading-md">Tanımlanacak ENV değişkenleri</h2>
            <pre style={{ whiteSpace: "pre-wrap", overflowX: "auto" }}>
QUOTE_WEBHOOK_URL
APPOINTMENT_WEBHOOK_URL
PHOTO_WEBHOOK_URL
CONTACT_WEBHOOK_URL
NOTIFICATION_EMAIL
WHATSAPP_PRIMARY
WHATSAPP_SECONDARY
ADMIN_PANEL_PASSWORD
            </pre>
          </div>
        </div>
      </div>
    </main>
  );
}
