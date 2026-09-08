// src/app/loading.tsx
export default function Loading() {
  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-4 bg-cream-50">
      <span className="font-display text-3xl font-semibold tracking-tight text-anthracite">
        CASANOVA<span className="text-terracotta">.</span>
      </span>
      <div className="h-[3px] w-24 overflow-hidden rounded-full bg-cream-200">
        <div className="h-full w-1/3 animate-[loading_1.2s_ease-in-out_infinite] rounded-full bg-terracotta" />
      </div>
    </div>
  );
}
