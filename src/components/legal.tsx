import type { ReactNode } from "react";
import { infraestructura, legales } from "@/lib/legal";

export function vigencia(doc: keyof typeof legales) {
  const d = legales[doc];
  return `Versión ${d.version} · Vigente desde: ${d.vigencia}`;
}

export function Correo({ children }: { children: string }) {
  return <a href={`mailto:${children}`}>{children}</a>;
}

/** Tabla de dos o más columnas con desplazamiento horizontal en pantallas pequeñas. */
export function Tabla({ cabecera, filas }: { cabecera: string[]; filas: ReactNode[][] }) {
  return (
    <div className="tabla-legal">
      <table>
        <thead>
          <tr>
            {cabecera.map((c) => (
              <th key={c} scope="col">
                {c}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {filas.map((fila, i) => (
            <tr key={i}>
              {fila.map((celda, j) =>
                j === 0 ? (
                  <th key={j} scope="row" data-label={cabecera[0]}>
                    {celda}
                  </th>
                ) : (
                  <td key={j} data-label={cabecera[j]}>
                    {celda}
                  </td>
                ),
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/** Medidas de seguridad: el mismo texto en la Política de Privacidad y en la de Protección de Datos. */
export function MedidasSeguridad() {
  return (
    <>
      <h3>Medidas de Lex Data</h3>
      <p>
        Conexiones cifradas (HTTPS/TLS); cifrado de la información almacenada en los servidores y de las copias de
        seguridad; contraseñas almacenadas de forma protegida (hash); doble factor de autenticación en el software; acceso
        por usuario con privilegios mínimos; registros de acceso; copias de seguridad y separación de la información por
        cliente.
      </p>
      <h3>Medidas del proveedor de infraestructura</h3>
      <p>
        {infraestructura.proveedor}, centro de datos de {infraestructura.ubicacion}, según su documentación pública: sistema
        de gestión de seguridad certificado ISO/IEC 27001:2022 y certificación BSI C5:2020 Tipo 2; control de acceso físico
        con registro y videovigilancia; personal técnico en sitio 24/7; energía y refrigeración redundantes; detección de
        ataques DDoS; discos redundantes; separación lógica o física de los datos de cada cliente; borrado verificado y
        destrucción física de soportes; compromiso de confidencialidad del personal; y revisión anual externa de sus
        medidas.
      </p>
    </>
  );
}
