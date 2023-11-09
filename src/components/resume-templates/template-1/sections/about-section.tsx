import { useAtom } from "jotai";
import { customStylesAtom, dataAtom } from "@/components/jotai-provider";

export default function AboutSection() {
  const [customStyles] = useAtom(customStylesAtom);
  const [{ name, title, about }] = useAtom(dataAtom);

  return (
    <div
      className="px-[15pt] py-[8pt] text-white"
      style={{ backgroundColor: customStyles.ACCENT_COLOR }}
    >
      <h1 className="text-[22pt] font-medium leading-none">{name}</h1>
      <p className="relative mb-[3pt] inline-block pr-[6pt] text-[12pt] leading-tight after:absolute after:left-0 after:top-[105%] after:h-px after:w-full after:bg-white">
        {title}
      </p>
      <p className="text-[9pt] leading-snug">{about}</p>
    </div>
  );
}
