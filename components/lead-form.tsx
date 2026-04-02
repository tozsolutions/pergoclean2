"use client";

import { useState } from "react";

type Field = {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  options?: string[];
};

export function LeadForm({
  endpoint,
  submitLabel,
  fields,
  extraText
}: {
  endpoint: string;
  submitLabel: string;
  fields: Field[];
  extraText?: string;
}) {
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(formData: FormData) {
    setIsLoading(true);
    setMessage("");
    try {
      const payload = Object.fromEntries(formData.entries());
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.message || "Gönderim başarısız.");
      setMessage("Talebiniz alındı. Size en kısa sürede dönüş yapılacak.");
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Bir hata oluştu.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <form action={handleSubmit} className="grid" style={{ gap: 14 }}>
      {fields.map((field) =>
        field.options ? (
          <label key={field.name}>
            <span style={{ display: "block", marginBottom: 8, fontWeight: 700 }}>{field.label}</span>
            <select className="select" name={field.name} required={field.required}>
              {field.options.map((option) => <option key={option} value={option}>{option}</option>)}
            </select>
          </label>
        ) : field.type === "textarea" ? (
          <label key={field.name}>
            <span style={{ display: "block", marginBottom: 8, fontWeight: 700 }}>{field.label}</span>
            <textarea className="textarea" name={field.name} required={field.required} />
          </label>
        ) : (
          <label key={field.name}>
            <span style={{ display: "block", marginBottom: 8, fontWeight: 700 }}>{field.label}</span>
            <input className="input" name={field.name} type={field.type || "text"} required={field.required} />
          </label>
        )
      )}
      <button className="btn btn-accent" type="submit" disabled={isLoading}>
        {isLoading ? "Gönderiliyor..." : submitLabel}
      </button>
      {extraText ? <p className="form-note">{extraText}</p> : null}
      {message ? <p className="form-note"><strong>{message}</strong></p> : null}
    </form>
  );
}
