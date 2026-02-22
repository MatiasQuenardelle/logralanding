import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Términos de Servicio - Logra",
};

export default function TermsOfService() {
  return (
    <div className="mx-auto max-w-3xl px-6 pt-32 pb-20">
      <h1 className="text-4xl font-bold tracking-tight text-foreground">
        Términos de Servicio
      </h1>
      <p className="mt-4 text-sm text-muted">
        Última actualización: 22 de febrero de 2026
      </p>

      <div className="mt-10 space-y-8 leading-relaxed text-muted">
        <section>
          <h2 className="text-xl font-semibold text-foreground">
            Aceptación de Términos
          </h2>
          <p className="mt-3">
            Al descargar, instalar o usar Logra (&quot;la App&quot;), aceptas
            estar vinculado por estos Términos de Servicio. Si no aceptas estos
            términos, no uses la App.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">
            Descripción del Servicio
          </h2>
          <p className="mt-3">
            Logra es una aplicación móvil diseñada para ayudar a los usuarios a
            rastrear objetivos y construir hábitos. La App proporciona
            herramientas para establecer objetivos, rastrear el progreso y
            mantener rutinas productivas.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">
            Suscripciones y Pagos
          </h2>
          <p className="mt-3">
            Logra ofrece los siguientes planes de suscripción y opciones de
            compra:
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li>
              <strong className="text-foreground">Semanal</strong> —
              Suscripción semanal recurrente
            </li>
            <li>
              <strong className="text-foreground">Mensual</strong> —
              Suscripción mensual recurrente
            </li>
            <li>
              <strong className="text-foreground">Anual</strong> — Suscripción
              anual recurrente
            </li>
            <li>
              <strong className="text-foreground">Vitalicio</strong> — Compra
              única que otorga acceso permanente sin cargos recurrentes
            </li>
          </ul>

          <h3 className="mt-6 text-lg font-semibold text-foreground">
            Pago y Facturación
          </h3>
          <p className="mt-3">
            El pago se cargará a tu cuenta de Apple ID al confirmar la compra.
            Los precios de suscripción se muestran en la app y pueden variar
            según la región y la moneda.
          </p>

          <h3 className="mt-6 text-lg font-semibold text-foreground">
            Renovación Automática
          </h3>
          <p className="mt-3">
            Las suscripciones se renuevan automáticamente a menos que se
            cancelen al menos 24 horas antes del final del período actual. Se
            cobrará la renovación dentro de las 24 horas previas al fin del
            período vigente, al mismo precio de la suscripción original.
          </p>

          <h3 className="mt-6 text-lg font-semibold text-foreground">
            Pruebas Gratuitas
          </h3>
          <p className="mt-3">
            Logra puede ofrecer períodos de prueba gratuita para ciertos planes
            de suscripción. Cualquier porción no utilizada del período de prueba
            gratuita se perderá al comprar una suscripción. Si no cancelas antes
            de que termine la prueba, se te cobrará automáticamente el precio de
            la suscripción.
          </p>

          <h3 className="mt-6 text-lg font-semibold text-foreground">
            Administrar y Cancelar Suscripciones
          </h3>
          <p className="mt-3">
            Puedes administrar o cancelar tus suscripciones en cualquier momento
            desde Ajustes &gt; Apple ID &gt; Suscripciones en tu dispositivo. La
            cancelación se hace efectiva al final del período de facturación
            actual — conservarás el acceso hasta entonces.
          </p>

          <h3 className="mt-6 text-lg font-semibold text-foreground">
            Compra Vitalicia
          </h3>
          <p className="mt-3">
            La opción Vitalicia es una compra única y no recurrente. Otorga
            acceso permanente a todas las funciones premium sin cargos
            adicionales.
          </p>

          <h3 className="mt-6 text-lg font-semibold text-foreground">
            Reembolsos
          </h3>
          <p className="mt-3">
            Las solicitudes de reembolso son gestionadas por Apple de acuerdo
            con sus políticas de reembolso. Logra no procesa reembolsos
            directamente.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">
            Licencia de Uso
          </h2>
          <p className="mt-3">
            Te otorgamos una licencia limitada, no exclusiva, intransferible y
            revocable para usar la App para tus propósitos personales y no
            comerciales, sujeto a estos Términos de Servicio.
          </p>
          <p className="mt-3">Aceptas no:</p>
          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li>Modificar, aplicar ingeniería inversa o descompilar la App</li>
            <li>Usar la App para ningún propósito ilegal</li>
            <li>
              Intentar obtener acceso no autorizado a los sistemas o redes de la
              App
            </li>
            <li>
              Redistribuir, sublicenciar o explotar comercialmente la App
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">
            Contenido del Usuario
          </h2>
          <p className="mt-3">
            Conservas la propiedad de cualquier contenido que crees dentro de la
            App, incluyendo objetivos, hábitos y notas. Eres enteramente
            responsable del contenido que creas.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">
            Descargo de Responsabilidad de Garantías
          </h2>
          <p className="mt-3">
            La App se proporciona &quot;tal cual&quot; y &quot;según
            disponibilidad&quot; sin garantías de ningún tipo, ya sean expresas
            o implícitas. No garantizamos que la App sea ininterrumpida, libre
            de errores o libre de componentes dañinos.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">
            Limitación de Responsabilidad
          </h2>
          <p className="mt-3">
            En la medida máxima permitida por la ley, Logra y sus desarrolladores
            no serán responsables de ningún daño indirecto, incidental, especial,
            consecuente o punitivo que surja de o esté relacionado con tu uso de
            la App.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">
            Terminación
          </h2>
          <p className="mt-3">
            Podemos rescindir o suspender tu acceso a la App en cualquier
            momento, sin aviso previo, por conducta que creamos que viola estos
            Términos de Servicio o es perjudicial para otros usuarios, nosotros
            o terceros.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">
            Cambios a los Términos
          </h2>
          <p className="mt-3">
            Nos reservamos el derecho de modificar estos Términos de Servicio en
            cualquier momento. Te notificaremos de cualquier cambio material
            publicando los términos actualizados en esta página. Tu uso continuo
            de la App después de que se publiquen los cambios constituye una
            aceptación de los términos modificados.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">
            Ley Aplicable
          </h2>
          <p className="mt-3">
            Estos Términos de Servicio se regirán e interpretarán de conformidad
            con las leyes aplicables, sin tener en cuenta las disposiciones de
            conflicto de leyes.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">Contáctanos</h2>
          <p className="mt-3">
            Si tienes preguntas sobre estos Términos de Servicio, contáctanos en{" "}
            <a
              href="mailto:support@logra.app"
              className="text-copper underline underline-offset-4 transition-colors hover:text-copper-light"
            >
              support@logra.app
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
}
