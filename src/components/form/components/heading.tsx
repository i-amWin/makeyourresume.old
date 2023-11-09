import { cn } from "@/lib/utils";

interface HeadingProps {
  children: React.ReactNode;
  className?: string;
}

export default function Heading({ children, className }: HeadingProps) {
  return (
    <h2 className={cn("mb-4 text-3xl font-bold leading-none", className)}>
      {children}
    </h2>
  );
}
