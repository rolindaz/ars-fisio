import LavoraConNoiForm from "../components/LavoraConNoiForm";
import PageMeta from "../components/PageMeta";

export default function LavoraConNoi() {
  return (
    <>
      <PageMeta
        title="Lavora Con Noi | Ars Fisio"
        description="Invia la tua candidatura ad Ars Fisio e proponi una collaborazione professionale con il nostro team di fisioterapia a Roma Nord."
      />
      <div className="bg-wwu lavora-con-noi-page">
          <div className="container-wwu">
            <div className="header-wwu">
              <h1 className="text-3xl md:text-[2.5rem] text-logo font-heading font-bold mb-4">
                <span className="block md:inline">
                  Entra a far parte
                </span>
                <span className="block md:ml-2 md:inline">
                  del nostro team
                </span>
              </h1>
              <p className="text-[var(--text-info)] md:text-[1.2rem]">
                Siamo sempre alla ricerca di professionisti determinati con cui avviare una collaborazione duratura. Contattaci!
              </p>
            </div>
          <LavoraConNoiForm />
          </div>
      </div>
    </>
    )
}