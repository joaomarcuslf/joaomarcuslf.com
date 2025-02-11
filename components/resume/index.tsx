"use client";

import { usePDF } from "react-to-pdf";

import ContactInfo from "@/components/resume/contact-info";
import CoreSkillsInfo from "@/components/resume/core-skills-info";
import DescriptionLines from "@/components/resume/description-line";
import GraduationInfo from "@/components/resume/graduation-info";
import LanguageInfo from "@/components/resume/language-info";
import PersonalInfo from "@/components/resume/personal-info";
import WorkExperience from "@/components/resume/work-experience";
import site from "@/site";
import { JobMetadataWithContent } from "@/types/job";


export default function Resume({ topJobs }: { topJobs: JobMetadataWithContent[] }) {
  const { toPDF, targetRef } = usePDF({
    filename: `Resume - ${site.author} ${new Date().toISOString()}.pdf`,
    method: "open",
    resolution: 1,
  });

  const hasShowExportPDF = typeof window !== "undefined" && window.location.search.includes("showExportPDF");

  return (
    <main>
      {hasShowExportPDF && <div className="has-text-centered">
        <button
          onClick={() => toPDF()}
          className="button has-text is-dark is-rounded is-outlined"
        >
          Export PDF
        </button>
      </div>}

      <div ref={targetRef} className="resume">
        <div className="columns">
          <main className="column is-8">
            <h1>{site.author}</h1>

            <DescriptionLines />
            <WorkExperience topJobs={topJobs} />
          </main>

          <aside className="column is-4">
            <PersonalInfo />
            <ContactInfo />
            <GraduationInfo />
            <LanguageInfo />
            <CoreSkillsInfo />
          </aside>
        </div>
      </div>
    </main>
  );
}
