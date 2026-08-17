import { cn } from "@/lib/utils";

/**
 * Varsity shoulder stripe: the classic athletic two-stripe band,
 * angled to match the notch motif.
 */
export default function StripeBar({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn("h-2.5 w-full", className)}
      style={{
        background:
          "repeating-linear-gradient(115deg, var(--color-kelly) 0 18px, var(--color-forest) 18px 30px, var(--color-mint) 30px 44px, var(--color-forest) 44px 78px)",
      }}
    />
  );
}
