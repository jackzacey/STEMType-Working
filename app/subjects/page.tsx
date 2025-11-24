import Link from 'next/link';

export default function Subjects() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-16 bg-bg px-8 text-text">
      <h1 className="text-7xl font-bold text-blue animate-pulse-slow drop-shadow-lg">
        Choose Your Subject
      </h1>
      <div className="flex gap-16">
        <Link
          href="/subjects/bio"
          className="rounded-2xl bg-blue px-20 py-10 text-bg text-4xl font-bold hover:scale-110 transition-all duration-300 shadow-2xl"
        >
          Biology
        </Link>
        <Link
          href="/subjects/chem"
          className="rounded-2xl border-4 border-gold px-20 py-10 text-gold text-4xl font-bold hover:bg-gold hover:text-bg transition-all duration-300 shadow-2xl"
        >
          Chemistry (coming)
        </Link>
      </div>
    </main>
  );
}
