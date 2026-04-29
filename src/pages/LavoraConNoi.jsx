import { useState } from "react";
import Section from "../components/Section";

export default function LavoraConNoi() {

  const [submitted, setSubmitted] = useState(false);

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
            data-netlify="true"
            encType="multipart/form-data"
            onSubmit={() => setSubmitted(true)}
            className="form-wwu shadow-md space-y-6"
          >
            {/* Netlify hidden input */}
            <input type="hidden" name="form-name" value="work-with-us" />

            {/* Nome e Cognome */}
            <div className="w-full">
              <label className="label-form-wwu">
                Nome e Cognome *
              </label>
              <input
                type="text"
                name="nome"
                required
                className="input-form-wwu focus:outline-none focus:ring-2 focus:ring-primary/70 focus:bg-white/60"
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
                className="input-form-wwu focus:outline-none focus:ring-2 focus:ring-primary/70 focus:bg-white/60"
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
                className="input-form-wwu focus:outline-none focus:ring-2 focus:ring-primary/70 focus:bg-white/60"
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
                className="input-form-wwu focus:outline-none focus:ring-2 focus:ring-primary/70 focus:bg-white/60"
              ></textarea>
            </div>

            {/* File upload */}
            <div className="w-full">
              <label className="block text-sm font-medium mb-1 text-gray-700">
                Carica il tuo CV *
              </label>
              <input
                type="file"
                name="cv"
                required
                className="w-full text-sm text-gray-700 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:bg-white/50 file:text-gray-800 hover:file:bg-white/70"
              />
            </div>

            {/* Privacy */}
            <div className="flex items-start gap-2 text-sm">
              <input type="checkbox" required className="mt-1" />
              <span>
                Autorizzo il trattamento dei miei dati personali in conformità con l'
                <a href="/privacy-policy" className="underline text-primary">
                  informativa sulla privacy
                </a>.
              </span>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-max mx-auto bg-primary text-white py-3 px-8 rounded-full hover:bg-primary/90 transition font-medium hover:scale-[1.03] shadow-lg"
            >
              Invia
            </button>
          </form>
          )}
          </div>
      </div>
    </>
    )}