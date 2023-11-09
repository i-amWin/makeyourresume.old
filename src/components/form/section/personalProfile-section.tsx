// IMPORTS FROM PACKAGES
import { Control, useFieldArray } from "react-hook-form";
import { Plus, Trash2 } from "lucide-react";
import { useAtom } from "jotai";

// IMPORTS FROM FILES
import { TFormSchema, toggleSectionAtom } from "@/components/jotai-provider";

// IMPORTS FROM UI LIBRARY COMPONENTS
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

// IMPORTS FROM (CUSTOM) COMPONENTS
import Heading from "../components/heading";
import SectionToggler from "../components/section-toggler";

interface PersonalProfileSectionProps {
  control: Control<TFormSchema>;
  goNext?: () => void;
  goPrev?: () => void;
}

export default function PersonalProfileSection({
  control,
  goPrev,
}: PersonalProfileSectionProps) {
  const [toggleSection] = useAtom(toggleSectionAtom);
  const {
    fields: personalProfileFields,
    append: appendPersonalProfileField,
    remove: removePersonalProfileField,
  } = useFieldArray({
    control: control,
    name: "personalProfiles",
  });

  return (
    <>
      <Heading className="flex flex-wrap justify-between gap-4">
        <span>Personal Profile</span>
        <SectionToggler
          sectionName="personalProfile"
          register={() => control.register("personalProfiles")}
          unregister={() => control.unregister("personalProfiles")}
          appendField={() =>
            appendPersonalProfileField({ fieldName: "", fieldValue: "" })
          }
        />
      </Heading>

      <div className="space-y-6">
        {toggleSection.personalProfile && (
          <>
            <ul className="space-y-3">
              {personalProfileFields.map((personalProfileField, index) => (
                <li
                  key={personalProfileField.id}
                  className="flex flex-wrap items-end gap-x-2 gap-y-4"
                >
                  {/* LABEL: FIELD NAME */}
                  <FormField
                    control={control}
                    name={`personalProfiles.${index}.fieldName` as const}
                    render={({ field }) => (
                      <FormItem className="w-full max-w-xs">
                        <FormLabel>Field {index + 1}</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter the field name"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* LABEL: FIELD VALUE */}
                  <FormField
                    control={control}
                    name={`personalProfiles.${index}.fieldValue` as const}
                    render={({ field }) => (
                      <FormItem className="w-full max-w-xs">
                        <FormControl>
                          <Input
                            placeholder="Enter the field value"
                            {...field}
                          />
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
                        removePersonalProfileField(index);
                      }}
                    >
                      <Trash2 />
                      <span className="sr-only">
                        Remove personal Profile Field
                      </span>
                    </Button>
                  )}
                </li>
              ))}
            </ul>
            <Separator />
            <Button
              type="button"
              size="icon"
              variant="secondary"
              onClick={(e) => {
                appendPersonalProfileField({ fieldName: "", fieldValue: "" });
              }}
            >
              <Plus />
              <span className="sr-only">Add a personal Profile Field </span>
            </Button>{" "}
          </>
        )}

        <Separator />

        <div className="flex flex-wrap gap-4">
          <Button onClick={goPrev}>Previous (Projects)</Button>
          <Button className="ml-auto" type="submit">
            Save
          </Button>
        </div>
      </div>
    </>
  );
}
