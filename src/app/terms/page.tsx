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
        Última actualización: 19 de febrero de 2026
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
