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
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

// IMPORTS FROM (CUSTOM) COMPONENTS
import Heading from "../components/heading";

interface EducationSectionProps {
  control: Control<TFormSchema>;
  goNext?: () => void;
  goPrev?: () => void;
}

export default function EducationSection({
  control,
  goNext,
  goPrev,
}: EducationSectionProps) {
  const {
    fields: educationFields,
    append: appendEducationField,
    remove: removeEducationField,
  } = useFieldArray({
    control: control,
    name: "educations",
  });

  return (
    <>
      <Heading>Educational Qualifications</Heading>

      <div className="space-y-6">
        <ul className="space-y-4">
          {educationFields.map((educationField, index) => (
            <li key={educationField.id} className="space-y-6">
              <div className="grid gap-4 sm:grid-cols-2">
                {/* LABEL: COURSE NAME */}
                <FormField
                  control={control}
                  name={`educations.${index}.name` as const}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Degree / Course Name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter your degree / course name"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* LABEL: COLLEGE NAME */}
                <FormField
                  control={control}
                  name={`educations.${index}.college` as const}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>College Name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter your college name"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid gap-2 sm:grid-cols-2">
                  {/* LABEL: START DATE */}
                  <FormField
                    control={control}
                    name={`educations.${index}.from` as const}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Start Date</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter the starting date"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* LABEL: END DATE */}
                  <FormField
                    control={control}
                    name={`educations.${index}.to` as const}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>End Date</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter the ending date"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {index > 0 && (
                  <div className="flex items-end justify-end">
                    <Button
                      type="button"
                      size="icon"
                      variant="destructive"
                      className="self-end"
                      onClick={(e) => {
                        removeEducationField(index);
                      }}
                    >
                      <Trash2 />
                      <span className="sr-only">
                        Remove a interest / hobby field.
                      </span>
                    </Button>
                  </div>
                )}
              </div>

              {index !== educationFields.length - 1 && <Separator />}
            </li>
          ))}
        </ul>

        <Separator />

        <Button
          type="button"
          size="icon"
          variant="secondary"
          onClick={(e) => {
            appendEducationField({ name: "", college: "", from: "", to: "" });
          }}
        >
          <Plus />
          <span className="sr-only">Add a interest / hobby field.</span>
        </Button>

        <Separator />
        <div className="flex flex-wrap gap-4">
          <Button onClick={goPrev}>Previous (Interests)</Button>
          <Button className="ml-auto" onClick={goNext}>
            Next (Experience)
          </Button>
        </div>
      </div>
    </>
  );
}
