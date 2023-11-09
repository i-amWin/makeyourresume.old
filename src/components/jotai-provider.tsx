"use client";

import { Provider, atom } from "jotai";
import { ReactNode } from "react";
import * as z from "zod";

// LABEL: CUSTOM STYLES
const initialCustomStyles = {
  ACCENT_COLOR: "#CD6060",
  LEFT_COLUMN_GAP: 17,
  RIGHT_COLUMN_GAP: 25,
};
export const customStylesAtom = atom(initialCustomStyles);

// LABEL: DATA
export const formSchema = z.object({
  name: z.string().min(1, "Please enter your full name."),
  email: z.string().min(1, "Please enter your email address."),
  title: z.string().min(1, "Please enter your profession title."),
  phone: z.string().min(1, "Please enter your phone number."),
  about: z.string().min(1, "Please provide some information about yourself."),
  address: z.string().min(1, "Please enter your address."),
  socials: z.array(
    z.object({
      icon: z.string().default("other"),
      url: z.string().min(1, "Please enter your the URL"),
    }),
  ),
  skills: z.array(
    z.object({ name: z.string().min(1, "Please enter a skill") }),
  ),
  interests: z.array(
    z.object({
      name: z.string().min(1, "Please enter an interest / hobby"),
    }),
  ),
  educations: z.array(
    z.object({
      name: z.string().min(1, "Please enter the degree name"),
      college: z.string().min(1, "Please enter the college name"),
      from: z.string().min(1, "Please enter the start date"),
      to: z.string().min(1, "Please enter the end date"),
    }),
  ),
  experiences: z
    .array(
      z.object({
        company: z.string().min(1, "Please enter the company name"),
        jobTitle: z.string().min(1, "Please enter your job title"),
        location: z.string().min(1, "Please enter the location"),
        startDate: z.string().min(1, "Please enter the start date"),
        endDate: z.string().min(1, "Please enter the end date"),
        workResponsibilities: z.array(
          z.object({
            responsibility: z.string().min(1, "Please enter a responsibility"),
          }),
        ),
      }),
    )
    .optional(),
  projects: z
    .array(
      z.object({
        name: z.string().min(1, "Please enter the project name"),
        description: z.string().min(1, "Please enter the project description"),
        liveLink: z.string().optional(),
        sourceLink: z.string().optional(),
        tags: z.string().optional(),
      }),
    )
    .optional(),
  personalProfiles: z
    .array(
      z.object({
        fieldName: z.string().min(1, "Please enter the field name"),
        fieldValue: z.string().min(1, "Please enter the field value"),
      }),
    )
    .optional(),
});

export type TFormSchema = z.infer<typeof formSchema>;

type IData = TFormSchema & {
  image: string;
};

const initialData: IData = {
  image: "",
  name: "",
  email: "",
  phone: "",
  title: "",
  about: "",
  address: "",
  socials: [
    {
      icon: "",
      url: "",
    },
  ],
  skills: [
    {
      name: "",
    },
  ],
  interests: [
    {
      name: "",
    },
  ],
  educations: [
    {
      name: "",
      college: "",
      from: "",
      to: "",
    },
  ],
  experiences: [
    {
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
    },
  ],
  projects: [
    {
      name: "",
      description: "",
      liveLink: "",
      sourceLink: "",
      tags: "",
    },
  ],
  personalProfiles: [
    {
      fieldName: "",
      fieldValue: "",
    },
  ],
};

export const dataAtom = atom(initialData);

// LABEL: TOGGLE SECTION
const initialToggleSection = {
  experience: true,
  projects: true,
  personalProfile: true,
};

export const toggleSectionAtom = atom(initialToggleSection);

export default function JotaiProvider({ children }: { children: ReactNode }) {
  return <Provider>{children}</Provider>;
}
