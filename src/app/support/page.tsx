import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Soporte - Logra",
};

export default function Support() {
  return (
    <div className="mx-auto max-w-3xl px-6 pt-32 pb-20">
      <h1 className="text-4xl font-bold tracking-tight text-foreground">
        Soporte
      </h1>
      <p className="mt-4 text-lg text-muted">
        Estamos aquí para ayudarte. Comunícate con nosotros con cualquier
        pregunta, comentario o problema.
      </p>

      <div className="mt-12 space-y-10">
        <section className="rounded-2xl border border-border bg-surface p-8">
          <h2 className="text-xl font-semibold text-foreground">Contáctanos</h2>
          <p className="mt-3 text-muted">
            La forma más rápida de obtener ayuda es escribirnos directamente por
            correo electrónico. Generalmente respondemos dentro de 24 horas.
          </p>
          <a
            href="mailto:support@logra.app"
            className="mt-4 inline-block rounded-lg border border-copper/30 bg-copper/10 px-6 py-3 text-sm font-medium text-copper-light transition-all hover:scale-105 hover:border-copper/50 hover:bg-copper/20 active:scale-95"
          >
            Envía un correo a support@logra.app
          </a>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-foreground">
            Preguntas Frecuentes
          </h2>
          <div className="mt-6 space-y-6">
            <div className="rounded-xl border border-border bg-surface p-6">
              <h3 className="font-medium text-foreground">
                ¿Cómo creo un nuevo objetivo?
              </h3>
              <p className="mt-2 text-muted">
                Toca el botón &quot;+&quot; en la pantalla de inicio para crear
                un nuevo objetivo. Puedes establecer un título, descripción y
                fecha objetivo.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-surface p-6">
              <h3 className="font-medium text-foreground">
                ¿Mis datos se almacenan en la nube?
              </h3>
              <p className="mt-2 text-muted">
                Por defecto, todos tus datos se almacenan localmente en tu
                dispositivo. Tus objetivos, hábitos y progreso permanecen
                privados y bajo tu control.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-surface p-6">
              <h3 className="font-medium text-foreground">
                ¿Cómo elimino mis datos?
              </h3>
              <p className="mt-2 text-muted">
                Puedes eliminar objetivos y hábitos individuales desde dentro de
                la app. Para eliminar todos los datos, simplemente desinstala la
                app de tu dispositivo.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-surface p-6">
              <h3 className="font-medium text-foreground">
                ¿Es Logra gratuita?
              </h3>
              <p className="mt-2 text-muted">
                Logra es gratuita para descargar y usar. Es posible que algunas
                funciones premium estén disponibles a través de compras dentro de
                la app en el futuro.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
