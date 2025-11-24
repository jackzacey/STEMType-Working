import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-16 bg-bg px-8">
      <h1 className="text-8xl font-bold text-blue animate-pulse-slow drop-shadow-lg">
        STEMType
      </h1>
      <p className="text-2xl text-center max-w-3xl opacity-90 leading-relaxed">
        Boost your typing speed while mastering high school Biology & Chemistry terms
      </p>
      <div className="flex gap-12">
        <Link
          href="/subjects"
          className="rounded-2xl bg-blue px-16 py-7 text-bg text-3xl font-bold hover:scale-110 transition-all duration-300 shadow-lg"
        >
          Start Learning →
        </Link>
      </div>
    </main>
  );
}
