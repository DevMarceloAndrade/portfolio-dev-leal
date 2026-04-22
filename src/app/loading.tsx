export default function Loading() {
  return (
    <div className="section-shell flex min-h-[45vh] items-center justify-center">
      <div className="relative h-20 w-20">
        <div className="absolute inset-0 rounded-full border-4 border-[var(--stroke)] border-t-transparent" />
        <div className="absolute inset-2 animate-spin rounded-full border-4 border-[var(--accent)] border-b-transparent" />
      </div>
    </div>
  );
}
