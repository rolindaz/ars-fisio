import { useState } from "react";

const MAX_CV_FILE_SIZE = 8 * 1024 * 1024;

function getFieldErrorMessage(fieldElement) {
  const { name: fieldName, validity, files } = fieldElement;

  if (fieldName === "cv" && files?.[0] && files[0].size > MAX_CV_FILE_SIZE) {
    return "Il file supera il limite di 8 MB.";
  }

  if (!validity.valid) {
    if (validity.valueMissing) {
      switch (fieldName) {
        case "nome":
          return "Inserisci nome e cognome.";
        case "email":
          return "Inserisci l'indirizzo email.";
        case "telefono":
          return "Inserisci il numero di telefono.";
        case "cv":
          return "Carica il tuo CV.";
        case "privacy":
          return "Devi accettare l'informativa sulla privacy per proseguire.";
        default:
          return "Compila questo campo.";
      }
    }

    if (fieldName === "nome" && validity.patternMismatch) {
      return "Inserisci solo lettere, spazi, apostrofi o trattini.";
    }

    if (fieldName === "email" && validity.typeMismatch) {
      return "Inserisci un indirizzo email valido.";
    }

    if (fieldName === "telefono" && validity.patternMismatch) {
      return "Inserisci solo numeri.";
    }
  }

  return "";
}

