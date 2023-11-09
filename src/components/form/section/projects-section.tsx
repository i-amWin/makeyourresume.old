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
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

// IMPORTS FROM (CUSTOM) COMPONENTS
import Heading from "../components/heading";
import SectionToggler from "../components/section-toggler";

interface ProjectsSectionProps {
  control: Control<TFormSchema>;
  goNext?: () => void;
  goPrev?: () => void;
}

export default function ProjectsSection({
  control,
  goNext,
  goPrev,
}: ProjectsSectionProps) {
  const [toggleSection] = useAtom(toggleSectionAtom);

  const {
    fields: projectsFields,
    append: appendProjectField,
    remove: removeProjectField,
  } = useFieldArray({
    control: control,
    name: "projects",
  });

  return (
    <>
      <Heading className="flex flex-wrap justify-between gap-4">
        <span>Projects</span>
        <SectionToggler
          sectionName="projects"
          register={() => control.register("projects")}
          unregister={() => control.unregister("projects")}
          appendField={() =>
            appendProjectField({
              name: "",
              description: "",
              liveLink: "",
              sourceLink: "",
              tags: "",
            })
          }
        />
      </Heading>

      <div className="space-y-6">
        {toggleSection.projects && (
          <>
            <ul className="space-y-4">
              {projectsFields.map((projectField, index) => (
                <li key={projectField.id} className="grid gap-4 sm:grid-cols-2">
                  {/* LABEL: PROJECT NAME */}
                  <FormField
                    control={control}
                    name={`projects.${index}.name` as const}
                    render={({ field }) => (
                      <FormItem className="sm:col-span-2">
                        <FormLabel>Project Name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter your project name"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* LABEL: PROJECT DESCRIPTION */}
                  <FormField
                    control={control}
                    name={`projects.${index}.description` as const}
                    render={({ field }) => (
                      <FormItem className="sm:col-span-2">
                        <FormLabel>Project Description</FormLabel>
                        <FormControl>
                          <Textarea
                            rows={5}
                            placeholder="Enter your project description"
                            className="resize-none"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* LABEL: PROJECT LIVE LINK */}
                  <FormField
                    control={control}
                    name={`projects.${index}.liveLink` as const}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          Project Live Link{" "}
                          <span className="text-destructive">(optional)</span>
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter the live link of your project"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* LABEL: PROJECT SOURCE LINK */}
                  <FormField
                    control={control}
                    name={`projects.${index}.sourceLink` as const}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          Source Link{" "}
                          <span className="text-destructive">(optional)</span>
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter the source link of your project"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* LABEL: PROJECT TAGS */}
                  <FormField
                    control={control}
                    name={`projects.${index}.tags` as const}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          Tags{" "}
                          <span className="text-destructive">(optional)</span>
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter some tags. e.g. HTML, CSS, JS"
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
                      className="place-self-end justify-self-end"
                      onClick={(e) => {
                        removeProjectField(index);
                      }}
                    >
                      <Trash2 />
                      <span className="sr-only">Remove a project.</span>
                    </Button>
                  )}

                  {index !== projectsFields.length - 1 && (
                    <Separator className="sm:col-span-2" />
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
                appendProjectField({
                  name: "",
                  description: "",
                  liveLink: "",
                  sourceLink: "",
                  tags: "",
                });
              }}
            >
              <Plus />
              <span className="sr-only">Add a Project</span>
            </Button>
          </>
        )}

        <Separator />

        <div className="flex flex-wrap gap-4">
          <Button onClick={goPrev}>Previous (Experience)</Button>
          <Button className="ml-auto" onClick={goNext}>
            Next (Personal Profile)
          </Button>
        </div>
      </div>
    </>
  );
}
