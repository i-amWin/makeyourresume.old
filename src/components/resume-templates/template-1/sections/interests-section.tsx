import { LucideIcon, Heart } from "lucide-react";
import { useAtom } from "jotai";
import { customStylesAtom, dataAtom } from "@/components/jotai-provider";
import Heading from "../components/heading";

export default function InterestsSection() {
  const [{ interests }] = useAtom(dataAtom);
  return (
    <div>
      <Heading>Interests</Heading>
      <ul className="flex flex-col gap-[6pt]">
        {interests.map((interest, index) => (
          <li key={index}>
            <InterestText text={interest.name} />
          </li>
        ))}
      </ul>
    </div>
  );
}

function InterestText({ text }: { Icon?: LucideIcon; text: string }) {
  const [customStyles] = useAtom(customStylesAtom);

  return (
    <p className="flex items-center gap-[6pt]">
      <span
        style={{
          color: customStyles.ACCENT_COLOR,
        }}
      >
        {<Heart className="h-[15pt] w-[15pt]" />}
      </span>
      <span className="text-[9pt] capitalize leading-snug">{text}</span>
    </p>
  );
}