export default function LavoraConNoiForm() {
  const [selectedFileName, setSelectedFileName] = useState(
    "Nessun file selezionato",
  );
  const [errors, setErrors] = useState({});
  const [touchedFields, setTouchedFields] = useState({});
  const [fieldValues, setFieldValues] = useState({
    nome: "",
    email: "",
    telefono: "",
    messaggio: "",
    cv: false,
    privacy: false,
  });
  const [hasAttemptedSubmit, setHasAttemptedSubmit] = useState(false);

  const updateFieldValue = (fieldElement) => {
    const { name, type, checked, files, value } = fieldElement;

    setFieldValues((currentValues) => ({
      ...currentValues,
      [name]: type === "checkbox"
        ? checked
        : type === "file"
          ? Boolean(files?.length)
          : value,
    }));
  };

  const validateField = (fieldName, fieldElement) => {
    const nextError = getFieldErrorMessage(fieldElement);

    setErrors((currentErrors) => {
      if (!nextError && !currentErrors[fieldName]) {
        return currentErrors;
      }

      return {
        ...currentErrors,
        [fieldName]: nextError,
      };
    });

    return nextError;
  };

  const handleBlur = (event) => {
    const { name } = event.target;

    if (name === "cv") {
      return;
    }

    updateFieldValue(event.target);

    setTouchedFields((currentTouchedFields) => ({
      ...currentTouchedFields,
      [name]: true,
    }));

    validateField(name, event.target);
  };

  const handleChange = (event) => {
    const { name } = event.target;

    updateFieldValue(event.target);

    if (touchedFields[name]) {
      validateField(name, event.target);
    }
  };

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    const formElements = Array.from(form.elements).filter(
      (element) => element instanceof HTMLInputElement || element instanceof HTMLTextAreaElement,
    );

    const nextErrors = {};
    let firstInvalidElement = null;

    formElements.forEach((element) => {
      if (!element.name || element.type === "hidden") {
        return;
      }

      const nextError = getFieldErrorMessage(element);
      nextErrors[element.name] = nextError;

      if (!firstInvalidElement && nextError) {
        firstInvalidElement = element;
      }
    });

    if (firstInvalidElement) {
      event.preventDefault();
      setHasAttemptedSubmit(true);
      setErrors(nextErrors);
      setTouchedFields((currentTouchedFields) => {
        const nextTouchedFields = { ...currentTouchedFields };

        formElements.forEach((element) => {
          if (element.name && element.type !== "hidden") {
            nextTouchedFields[element.name] = true;
          }
        });

        return nextTouchedFields;
      });
      firstInvalidElement.focus();
      return;
    }

    setHasAttemptedSubmit(false);
  };

  const getFieldClassName = (fieldName) => {
    const baseClassName = "input-form-wwu input-corners focus:outline-none focus:ring-2 focus:ring-primary/70 focus:bg-white/60";

    if (hasAttemptedSubmit && errors[fieldName]) {
      return `${baseClassName} form-field-error`;
    }

    if (touchedFields[fieldName] && fieldValues[fieldName] && !errors[fieldName]) {
      return `${baseClassName} form-field-success`;
    }

    return baseClassName;
  };

  const getLabelClassName = (fieldName) => {
    const baseClassName = "label-form-wwu";

    if (hasAttemptedSubmit && errors[fieldName]) {
      return `${baseClassName} label-form-wwu--error`;
    }

    if (touchedFields[fieldName] && fieldValues[fieldName] && !errors[fieldName]) {
      return `${baseClassName} label-form-wwu--success`;
    }

    return baseClassName;
  };

  return (
    <form
      name="lavora-con-noi"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      action="/success.html"
      netlify
      encType="multipart/form-data"
      noValidate
      onSubmit={handleSubmit}
      className="form-wwu shadow-md space-y-6"
    >
      <input type="hidden" name="bot-field" />
      <input type="hidden" name="form-name" value="lavora-con-noi" />
      <input type="hidden" name="redirect" value="/success.html" />

      <div className="w-full">
        <label className={getLabelClassName("nome")} htmlFor="lavora-con-noi-nome">Nome e Cognome *</label>
        <input
          id="lavora-con-noi-nome"
          type="text"
          name="nome"
          required
          autoComplete="name"
          pattern="^[A-Za-zÀ-ÖØ-öø-ÿ'’\-\s]+$"
          title="Inserisci solo lettere, spazi, apostrofi o trattini."
          aria-invalid={Boolean(errors.nome)}
          aria-describedby={errors.nome ? "lavora-con-noi-nome-error" : undefined}
          onBlur={handleBlur}
          onChange={handleChange}
          className={getFieldClassName("nome")}
        />
        {errors.nome ? (
          <p id="lavora-con-noi-nome-error" className="form-wwu-field-error" aria-live="polite">
            {errors.nome}
          </p>
        ) : null}
      </div>

      <div className="w-full">
        <label className={getLabelClassName("email")} htmlFor="lavora-con-noi-email">Indirizzo Email *</label>
        <input
          id="lavora-con-noi-email"
          type="email"
          name="email"
          required
          autoComplete="email"
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "lavora-con-noi-email-error" : undefined}
          onBlur={handleBlur}
          onChange={handleChange}
          className={getFieldClassName("email")}
        />
        {errors.email ? (
          <p id="lavora-con-noi-email-error" className="form-wwu-field-error" aria-live="polite">
            {errors.email}
          </p>
        ) : null}
      </div>

      <div className="w-full">
        <label className={getLabelClassName("telefono")} htmlFor="lavora-con-noi-telefono">Numero di Telefono *</label>
        <input
          id="lavora-con-noi-telefono"
          type="tel"
          name="telefono"
          required
          autoComplete="tel"
          inputMode="numeric"
          pattern="^[0-9]+$"
          title="Inserisci solo numeri."
          aria-invalid={Boolean(errors.telefono)}
          aria-describedby={errors.telefono ? "lavora-con-noi-telefono-error" : undefined}
          onBlur={handleBlur}
          onChange={handleChange}
          className={getFieldClassName("telefono")}
        />
        {errors.telefono ? (
          <p id="lavora-con-noi-telefono-error" className="form-wwu-field-error" aria-live="polite">
            {errors.telefono}
          </p>
        ) : null}
      </div>

      <div className="w-full">
        <label className={getLabelClassName("messaggio")} htmlFor="lavora-con-noi-messaggio">Il tuo messaggio</label>
        <textarea
          id="lavora-con-noi-messaggio"
          name="messaggio"
          rows="4"
          aria-invalid={Boolean(errors.messaggio)}
          aria-describedby={errors.messaggio ? "lavora-con-noi-messaggio-error" : undefined}
          onBlur={handleBlur}
          onChange={handleChange}
          className={getFieldClassName("messaggio")}
        ></textarea>
        {errors.messaggio ? (
          <p id="lavora-con-noi-messaggio-error" className="form-wwu-field-error" aria-live="polite">
            {errors.messaggio}
          </p>
        ) : null}
      </div>

      <div className="w-full">
        <label className={getLabelClassName("cv")} htmlFor="cv-upload">Carica il tuo CV *</label>
        <div className={`input-form-wwu input-corners flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between ${hasAttemptedSubmit && errors.cv ? "form-field-error" : touchedFields.cv && fieldValues.cv && !errors.cv ? "form-field-success" : ""}`.trim()}>
          <label
            htmlFor="cv-upload"
            className={`inline-flex w-max cursor-pointer items-center rounded-full border border-white/45 bg-transparent px-4 py-2 text-sm font-medium text-[var(--logo-dark)] shadow-[inset_0_1px_0_rgba(255,255,255,0.24)] transition hover:border-white/70 hover:bg-white/10 ${hasAttemptedSubmit && errors.cv ? "form-file-button-error" : touchedFields.cv && fieldValues.cv && !errors.cv ? "form-file-button-success" : ""}`.trim()}
          >
            Scegli file (max. 8 MB)
          </label>
          <span className="text-sm text-[var(--logo-dark)]/80">
            {selectedFileName}
          </span>
        </div>
        <input
          id="cv-upload"
          type="file"
          name="cv"
          required
          aria-invalid={Boolean(errors.cv)}
          aria-describedby={errors.cv ? "lavora-con-noi-cv-error" : undefined}
          onChange={(event) => {
            const file = event.target.files?.[0];
            setSelectedFileName(file ? file.name : "Nessun file selezionato");
            setTouchedFields((currentTouchedFields) => ({
              ...currentTouchedFields,
              cv: true,
            }));
            validateField("cv", event.target);
            handleChange(event);
          }}
          className="sr-only text-logoDark"
        />
        {errors.cv ? (
          <p id="lavora-con-noi-cv-error" className="form-wwu-field-error" aria-live="polite">
            {errors.cv}
          </p>
        ) : null}
      </div>

      <div className="w-full">
        <div className={`input-form-wwu rounded-md flex justify-center ${hasAttemptedSubmit && errors.privacy ? "form-field-error" : touchedFields.privacy && fieldValues.privacy && !errors.privacy ? "form-field-success" : ""}`.trim()}>
          <label htmlFor="lavora-con-noi-privacy" className="flex max-w-2xl items-center justify-center gap-3 text-center text-sm text-logoDark">
            <input
              id="lavora-con-noi-privacy"
              type="checkbox"
              name="privacy"
              required
              aria-invalid={Boolean(errors.privacy)}
              aria-describedby={errors.privacy ? "lavora-con-noi-privacy-error" : undefined}
              onBlur={handleBlur}
              onChange={handleChange}
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
        {errors.privacy ? (
          <p id="lavora-con-noi-privacy-error" className="form-wwu-field-error" aria-live="polite">
            {errors.privacy}
          </p>
        ) : null}
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
