// IMPORTS FROM PACKAGES
import { Control, UseFieldArrayProps, useFieldArray } from "react-hook-form";
import { Plus, Trash2 } from "lucide-react";
import * as z from "zod";

// IMPORTS FROM FILES
import { formSchema } from "@/components/jotai-provider";

// IMPORTS FROM UI LIBRARY COMPONENTS
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface WorkResponsibilitiesProps {
  control: Control<z.infer<typeof formSchema>>;
  name: UseFieldArrayProps<z.infer<typeof formSchema>>["name"];
  parentIndex: number;
  disabled?: boolean;
}

export default function WorkResponsibilities({
  control,
  name,
  parentIndex,
  disabled,
}: WorkResponsibilitiesProps) {
  const { fields, append, remove } = useFieldArray({
    control,
    name,
  });
  return (
    <div className="space-y-4">
      <ul className="space-y-3">
        {fields.map((field, index) => (
          <li key={field.id} className="flex gap-2">
            <FormField
              disabled={disabled}
              control={control}
              name={
                `experiences.${parentIndex}.workResponsibilities.${index}.responsibility` as const
              }
              render={({ field: { value, ...otherField } }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <Input
                      placeholder="Enter your work responsibility."
                      {...otherField}
                      value={!disabled ? value : value === "" ? "Empty" : value}
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
                className="self-end"
                onClick={() => {
                  remove(index);
                }}
              >
                <Trash2 />
                <span className="sr-only">
                  Remove this work responsibility field.
                </span>
              </Button>
            )}
          </li>
        ))}
      </ul>
      <Button
        type="button"
        size="icon"
        variant="secondary"
        onClick={() => {
          append({ responsibility: "" });
        }}
      >
        <Plus />
        <span className="sr-only">Add a work responsibility field.</span>
      </Button>
    </div>
  );
}
