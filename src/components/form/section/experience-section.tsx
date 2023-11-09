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

// IMPORTS FROM (CUSTOM) COMPONENTS
import Heading from "../components/heading";
import WorkResponsibilities from "../components/work-responsibilities";
import SectionToggler from "../components/section-toggler";

interface ExperienceSectionProps {
  control: Control<TFormSchema>;
  goNext?: () => void;
  goPrev?: () => void;
}

export default function ExperienceSection({
  control,
  goNext,
  goPrev,
}: ExperienceSectionProps) {
  const [toggleSection] = useAtom(toggleSectionAtom);
  const {
    fields: experienceFields,
    append: appendExperienceField,
    remove: removeExperienceField,
  } = useFieldArray({
    control: control,
    name: "experiences",
  });

  return (
    <>
      <Heading className="flex flex-wrap justify-between gap-4">
        <span>Experience</span>
        <SectionToggler
          unregister={() => control.unregister("experiences")}
          register={() => control.register("experiences")}
          sectionName="experience"
          appendField={() =>
            appendExperienceField({
              company: "",
              jobTitle: "",
              location: "",
              startDate: "",
              endDate: "",
              workResponsibilities: [
                {
                  responsibility: "",
                },
              ],
            })
          }
        />
      </Heading>

      <div className="space-y-6">
        {toggleSection.experience && (
          <>
            <ul className="space-y-4">
              {experienceFields.map((experienceField, index) => (
                <li key={experienceField.id} className="space-y-6">
                  <div className="grid gap-4 sm:grid-cols-2">
                    {/* LABEL: COMPANY NAME */}
                    <FormField
                      disabled={!toggleSection.experience}
                      control={control}
                      name={`experiences.${index}.company` as const}
                      render={({ field: { value, ...otherField } }) => (
                        <FormItem className="sm:col-span-2">
                          <FormLabel>Company Name</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Enter the company name"
                              {...otherField}
                              value={
                                toggleSection.experience
                                  ? value
                                  : value === ""
                                  ? "Empty"
                                  : value
                              }
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* LABEL: JOB TITLE */}
                    <FormField
                      disabled={!toggleSection.experience}
                      control={control}
                      name={`experiences.${index}.jobTitle` as const}
                      render={({ field: { value, ...otherField } }) => (
                        <FormItem>
                          <FormLabel>Job Title</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Enter your job title"
                              {...otherField}
                              value={
                                toggleSection.experience
                                  ? value
                                  : value === ""
                                  ? "Empty"
                                  : value
                              }
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* LABEL: JOB LOCATION */}
                    <FormField
                      disabled={!toggleSection.experience}
                      control={control}
                      name={`experiences.${index}.location` as const}
                      render={({ field: { value, ...otherField } }) => (
                        <FormItem>
                          <FormLabel>Job Location</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Enter the job location"
                              {...otherField}
                              value={
                                toggleSection.experience
                                  ? value
                                  : value === ""
                                  ? "Empty"
                                  : value
                              }
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* LABEL: START DATE */}
                    <FormField
                      disabled={!toggleSection.experience}
                      control={control}
                      name={`experiences.${index}.startDate` as const}
                      render={({ field: { value, ...otherField } }) => (
                        <FormItem>
                          <FormLabel>Start Date</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Enter the job starting date"
                              {...otherField}
                              value={
                                toggleSection.experience
                                  ? value
                                  : value === ""
                                  ? "Empty"
                                  : value
                              }
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* LABEL: END DATE */}
                    <FormField
                      disabled={!toggleSection.experience}
                      control={control}
                      name={`experiences.${index}.endDate` as const}
                      render={({ field: { value, ...otherField } }) => (
                        <FormItem>
                          <FormLabel>End Date</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Enter the job ending date"
                              {...otherField}
                              value={
                                toggleSection.experience
                                  ? value
                                  : value === ""
                                  ? "Empty"
                                  : value
                              }
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* LABEL: WORK RESPONSIBILITIES */}
                    <div className="space-y-2 sm:col-span-2">
                      <FormLabel>Work Responsibilities</FormLabel>
                      <WorkResponsibilities
                        disabled={!toggleSection.experience}
                        control={control}
                        name={
                          `experiences.${index}.workResponsibilities` as const
                        }
                        parentIndex={index}
                      />
                    </div>

                    {index > 0 && (
                      <div className="flex justify-end sm:col-span-2">
                        <Button
                          type="button"
                          size="icon"
                          variant="destructive"
                          className=""
                          onClick={(e) => {
                            removeExperienceField(index);
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

                  {index !== experienceFields.length - 1 && <Separator />}
                </li>
              ))}
            </ul>

            <Separator />
            <Button
              type="button"
              size="icon"
              variant="secondary"
              onClick={() => {
                appendExperienceField({
                  company: "",
                  jobTitle: "",
                  location: "",
                  startDate: "",
                  endDate: "",
                  workResponsibilities: [
                    {
                      responsibility: "",
                    },
                  ],
                });
              }}
            >
              <Plus />
              <span className="sr-only">Add a social field.</span>
            </Button>
          </>
        )}

        <Separator />
        <div className="flex flex-wrap gap-4">
          <Button onClick={goPrev}>Previous (Education)</Button>
          <Button className="ml-auto" onClick={goNext}>
            Next (Projects)
          </Button>
        </div>
      </div>
    </>
  );
}
