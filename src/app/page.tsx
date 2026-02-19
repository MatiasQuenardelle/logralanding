export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6 pt-16">
      <section className="flex max-w-2xl flex-col items-center gap-8 py-32 text-center">
        <h1 className="text-5xl font-bold tracking-tight sm:text-6xl">
          Logra
        </h1>
        <p className="max-w-lg text-lg leading-relaxed text-gray-600">
          Track your goals and build better habits. A simple, focused app to
          help you stay on track and achieve what matters most.
        </p>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 rounded-xl bg-black px-8 py-4 text-white transition-transform hover:scale-105 active:scale-95"
        >
          <svg
            viewBox="0 0 384 512"
            className="h-8 w-8 fill-current"
            aria-hidden="true"
          >
            <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
          </svg>
          <div className="flex flex-col items-start leading-tight">
            <span className="text-xs">Download on the</span>
            <span className="text-xl font-semibold">App Store</span>
          </div>
        </a>
      </section>
    </div>
  );
}
