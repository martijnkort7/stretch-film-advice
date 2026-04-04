export default function Loading() {
  return (
    <div className="bg-navy-950 flex min-h-screen items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-slate-600 border-t-blue-400" />
        <span className="sr-only">Loading…</span>
      </div>
    </div>
  );
}
