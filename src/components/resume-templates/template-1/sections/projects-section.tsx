import { useAtom } from "jotai";
import {
  customStylesAtom,
  dataAtom,
  toggleSectionAtom,
} from "@/components/jotai-provider";
import Heading from "../components/heading";
import { Circle } from "lucide-react";

export default function ProjectsSection() {
  const [customStyles] = useAtom(customStylesAtom);
  const [{ projects }] = useAtom(dataAtom);

  const [toggleSection] = useAtom(toggleSectionAtom);

  if (!toggleSection.projects) return null;

  return (
    <div className="ml-[24pt]">
      <Heading bottomLine={true} mb={14}>
        Projects
      </Heading>

      <ul className="flex flex-col gap-[9pt] pr-[25pt]">
        {projects?.map((project, index) => (
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
                className="leading-[1.1]"
                style={{
                  color: customStyles.ACCENT_COLOR,
                }}
              >
                <span className="text-[12pt] font-semibold">
                  {project.name}
                </span>
                <span className="text-[9pt]"> ({project.liveLink})</span>
              </h3>
              <p className="text-[9pt] leading-snug">{project.description}</p>
              <p className="text-[9pt] leading-snug">
                <span className="font-medium">Source Code: </span>
                <span className="text-blue-500">{project.sourceLink}</span>
              </p>
              <p
                className="text-[8pt] leading-snug"
                style={{
                  color: customStyles.ACCENT_COLOR,
                }}
              >
                {project.tags}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
