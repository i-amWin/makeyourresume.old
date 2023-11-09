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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";

// IMPORTS FROM (CUSTOM) COMPONENTS
import Heading from "../components/heading";

interface SocialsSectionProps {
  control: Control<TFormSchema>;
  goNext?: () => void;
  goPrev?: () => void;
}

export default function SocialsSection({
  control,
  goNext,
  goPrev,
}: SocialsSectionProps) {
  const {
    fields: socialsFields,
    append: appendSocialField,
    remove: removeSocialField,
  } = useFieldArray({
    control,
    name: "socials",
  });

  return (
    <>
      <Heading>Socials & Other Links</Heading>

      <div className="space-y-6">
        <ul className="space-y-4">
          {socialsFields.map((socialField, index) => (
            <li key={socialField.id} className="flex flex-wrap gap-2">
              {/* LABEL: SOCIAL ICON */}
              <FormField
                control={control}
                name={`socials.${index}.icon` as const}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Social {index + 1}</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select an option" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="linkedin">Linkedin</SelectItem>
                        <SelectItem value="facebook">Facebook</SelectItem>
                        <SelectItem value="twitter">Twitter</SelectItem>
                        <SelectItem value="instagram">Instagram</SelectItem>
                        <SelectItem value="github">Github</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* LABEL: SOCIAL URL */}
              <FormField
                control={control}
                name={`socials.${index}.url` as const}
                render={({ field }) => (
                  <FormItem className="w-full max-w-xs">
                    <FormLabel>URL</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter the URL" {...field} />
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
                  className={
                    !!control.getFieldState("socials").error?.message
                      ? "self-center"
                      : "self-end"
                  }
                  onClick={(e) => {
                    removeSocialField(index);
                  }}
                >
                  <Trash2 />
                  <span className="sr-only">Remove a social field.</span>
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
            appendSocialField({ icon: "", url: "" });
          }}
        >
          <Plus />
          <span className="sr-only">Add a social field.</span>
        </Button>

        <Separator />

        <div className="flex flex-wrap gap-4">
          <Button onClick={goPrev}>Previous (Profile)</Button>
          <Button className="ml-auto" onClick={goNext}>
            Next (Skills)
          </Button>
        </div>
      </div>
    </>
  );
}
