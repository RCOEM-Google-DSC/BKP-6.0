import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#7C0D2B] text-white p-6 text-center">
      <h2 className="text-4xl font-bold font-heading mb-4">Page Not Found</h2>
      <p className="text-amber-100 mb-6">Could not find requested resource</p>
      <Link
        href="/"
        className="px-6 py-2.5 rounded-full bg-white text-zinc-950 font-bold text-sm hover:bg-amber-100 transition-colors"
      >
        Return Home
      </Link>
    </div>
  );
}
