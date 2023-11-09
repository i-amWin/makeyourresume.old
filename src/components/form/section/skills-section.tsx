// IMPORTS FROM PACKAGES
import { Control, useFieldArray } from "react-hook-form";
import { Plus, Trash2 } from "lucide-react";

// IMPORTS FROM FILES
import { TFormSchema } from "@/components/jotai-provider";

// IMPORTS FROM UI LIBRARY COMPONENTS
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

// IMPORTS FROM (CUSTOM) COMPONENTS
import Heading from "../components/heading";

interface SkillsSectionProps {
  control: Control<TFormSchema>;
  goNext?: () => void;
  goPrev?: () => void;
}

export default function SkillsSection({
  control,
  goNext,
  goPrev,
}: SkillsSectionProps) {
  const {
    fields: skillsFields,
    append: appendSkillField,
    remove: removeSkillField,
  } = useFieldArray({
    control,
    name: "skills",
  });

  return (
    <>
      <Heading>Skills</Heading>

      <div className="space-y-6">
        <ul className="space-y-3">
          {skillsFields.map((skillField, index) => (
            <li
              key={skillField.id}
              className="flex flex-wrap items-center gap-2"
            >
              <FormField
                control={control}
                name={`skills.${index}.name` as const}
                render={({ field }) => (
                  <FormItem className="w-full max-w-xs">
                    <FormControl>
                      <Input placeholder="Enter your skills" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {index > 0 && (
                <Button
                  type="button"
                  size="icon"
                  variant="destructive"
                  onClick={(e) => {
                    removeSkillField(index);
                  }}
                >
                  <Trash2 />
                  <span className="sr-only">Remove a skill field.</span>
                </Button>
              )}
            </li>
          ))}
        </ul>

        <Separator />

        <Button
          size="icon"
          type="button"
          variant="secondary"
          onClick={(e) => {
            appendSkillField({ name: "" });
          }}
        >
          <Plus />
          <span className="sr-only">Add a skill field.</span>
        </Button>

        <Separator />

        <div className="flex flex-wrap gap-4">
          <Button onClick={goPrev}>Previous (Socials)</Button>
          <Button className="ml-auto" onClick={goNext}>
            Next (Interests)
          </Button>
        </div>
      </div>
    </>
  );
}
