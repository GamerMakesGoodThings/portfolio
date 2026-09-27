"use client";

interface AuroraProps {
  className?: string;
  opacity?: number;
}

export default function Aurora({
  className = "",
  opacity = 0.6,
}: AuroraProps) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      style={{ opacity }}
      aria-hidden="true"
    >
      {/* Aurora glow container with high blur */}
      <div className="absolute inset-0 filter blur-[90px]">
        {/* Blob 1: Warm amber/sand */}
        <div
          className="absolute -top-[15%] left-[20%] h-[450px] w-[550px] rounded-full animate-aurora-drift-1"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(212, 197, 178, 0.22) 0%, rgba(212, 197, 178, 0.05) 50%, transparent 70%)",
          }}
        />

        {/* Blob 2: Muted stone / platinum */}
        <div
          className="absolute top-[10%] right-[15%] h-[400px] w-[500px] rounded-full animate-aurora-drift-2"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(168, 162, 158, 0.18) 0%, rgba(168, 162, 158, 0.04) 50%, transparent 70%)",
          }}
        />

        {/* Blob 3: Soft ivory core */}
        <div
          className="absolute top-[25%] left-[35%] h-[350px] w-[450px] rounded-full animate-aurora-drift-3"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(232, 228, 222, 0.15) 0%, rgba(232, 228, 222, 0.03) 50%, transparent 70%)",
          }}
        />
      </div>
    </div>
  );
}
