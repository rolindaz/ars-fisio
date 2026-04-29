export default function Success() {
  return (
    <div className="bg-wwu">
      <div className="container-wwu container-wwu--submitted">
        <div className="form-wwu form-wwu--success shadow-md text-center">
          <h1 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-[var(--logo-main)]">
            Grazie per averci scritto.
          </h1>
          <p className="text-gray-700 leading-7">
            Abbiamo ricevuto la tua candidatura con successo.
            Ti ricontatteremo il prima possibile se il tuo profilo sara in linea con le nostre esigenze.
          </p>
        </div>
      </div>
    </div>
  );
}