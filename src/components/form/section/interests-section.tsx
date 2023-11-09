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
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";

// IMPORTS FROM (CUSTOM) COMPONENTS
import Heading from "../components/heading";

interface InterestsSectionProps {
  control: Control<TFormSchema>;
  goNext?: () => void;
  goPrev?: () => void;
}

export default function InterestsSection({
  control,
  goNext,
  goPrev,
}: InterestsSectionProps) {
  const {
    fields: interestsFields,
    append: appendInterestField,
    remove: removeInterestField,
  } = useFieldArray({
    control: control,
    name: "interests",
  });

  return (
    <>
      <Heading>Interests / Hobbies</Heading>

      <div className="space-y-6">
        <ul className="space-y-3">
          {interestsFields.map((interestField, index) => (
            <li
              key={interestField.id}
              className="flex flex-wrap items-center gap-2"
            >
              <FormField
                control={control}
                name={`interests.${index}.name` as const}
                render={({ field }) => (
                  <FormItem className="w-full max-w-xs">
                    <FormControl>
                      <Input
                        placeholder="Enter your interest / hobby"
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
                    removeInterestField(index);
                  }}
                >
                  <Trash2 />
                  <span className="sr-only">
                    Remove a interest / hobby field.
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
            appendInterestField({ name: "" });
          }}
        >
          <Plus />
          <span className="sr-only">Add a interest / hobby field.</span>
        </Button>

        <Separator />
        <div className="flex flex-wrap gap-4">
          <Button onClick={goPrev}>Previous (Skills)</Button>
          <Button className="ml-auto" onClick={goNext}>
            Next (Education)
          </Button>
        </div>
      </div>
    </>
  );
}
