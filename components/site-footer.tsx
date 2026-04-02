import Image from "next/image";
import { siteConfig } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <Image
              src="/assets/PergoClean24_02.26_1.png"
              alt="PergoClean footer logo"
              width={120}
              height={58}
              style={{ height: 58, width: "auto", marginBottom: 16 }}
            />
            <p style={{ maxWidth: 340, color: "rgba(255,255,255,.88)", lineHeight: 1.7 }}>
              Türkiye&apos;nin güven veren pergola, rolling roof, bioclimatic, cam tavan, zip perde ve tente temizlik markası.
            </p>
          </div>
          <div>
            <h3>Hizmetler</h3>
            <p><a href="#hizmetler">Pergola Temizliği</a></p>
            <p><a href="#hizmetler">LED Değişimi</a></p>
            <p><a href="#fiyat-hesapla">Fiyat Hesapla</a></p>
          </div>
          <div>
            <h3>Kurumsal</h3>
            <p><a href="#portfolio">Referans İşlerimiz</a></p>
            <p><a href="/blog">Blog</a></p>
            <p><a href="/avrupa-standartlari">Avrupa Standartları</a></p>
          </div>
          <div>
            <h3>İletişim</h3>
            <p>{siteConfig.address}</p>
            <p>{siteConfig.phonePrimary}</p>
            <p>{siteConfig.phoneSecondary}</p>
            <p>{siteConfig.email}</p>
          </div>
        </div>
        <div style={{ marginTop: 36, paddingTop: 20, borderTop: "1px solid rgba(255,255,255,.18)", display: "flex", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
          <small>© 2026 PergoClean. Tüm hakları saklıdır.</small>
          <small>Next.js + Vercel deploy uyumlu proje paketi</small>
        </div>
      </div>
    </footer>
  );
}
