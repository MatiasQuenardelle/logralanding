import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service - Logra",
};

export default function TermsOfService() {
  return (
    <div className="mx-auto max-w-3xl px-6 pt-32 pb-20">
      <h1 className="text-4xl font-bold tracking-tight">Terms of Service</h1>
      <p className="mt-4 text-sm text-gray-500">
        Last updated: February 19, 2026
      </p>

      <div className="mt-10 space-y-8 text-gray-700 leading-relaxed">
        <section>
          <h2 className="text-xl font-semibold text-gray-900">
            Acceptance of Terms
          </h2>
          <p className="mt-3">
            By downloading, installing, or using Logra (&quot;the App&quot;),
            you agree to be bound by these Terms of Service. If you do not agree
            to these terms, do not use the App.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900">
            Description of Service
          </h2>
          <p className="mt-3">
            Logra is a mobile application designed to help users track goals and
            build habits. The App provides tools for setting goals, tracking
            progress, and maintaining productive routines.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900">Use License</h2>
          <p className="mt-3">
            We grant you a limited, non-exclusive, non-transferable, revocable
            license to use the App for your personal, non-commercial purposes,
            subject to these Terms of Service.
          </p>
          <p className="mt-3">You agree not to:</p>
          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li>Modify, reverse engineer, or decompile the App</li>
            <li>Use the App for any unlawful purpose</li>
            <li>
              Attempt to gain unauthorized access to the App&apos;s systems or
              networks
            </li>
            <li>
              Redistribute, sublicense, or commercially exploit the App
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900">User Content</h2>
          <p className="mt-3">
            You retain ownership of any content you create within the App,
            including goals, habits, and notes. You are solely responsible for
            the content you create.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900">
            Disclaimer of Warranties
          </h2>
          <p className="mt-3">
            The App is provided &quot;as is&quot; and &quot;as available&quot;
            without warranties of any kind, whether express or implied. We do not
            warrant that the App will be uninterrupted, error-free, or free of
            harmful components.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900">
            Limitation of Liability
          </h2>
          <p className="mt-3">
            To the fullest extent permitted by law, Logra and its developers
            shall not be liable for any indirect, incidental, special,
            consequential, or punitive damages arising out of or related to your
            use of the App.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900">Termination</h2>
          <p className="mt-3">
            We may terminate or suspend your access to the App at any time,
            without notice, for conduct that we believe violates these Terms of
            Service or is harmful to other users, us, or third parties.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900">
            Changes to Terms
          </h2>
          <p className="mt-3">
            We reserve the right to modify these Terms of Service at any time. We
            will notify you of any material changes by posting the updated terms
            on this page. Your continued use of the App after changes are posted
            constitutes acceptance of the modified terms.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900">
            Governing Law
          </h2>
          <p className="mt-3">
            These Terms of Service shall be governed by and construed in
            accordance with applicable laws, without regard to conflict of law
            provisions.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900">Contact Us</h2>
          <p className="mt-3">
            If you have any questions about these Terms of Service, please
            contact us at{" "}
            <a
              href="mailto:support@logra.app"
              className="text-black underline underline-offset-4 hover:text-gray-600"
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
