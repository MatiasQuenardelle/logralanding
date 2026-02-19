import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Support - Logra",
};

export default function Support() {
  return (
    <div className="mx-auto max-w-3xl px-6 pt-32 pb-20">
      <h1 className="text-4xl font-bold tracking-tight">Support</h1>
      <p className="mt-4 text-lg text-gray-600">
        We&apos;re here to help. Reach out to us with any questions, feedback,
        or issues.
      </p>

      <div className="mt-12 space-y-10">
        <section className="rounded-2xl border border-gray-200 p-8">
          <h2 className="text-xl font-semibold">Contact Us</h2>
          <p className="mt-3 text-gray-600">
            The fastest way to get help is to email us directly. We typically
            respond within 24 hours.
          </p>
          <a
            href="mailto:support@logra.app"
            className="mt-4 inline-block rounded-lg bg-black px-6 py-3 text-sm font-medium text-white transition-transform hover:scale-105 active:scale-95"
          >
            Email support@logra.app
          </a>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">Frequently Asked Questions</h2>
          <div className="mt-6 space-y-6">
            <div>
              <h3 className="font-medium text-gray-900">
                How do I create a new goal?
              </h3>
              <p className="mt-2 text-gray-600">
                Tap the &quot;+&quot; button on the home screen to create a new
                goal. You can set a title, description, and target date.
              </p>
            </div>
            <div>
              <h3 className="font-medium text-gray-900">
                Is my data stored in the cloud?
              </h3>
              <p className="mt-2 text-gray-600">
                By default, all your data is stored locally on your device. Your
                goals, habits, and progress stay private and under your control.
              </p>
            </div>
            <div>
              <h3 className="font-medium text-gray-900">
                How do I delete my data?
              </h3>
              <p className="mt-2 text-gray-600">
                You can delete individual goals and habits from within the app.
                To delete all data, simply uninstall the app from your device.
              </p>
            </div>
            <div>
              <h3 className="font-medium text-gray-900">
                Is Logra free to use?
              </h3>
              <p className="mt-2 text-gray-600">
                Logra is free to download and use. Some premium features may be
                available through in-app purchases in the future.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
