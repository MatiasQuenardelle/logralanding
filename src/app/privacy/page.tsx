import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - Logra",
};

export default function PrivacyPolicy() {
  return (
    <div className="mx-auto max-w-3xl px-6 pt-32 pb-20">
      <h1 className="text-4xl font-bold tracking-tight">Privacy Policy</h1>
      <p className="mt-4 text-sm text-gray-500">
        Last updated: February 19, 2026
      </p>

      <div className="mt-10 space-y-8 text-gray-700 leading-relaxed">
        <section>
          <h2 className="text-xl font-semibold text-gray-900">Introduction</h2>
          <p className="mt-3">
            Logra (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is
            committed to protecting your privacy. This Privacy Policy explains
            how we collect, use, and safeguard your information when you use our
            mobile application.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900">
            Information We Collect
          </h2>
          <p className="mt-3">
            We may collect the following types of information:
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li>
              <strong>Usage Data:</strong> Information about how you use the app,
              including features accessed and time spent.
            </li>
            <li>
              <strong>Device Information:</strong> Device type, operating system
              version, and unique device identifiers.
            </li>
            <li>
              <strong>User Content:</strong> Goals, habits, and any other content
              you create within the app. This data is stored locally on your
              device.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900">
            How We Use Your Information
          </h2>
          <p className="mt-3">We use the information we collect to:</p>
          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li>Provide and maintain the app</li>
            <li>Improve and personalize your experience</li>
            <li>Analyze usage patterns to enhance our features</li>
            <li>Communicate with you about updates or support</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900">Data Storage</h2>
          <p className="mt-3">
            Your personal data, including goals and habits, is stored locally on
            your device. We do not store your personal content on external
            servers unless you explicitly opt in to a cloud sync feature.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900">
            Third-Party Services
          </h2>
          <p className="mt-3">
            We may use third-party services for analytics and crash reporting.
            These services may collect information sent by your device, including
            usage data and device information. These third-party services have
            their own privacy policies governing the use of your information.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900">
            Data Retention
          </h2>
          <p className="mt-3">
            We retain your data only for as long as necessary to provide you with
            our services. You can delete your data at any time by removing the
            app from your device.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900">
            Children&apos;s Privacy
          </h2>
          <p className="mt-3">
            Our app is not intended for children under the age of 13. We do not
            knowingly collect personal information from children under 13. If we
            become aware that we have collected personal data from a child under
            13, we will take steps to delete that information.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900">Your Rights</h2>
          <p className="mt-3">You have the right to:</p>
          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li>Access the personal data we hold about you</li>
            <li>Request correction of inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Opt out of analytics data collection</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900">
            Changes to This Policy
          </h2>
          <p className="mt-3">
            We may update this Privacy Policy from time to time. We will notify
            you of any changes by posting the new Privacy Policy on this page and
            updating the &quot;Last updated&quot; date.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900">Contact Us</h2>
          <p className="mt-3">
            If you have any questions about this Privacy Policy, please contact
            us at{" "}
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
