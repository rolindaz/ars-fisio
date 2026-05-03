import LavoraConNoiForm from "../components/LavoraConNoiForm";

export default function LavoraConNoi() {
  return (
    <>
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