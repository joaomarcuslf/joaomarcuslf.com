"use client";

import Image from "next/image";
import Markdown from "markdown-to-jsx";

import useShowDescription from "@/hooks/useShowDescription";
import { JobMetadataWithContent } from "@/types/job";

export default function JobTimeline({ jobs }: { jobs: JobMetadataWithContent[] }) {
  const { activeJob, showDescription } = useShowDescription(jobs);

  return (
    <section className="timeline hero is-light">
      <div className="hero-body">
        <h2 className="title">Work Timeline</h2>
        <div className="timeline-content">
          <div className="initial-date">June 2014</div>
          <div className="timeline-bar"></div>
          <div className="final-date">Present</div>
          <div className="events">
            {jobs.map((job) => (
              <button
                id={job.key}
                key={job.key}
                type="button"
                className="event"
                onClick={() => showDescription(job.key)}
              >
                <Image
                  className="timeline-company-image"
                  src={`/images/companies/${job.companyImg}`}
                  alt={job.name}
                  width="60"
                  height="60"
                />
              </button>
            ))}
          </div>
        </div>

        {activeJob && (
          <div id="timelineDescription" className="timeline-event-description">
            <div className="card">
              <div className="card">
                <div className="card-content">
                  <div className="media">
                    <div className="media-left">
                      <figure className="image is-48x48">
                        <Image
                          src={`/images/companies/${activeJob.companyImg}`}
                          alt={`${activeJob.companyName}} - ${activeJob.name}`}
                          width="60"
                          height="60"
                        />
                      </figure>
                    </div>

                    <div className="media-content">
                      <p className="title is-4 has-text-left">
                        {activeJob.name}
                      </p>
                      <a
                        href={activeJob.companyRef}
                        target="blank"
                        className="subtitle is-6 has-text-left"
                      >
                        {activeJob.companyName}
                      </a>
                    </div>
                  </div>
                  <div className="content">
                    <Markdown className="content is-normal">
                      {activeJob.content}
                    </Markdown>
                    <br />
                    <time>{`${activeJob.startDate} - ${
                      activeJob.endDate === "~" ? "Present" : activeJob.endDate
                    }`}</time>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
