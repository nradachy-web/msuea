import { cn } from "@/lib/utils";

/**
 * The club's EA monogram, vectorized from the official mark.
 * Fills with currentColor so one component covers the white and
 * Spartan green sub-marks from the brand sheet.
 */
export default function EaMark({
  className,
  title,
}: {
  className?: string;
  title?: string;
}) {
  return (
    <svg
      viewBox="0 0 287.4 188.5"
      className={cn("block", className)}
      role={title ? "img" : "presentation"}
      aria-label={title}
      aria-hidden={title ? undefined : true}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M94.6,188.5 L25.6,188.5 L21.3,185.4 L0.0,152.9 L0.1,148.9 L50.6,92.9 L0.0,36.4 L0.0,33.7 L2.2,29.4 L17.1,6.4 L23.4,0.0 L136.6,0.0 L139.0,1.4 L138.6,35.0 L59.6,35.1 L58.1,35.9 L58.4,37.9 L73.8,55.4 L77.9,62.7 L79.1,67.2 L79.0,122.7 L75.8,128.2 L58.4,147.7 L58.2,149.9 L108.9,150.5 L110.9,149.2 L164.6,2.2 L167.6,0.0 L220.1,0.3 L223.3,4.7 L232.5,32.4 L235.3,37.7 L287.4,181.2 L287.3,186.2 L283.9,185.4 L277.3,179.9 L235.9,152.3 L232.7,148.2 L196.2,46.7 L192.9,40.6 L154.0,148.2 L148.0,154.2 L109.4,179.9 L102.9,185.4 L94.6,188.5Z"
      />
    </svg>
  );
}
