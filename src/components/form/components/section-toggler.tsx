import { useAtom } from "jotai";
import { toggleSectionAtom } from "@/components/jotai-provider";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

interface SectionTogglerProps {
  sectionName: "experience" | "projects" | "personalProfile";
  unregister: () => void;
  register: () => void;
  appendField: () => void;
}

export default function SectionToggler({
  sectionName,
  unregister,
  register,
  appendField,
}: SectionTogglerProps) {
  const [toggleSection, setToggleSection] = useAtom(toggleSectionAtom);

  function handleToggleClick(value: boolean) {
    setToggleSection((prev) => ({ ...prev, [sectionName]: value }));
    if (value === false) {
      unregister();
    } else {
      register();
      appendField();
    }
  }
  return (
    <div className="flex flex-wrap items-center gap-4">
      <Label htmlFor="toggleExperienceSection">
        {toggleSection[sectionName]
          ? "Click to Remove this Section"
          : "Click to Add this section"}
      </Label>
      <Switch
        id="toggleExperienceSection"
        checked={toggleSection[sectionName]}
        onCheckedChange={handleToggleClick}
      />
    </div>
  );
}
