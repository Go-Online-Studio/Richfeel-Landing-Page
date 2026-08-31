"use client";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-50 p-4 text-center">
      <div className="max-w-md rounded-2xl bg-white p-8 shadow-lg border border-slate-100">
        <h2 className="text-xl font-bold text-slate-800 mb-2">Something went wrong</h2>
        <p className="text-slate-600 mb-6 text-sm">An unexpected error occurred.</p>
        <button
          onClick={() => reset()}
          className="px-6 py-2.5 rounded-full bg-blue-600 text-white font-medium text-sm hover:bg-blue-700 transition"
        >
          Try again
        </button>
      </div>
    </div>
  );
}
