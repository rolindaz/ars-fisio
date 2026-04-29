import { useState } from "react";
import Section from "../components/Section";

export default function LavoraConNoi() {

  const [submitted, setSubmitted] = useState(false);
  const [selectedFileName, setSelectedFileName] = useState("Nessun file selezionato");

  return (
    <>
      <div className="bg-wwu">
          <div className="container-wwu">
          {/* Header */}
          <div className="header-wwu">
          <h1 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Entra a far parte del nostro team
          </h1>
          <p className="text-[var(--text-info)]">
            Siamo sempre alla ricerca di professionisti determinati con cui avviare una collaborazione duratura. Contattaci!
          </p>
          </div>

          {/* Success message */}
          {submitted ? (
          <div className="bg-white/25 backdrop-blur-md border border-white/40 rounded-2xl p-10 text-center text-gray-800 shadow-md">
            <h2 className="text-2xl font-heading font-bold mb-4">
              Grazie per averci contattato!
            </h2>
            <p className="text-gray-700">
              Il tuo messaggio è stato inviato con successo.  
              Riceverai presto una risposta.
            </p>
          </div>
          ) : (
          /* Form di contatto */
          <form
            name="lavora-con-noi"
            method="POST"
            netlify
            encType="multipart/form-data"
            onSubmit={() => setSubmitted(true)}
            className="form-wwu shadow-md space-y-6"
          >
            {/* Netlify hidden input */}
            {/* <input type="hidden" name="form-name" value="lavora-con-noi" /> */}

            {/* Nome e Cognome */}
            <div className="w-full">
              <label className="label-form-wwu">
                Nome e Cognome *
              </label>
              <input
                type="text"
                name="nome"
                required
                className="input-form-wwu input-corners focus:outline-none focus:ring-2 focus:ring-primary/70 focus:bg-white/60"
              />
            </div>

            {/* Email */}
            <div className="w-full">
              <label className="label-form-wwu">
                Indirizzo Email *
              </label>
              <input
                type="email"
                name="email"
                required
                className="input-form-wwu input-corners focus:outline-none focus:ring-2 focus:ring-primary/70 focus:bg-white/60"
              />
            </div>

            {/* Phone */}
            <div className="w-full">
              <label className="label-form-wwu">
                Numero di Telefono *
              </label>
              <input
                type="tel"
                name="telefono"
                required
                className="input-form-wwu input-corners focus:outline-none focus:ring-2 focus:ring-primary/70 focus:bg-white/60"
              />
            </div>

            {/* Message */}
            <div className="w-full">
              <label className="label-form-wwu">
                Il tuo messaggio *
              </label>
              <textarea
                name="messaggio"
                rows="4"
                required
                className="input-form-wwu input-corners focus:outline-none focus:ring-2 focus:ring-primary/70 focus:bg-white/60"
              ></textarea>
            </div>

            {/* File upload */}
            <div className="w-full">
              <label className="label-form-wwu">
                Carica il tuo CV *
              </label>
              <div className="input-form-wwu input-corners flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <label
                  htmlFor="cv-upload"
                  className="inline-flex w-max cursor-pointer items-center rounded-full border border-white/45 bg-transparent px-4 py-2 text-sm font-medium text-[var(--logo-dark)] shadow-[inset_0_1px_0_rgba(255,255,255,0.24)] transition hover:border-white/70 hover:bg-white/10"
                >
                  Scegli file
                </label>
                <span className="text-sm text-[var(--logo-dark)]/80">{selectedFileName}</span>
              </div>
              <input
                id="cv-upload"
                type="file"
                name="cv"
                /* required */
                onChange={(event) => {
                  const file = event.target.files?.[0];
                  setSelectedFileName(file ? file.name : "Nessun file selezionato");
                }}
                className="sr-only text-logoDark"
              />
            </div>

            {/* Privacy */}
            <div className="w-full">
              <div className="input-form-wwu rounded-md flex justify-center">
                <label className="flex max-w-2xl items-center justify-center gap-3 text-center text-sm text-logoDark">
                  <input
                    type="checkbox"
                    required
                    className="h-4 w-4 shrink-0 accent-[var(--logo-dark)]"
                  />
                  <span>
                    Autorizzo il trattamento dei miei dati personali in conformità con l'
                    <a href="/privacy-policy" className="underline text-logoDark">
                      informativa sulla privacy
                    </a>.
                  </span>
                </label>
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="booking-button booking-button--full mx-auto"
            >
              <span className="booking-button__label">Invia</span>
            </button>
          </form>
          )}
          </div>
      </div>
    </>
    )}