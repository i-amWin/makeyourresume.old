"use client";

// IMPORTS FROM PACKAGES
import { useRef } from "react";
import { useParams, useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useAtom } from "jotai";

// IMPORTS FROM FILES
import { dataAtom, formSchema, TFormSchema } from "../jotai-provider";

// IMPORTS FROM UI LIBRARY COMPONENTS
import { Form } from "../ui/form";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// IMPORTS FROM (CUSTOM) COMPONENTS
import ProfileSection from "./section/profile-section";
import SocialsSection from "./section/socials-section";
import SkillsSection from "./section/skills-section";
import InterestsSection from "./section/interests-section";
import EducationSection from "./section/education-section";
import ExperienceSection from "./section/experience-section";
import ProjectsSection from "./section/projects-section";
import PersonalProfileSection from "./section/personalProfile-section";

const tabList = [
  {
    value: "profile",
    label: "Profile",
  },
  {
    value: "socials",
    label: "Socials",
  },
  {
    value: "skills",
    label: "Skills",
  },
  {
    value: "interests",
    label: "Interests",
  },
  {
    value: "education",
    label: "Education",
  },
  {
    value: "experience",
    label: "Experience",
  },
  {
    value: "projects",
    label: "Projects",
  },
  {
    value: "personalProfile",
    label: "Personal Profile",
  },
];

const tabContent = [
  {
    value: "profile",
    Content: ProfileSection,
  },
  {
    value: "socials",
    Content: SocialsSection,
  },
  {
    value: "skills",
    Content: SkillsSection,
  },
  {
    value: "interests",
    Content: InterestsSection,
  },
  {
    value: "education",
    Content: EducationSection,
  },
  {
    value: "experience",
    Content: ExperienceSection,
  },
  {
    value: "projects",
    Content: ProjectsSection,
  },
  {
    value: "personalProfile",
    Content: PersonalProfileSection,
  },
];

export default function RForm() {
  const params = useParams();
  const router = useRouter();
  const [{ image, ...defaults }, setData] = useAtom(dataAtom);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: defaults,
    mode: "onTouched",
  });

  function onSubmit(data: z.infer<typeof formSchema>) {
    setData((prev) => ({ ...prev, ...data }));

    router.push(`/${params.templateId}/resume/`);
  }

  const ref = useRef<HTMLButtonElement[]>([]);

  const focusElement = (index: number) => {
    ref.current[index].focus();
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} noValidate>
        <Tabs defaultValue="profile" className="space-y-2">
          <TabsList className="flex h-fit flex-wrap gap-x-2 px-2">
            {tabList.map(({ value, label }, index) => (
              <TabsTrigger
                key={value}
                ref={(e: HTMLButtonElement) => (ref.current[index] = e)}
                value={value}
              >
                {label}
              </TabsTrigger>
            ))}
          </TabsList>

          {tabContent.map(({ value, Content }, index) => (
            <TabsContent
              key={value}
              value={value}
              className="rounded-md border px-4 py-6"
            >
              <Content
                goNext={() => focusElement(index + 1)}
                goPrev={index === 0 ? undefined : () => focusElement(index - 1)}
                control={form.control}
              />
            </TabsContent>
          ))}
        </Tabs>
      </form>
    </Form>
  );
}
