import { useState } from "react";

export default function LavoraConNoiForm() {
  const [selectedFileName, setSelectedFileName] = useState(
    "Nessun file selezionato",
  );

  return (
    <form
      name="lavora-con-noi"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      action="/success.html"
      netlify
      encType="multipart/form-data"
      className="form-wwu shadow-md space-y-6"
    >
      <input type="hidden" name="bot-field" />
      <input type="hidden" name="form-name" value="lavora-con-noi" />
      <input type="hidden" name="redirect" value="/success.html" />

      <div className="w-full">
        <label className="label-form-wwu">Nome e Cognome *</label>
        <input
          type="text"
          name="nome"
          required
          className="input-form-wwu input-corners focus:outline-none focus:ring-2 focus:ring-primary/70 focus:bg-white/60"
        />
      </div>

      <div className="w-full">
        <label className="label-form-wwu">Indirizzo Email *</label>
        <input
          type="email"
          name="email"
          required
          className="input-form-wwu input-corners focus:outline-none focus:ring-2 focus:ring-primary/70 focus:bg-white/60"
        />
      </div>

      <div className="w-full">
        <label className="label-form-wwu">Numero di Telefono *</label>
        <input
          type="tel"
          name="telefono"
          required
          className="input-form-wwu input-corners focus:outline-none focus:ring-2 focus:ring-primary/70 focus:bg-white/60"
        />
      </div>

      <div className="w-full">
        <label className="label-form-wwu">Il tuo messaggio *</label>
        <textarea
          name="messaggio"
          rows="4"
          required
          className="input-form-wwu input-corners focus:outline-none focus:ring-2 focus:ring-primary/70 focus:bg-white/60"
        ></textarea>
      </div>

      <div className="w-full">
        <label className="label-form-wwu">Carica il tuo CV *</label>
        <div className="input-form-wwu input-corners flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <label
            htmlFor="cv-upload"
            className="inline-flex w-max cursor-pointer items-center rounded-full border border-white/45 bg-transparent px-4 py-2 text-sm font-medium text-[var(--logo-dark)] shadow-[inset_0_1px_0_rgba(255,255,255,0.24)] transition hover:border-white/70 hover:bg-white/10"
          >
            Scegli file (max. 10 MB)
          </label>
          <span className="text-sm text-[var(--logo-dark)]/80">
            {selectedFileName}
          </span>
        </div>
        <input
          id="cv-upload"
          type="file"
          name="cv"
          onChange={(event) => {
            const file = event.target.files?.[0];
            setSelectedFileName(file ? file.name : "Nessun file selezionato");
          }}
          className="sr-only text-logoDark"
        />
      </div>

      <div className="w-full">
        <div className="input-form-wwu rounded-md flex justify-center">
          <label className="flex max-w-2xl items-center justify-center gap-3 text-center text-sm text-logoDark">
            <input
              type="checkbox"
              name="privacy"
              required
              className="h-4 w-4 shrink-0 accent-[var(--logo-dark)]"
            />
            <span>
              Autorizzo il trattamento dei miei dati personali in conformità con
              l'
              <a href="/privacy-policy" className="underline text-logoDark">
                informativa sulla privacy
              </a>
              .
            </span>
          </label>
        </div>
      </div>

      <button
        type="submit"
        className="base-btn btn-primary booking-button--full mx-auto"
      >
        <span className="booking-button__label">Invia</span>
      </button>
    </form>
  );
}
