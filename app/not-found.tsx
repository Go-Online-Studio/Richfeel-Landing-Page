import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-50 p-4 text-center">
      <div className="max-w-md rounded-2xl bg-white p-8 shadow-lg border border-slate-100">
        <h2 className="text-4xl font-extrabold text-blue-600 mb-2">404</h2>
        <h3 className="text-xl font-bold text-slate-800 mb-2">Page Not Found</h3>
        <p className="text-slate-600 mb-6 text-sm">The page you are looking for does not exist.</p>
        <Link
          href="/"
          className="inline-block px-6 py-2.5 rounded-full bg-blue-600 text-white font-medium text-sm hover:bg-blue-700 transition"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
