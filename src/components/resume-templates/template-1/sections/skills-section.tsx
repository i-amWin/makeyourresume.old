import { useAtom } from "jotai";
import { customStylesAtom, dataAtom } from "@/components/jotai-provider";
import Heading from "../components/heading";

export default function SkillsSection() {
  const [customStyles] = useAtom(customStylesAtom);
  const [{ skills }] = useAtom(dataAtom);

  return (
    <div>
      <Heading>Skills</Heading>
      <ul className="flex flex-wrap gap-[6.5pt]">
        {skills.map((skill, index) => (
          <li
            key={index}
            className="rounded border px-[6pt] py-[1.2pt] text-[9pt] uppercase"
            style={{
              borderColor: `${customStyles.ACCENT_COLOR}80`,
              backgroundColor: `${customStyles.ACCENT_COLOR}10`,
            }}
          >
            {skill.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
