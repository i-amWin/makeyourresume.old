"use client";

import { forwardRef } from "react";
import { useAtom } from "jotai";

import { customStylesAtom } from "@/components/jotai-provider";

import ImageSection from "./sections/image-section";
import ContactAndSocialSection from "./sections/contacts-and-social-section";
import SkillsSection from "./sections/skills-section";
import InterestsSection from "./sections/interests-section";
import AboutSection from "./sections/about-section";
import EducationSection from "./sections/education-section";
import ProjectsSection from "./sections/projects-section";
import PersonalProfile from "./sections/personal-profile";
import ExperienceSection from "./sections/experience-section";

const Template1 = forwardRef<HTMLDivElement>((_, ref) => {
  const [customStyles] = useAtom(customStylesAtom);

  return (
    <section className="overflow-x-scroll shadow-2xl dark:shadow-white/[.25]">
      <div
        ref={ref}
        className="flex min-h-[841.5pt] w-[596pt] gap-[12pt] bg-white py-[21pt] pl-[15pt] text-black"
      >
        {/* LEFT COLUMN */}
        <div className="w-[122pt] space-y-[15pt]">
          {/* IMAGE SECTION */}
          <ImageSection />

          <div
            className="grid flex-1"
            style={{ gap: customStyles.LEFT_COLUMN_GAP + "pt" }}
          >
            {/* CONTACTS AND SOCIAL SECTION */}
            <ContactAndSocialSection />

            {/* SKILLS SECTION */}
            <SkillsSection />

            {/* INTERESTS SECTION */}
            <InterestsSection />
          </div>
        </div>
        {/* RIGHT COLUMN */}
        <div className="flex-1 space-y-[15pt]">
          {/* NAME, TITLE & ABOUT SECTION */}
          <AboutSection />

          <div
            className="grid"
            style={{
              gap: customStyles.RIGHT_COLUMN_GAP + "pt",
            }}
          >
            {/* EXPERIENCE SECTION */}
            <ExperienceSection />

            {/* PROJECTS SECTION */}
            <ProjectsSection />

            {/* EDUCATION SECTION */}
            <EducationSection />

            {/* PERSONAL PROFILE */}
            <PersonalProfile />
          </div>
        </div>
      </div>
    </section>
  );
});

Template1.displayName = "Template1";
export default Template1;
