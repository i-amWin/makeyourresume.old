import { ReactNode } from "react";
import { useAtom } from "jotai";
import { customStylesAtom } from "@/components/jotai-provider";
import { cn } from "@/lib/utils";

export default function Heading({
  children,
  bottomLine = false,
  mb = 5,
  className,
}: {
  children: ReactNode;
  bottomLine?: boolean;
  mb?: number;
  className?: string;
}) {
  const [customStyles] = useAtom(customStylesAtom);

  return (
    <h2
      className={cn(
        "text-[14pt] font-extrabold uppercase",
        bottomLine && "relative pl-[9pt]",
        className,
      )}
      style={{
        color: customStyles.ACCENT_COLOR,
        marginBottom: `${mb}pt`,
      }}
    >
      {children}
      {bottomLine && (
        <span
          className="absolute left-0 top-[105%] block h-[1pt] w-full"
          style={{
            backgroundColor: customStyles.ACCENT_COLOR,
          }}
        />
      )}
    </h2>
  );
}
