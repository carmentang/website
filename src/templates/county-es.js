import React from "react";
import { PrimaryButton } from "../components/Buttons";
import AppContext from "../components/AppContext";

const County = () => {
  return (
    <AppContext.Consumer>
      {({ appCtx, updateContext }) => (
        <div>
          <p>
            Parece que usted vive en {appCtx.town} en el condado de{" "}
            {appCtx.county}.
          </p>

          <p>
            Puede que {appCtx.town} no tenga protección de renta o desalojo,
            o no usted no sea elegible.
          </p>
          <p>
            Dado que el condado de {appCtx.county} tiene algunas protecciones,
            queremos determinar si usted es elegible para esas protecciones
            proporcionadas por la ley del condado de {appCtx.county}. Si esos no
            aplican, las protecciones estatales en la Ley de Protección de Inquilinos de 2019 aún pueden aplicarle a
            usted.
          </p>

          <p>
            Puede comunicarse con estos recursos útiles en {appCtx.county} para
            determinar si es elegible.
          </p>
          <PrimaryButton to="/es/resources">
            Obtenga ayuda de un grupo adecuado de inquilinos locales.
          </PrimaryButton>

          <p>
            <br />
            ¿Cree no tener control de renta en el condado de {appCtx.county}?
          </p>
          <PrimaryButton to="/es/eligibility/state">
            Verifique su situación en todo el estado de California.
          </PrimaryButton>
        </div>
      )}
    </AppContext.Consumer>
  );
};

export default County;
