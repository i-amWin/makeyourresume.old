import { useAtom } from "jotai";
import { customStylesAtom, dataAtom } from "@/components/jotai-provider";
import Heading from "../components/heading";
import { Circle } from "lucide-react";

export default function EducationSection() {
  const [customStyles] = useAtom(customStylesAtom);
  const [{ educations }] = useAtom(dataAtom);

  return (
    <div className="ml-[24pt]">
      <Heading bottomLine={true} mb={14}>
        Education
      </Heading>

      <ul className="flex flex-col gap-[9pt] pr-[25pt]">
        {educations.map((education, index) => (
          <li key={index} className="flex gap-[12pt] pl-[9pt]">
            <Circle
              fill="currentColor"
              style={{
                color: customStyles.ACCENT_COLOR,
              }}
              size={9}
              className="mt-[3.3pt]"
            />
            <div>
              <h3
                className="text-[12pt] font-semibold leading-[1.1]"
                style={{
                  color: customStyles.ACCENT_COLOR,
                }}
              >
                {education.name}
              </h3>
              <p className="text-[9pt] leading-snug">{education.college}</p>
              <p
                className="text-[7pt]"
                style={{
                  color: customStyles.ACCENT_COLOR,
                }}
              >
                {education.from + " - " + education.to}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
