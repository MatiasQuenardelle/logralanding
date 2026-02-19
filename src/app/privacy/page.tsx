import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidad - Logra",
};

export default function PrivacyPolicy() {
  return (
    <div className="mx-auto max-w-3xl px-6 pt-32 pb-20">
      <h1 className="text-4xl font-bold tracking-tight text-foreground">
        Política de Privacidad
      </h1>
      <p className="mt-4 text-sm text-muted">
        Última actualización: 19 de febrero de 2026
      </p>

      <div className="mt-10 space-y-8 leading-relaxed text-muted">
        <section>
          <h2 className="text-xl font-semibold text-foreground">
            Introducción
          </h2>
          <p className="mt-3">
            Logra (&quot;nosotros&quot;, &quot;nuestro&quot;, o &quot;nos&quot;)
            está comprometido a proteger tu privacidad. Esta Política de
            Privacidad explica cómo recopilamos, utilizamos y salvaguardamos tu
            información cuando utilizas nuestra aplicación móvil.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">
            Información que Recopilamos
          </h2>
          <p className="mt-3">
            Podemos recopilar los siguientes tipos de información:
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li>
              <strong className="text-foreground">Datos de Uso:</strong>{" "}
              Información sobre cómo utilizas la app, incluidas las funciones
              accedidas y el tiempo dedicado.
            </li>
            <li>
              <strong className="text-foreground">Información del Dispositivo:</strong>{" "}
              Tipo de dispositivo, versión del sistema operativo e
              identificadores únicos del dispositivo.
            </li>
            <li>
              <strong className="text-foreground">Contenido del Usuario:</strong> Objetivos,
              hábitos y cualquier otro contenido que crees dentro de la app.
              Estos datos se almacenan localmente en tu dispositivo.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">
            Cómo Utilizamos Tu Información
          </h2>
          <p className="mt-3">Utilizamos la información que recopilamos para:</p>
          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li>Proporcionar y mantener la app</li>
            <li>Mejorar y personalizar tu experiencia</li>
            <li>Analizar patrones de uso para mejorar nuestras funciones</li>
            <li>Comunicarnos contigo sobre actualizaciones o soporte</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">
            Almacenamiento de Datos
          </h2>
          <p className="mt-3">
            Tu información personal, incluyendo objetivos y hábitos, se almacena
            localmente en tu dispositivo. No almacenamos tu contenido personal
            en servidores externos a menos que explícitamente optes por una
            función de sincronización en la nube.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">
            Servicios de Terceros
          </h2>
          <p className="mt-3">
            Podemos utilizar servicios de terceros para análisis y reportes de
            errores. Estos servicios pueden recopilar información enviada por tu
            dispositivo, incluyendo datos de uso e información del dispositivo.
            Estos servicios de terceros tienen sus propias políticas de
            privacidad que rigen el uso de tu información.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">
            Retención de Datos
          </h2>
          <p className="mt-3">
            Retenemos tu información solo durante el tiempo necesario para
            proporcionarte nuestros servicios. Puedes eliminar tus datos en
            cualquier momento desinstalando la app de tu dispositivo.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">
            Privacidad de Menores
          </h2>
          <p className="mt-3">
            Nuestra app no está destinada a menores de 13 años. No recopilamos
            intencionalmente información personal de menores de 13 años. Si nos
            percatamos de que hemos recopilado información personal de un menor
            de 13 años, tomaremos medidas para eliminar esa información.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">Tus Derechos</h2>
          <p className="mt-3">Tienes derecho a:</p>
          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li>Acceder a los datos personales que tenemos sobre ti</li>
            <li>Solicitar la corrección de datos inexactos</li>
            <li>Solicitar la eliminación de tus datos</li>
            <li>Optar por no participar en la recopilación de datos de análisis</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">
            Cambios a Esta Política
          </h2>
          <p className="mt-3">
            Podemos actualizar esta Política de Privacidad de vez en cuando. Te
            notificaremos de cualquier cambio publicando la nueva Política de
            Privacidad en esta página y actualizando la fecha de &quot;Última
            actualización&quot;.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">Contáctanos</h2>
          <p className="mt-3">
            Si tienes preguntas sobre esta Política de Privacidad, contáctanos
            en{" "}
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
