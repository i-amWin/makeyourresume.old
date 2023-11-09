import { useAtom } from "jotai";
import {
  customStylesAtom,
  dataAtom,
  toggleSectionAtom,
} from "@/components/jotai-provider";
import Heading from "../components/heading";
import { Circle } from "lucide-react";

export default function PersonalProfile() {
  const [customStyles] = useAtom(customStylesAtom);
  const [{ personalProfiles }] = useAtom(dataAtom);
  const [toggleSection] = useAtom(toggleSectionAtom);

  if (!toggleSection.personalProfile) return null;

  return (
    <div className="ml-[24pt]">
      <Heading bottomLine={true} mb={14}>
        PERSONAL PROFILE
      </Heading>

      <ul className="w-fit space-y-px pr-[25pt]">
        {personalProfiles?.map((personalProfile, index) => (
          <li key={index} className="flex w-4/5 gap-[12pt] pl-[9pt]">
            <Circle
              fill="currentColor"
              style={{
                color: customStyles.ACCENT_COLOR,
              }}
              size={9}
              className="mt-[3.3pt]"
            />
            <p className="grid w-full grid-cols-3">
              <span className="text-[9pt] font-semibold">
                {personalProfile.fieldName}
              </span>
              <span className="col-span-2 flex text-[9pt]">
                <span className="mx-[4pt]">:</span>
                {personalProfile.fieldValue}
              </span>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
