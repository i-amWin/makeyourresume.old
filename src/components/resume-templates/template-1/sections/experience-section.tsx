import { useAtom } from "jotai";
import { customStylesAtom, dataAtom } from "@/components/jotai-provider";
import Heading from "../components/heading";
import { Circle, Square } from "lucide-react";

export default function ExperienceSection() {
  const [customStyles] = useAtom(customStylesAtom);
  const [{ experiences }] = useAtom(dataAtom);

  return (
    <div className="ml-[24pt]">
      <Heading bottomLine={true} mb={14}>
        Work Experience
      </Heading>

      <ul className="grid gap-[9pt] pr-[25pt]">
        {experiences?.map((experience, index) => (
          <li key={index} className="flex gap-[12pt] pl-[9pt]">
            <Circle
              fill="currentColor"
              style={{
                color: customStyles.ACCENT_COLOR,
              }}
              size={9}
              className="mt-[3.3pt]"
            />

            <div className="grid flex-1">
              <h3
                className="text-[12pt] font-bold leading-[1.1]"
                style={{
                  color: customStyles.ACCENT_COLOR,
                }}
              >
                {experience.jobTitle}
              </h3>
              <p className="text-[10pt] font-semibold leading-snug">
                {experience.company}
              </p>
              <div className="flex justify-between">
                <p
                  className="text-[8pt] italic leading-snug"
                  style={{
                    color: customStyles.ACCENT_COLOR,
                  }}
                >
                  {experience.startDate + " - " + experience.endDate}
                </p>

                <p
                  className="text-[8pt] italic leading-snug"
                  style={{
                    color: customStyles.ACCENT_COLOR,
                  }}
                >
                  {experience.location}
                </p>
              </div>

              <ul>
                {experience.workResponsibilities.map(
                  ({ responsibility }, index) => (
                    <li key={index} className="flex gap-[6pt]">
                      <Square
                        style={{
                          color: customStyles.ACCENT_COLOR,
                        }}
                        className="mt-[3.3pt]"
                        size={9}
                      />
                      <p className="text-[9pt]">{responsibility}</p>
                    </li>
                  ),
                )}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
