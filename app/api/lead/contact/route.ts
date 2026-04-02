import { NextResponse } from "next/server";
import { postWebhook } from "@/lib/utils";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const requiredFields = ["adSoyad", "telefon", "konu", "mesaj"];
    for (const field of requiredFields) {
      if (!body[field]) {
        return NextResponse.json({ message: `${field} alanı zorunludur.` }, { status: 400 });
      }
    }

    const payload = {
      source: "pergoclean-web",
      type: "contact",
      createdAt: new Date().toISOString(),
      data: body
    };

    await postWebhook(process.env.CONTACT_WEBHOOK_URL, payload);

    return NextResponse.json({
      success: true,
      message: "Mesajınız kaydedildi.",
      payload
    });
  } catch (error) {
    return NextResponse.json(
      { message: error instanceof Error ? error.message : "Sunucu hatası oluştu." },
      { status: 500 }
    );
  }
}
