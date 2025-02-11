"use client";

import Image from "next/image";
import Markdown from "markdown-to-jsx";
import { useRef, useState } from "react";

import { JobMetadataWithContent } from "@/types/job";
import useShowDescription from "@/hooks/useShowDescription";
import useExpandView from "@/hooks/useExpandView";

export default function JobTimeline({
  jobs,
}: {
  jobs: JobMetadataWithContent[];
}) {
  const [isDropdownActive, setIsDropdownActive] = useState<boolean>(false);
  const { activeJob, showDescription, isSelected } = useShowDescription(jobs);
  const expandView = useExpandView();

  const highlightsRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const reverseJobs = [...jobs].reverse();

  return (
    <section className="timeline hero is-light">
      <div className="hero-body">
        <h2 className="title">Work Experience</h2>
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
          <>
            <div
              className={`dropdown is-fullwidth ${
                isDropdownActive ? "is-active" : ""
              }`}
            >
              <div className="dropdown-trigger">
                <button
                  className="button"
                  aria-haspopup="true"
                  aria-controls="dropdown-menu"
                  onClick={() => setIsDropdownActive(!isDropdownActive)}
                >
                  <span className="icon">
                    <figure className="image is-48x48">
                      <Image
                        src={`/images/companies/${activeJob.companyImg}`}
                        alt={`${activeJob.companyName}} - ${activeJob.name}`}
                        width="60"
                        height="60"
                      />
                    </figure>
                  </span>
                  <span>{activeJob.name}</span>
                  <span className="icon is-small">
                    <i className="fas fa-angle-down" aria-hidden="true"></i>
                  </span>
                </button>
              </div>

              <div className="dropdown-menu" id="dropdown-menu" role="menu">
                <div className="dropdown-content">
                  {reverseJobs?.map((job) => (
                    <button
                      key={job.key}
                      className="dropdown-item"
                      onClick={() => {
                        showDescription(job.key, false);
                        setIsDropdownActive(false);
                      }}
                    >
                      <span className="icon">
                        <figure className="image is-48x48">
                          <Image
                            src={`/images/companies/${job.companyImg}`}
                            alt={`${job.companyName}} - ${job.name}`}
                            width="60"
                            height="60"
                          />
                        </figure>
                      </span>
                      <span>{job.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <div
              id="timelineDescription"
              className={`timeline-event-description ${
                isSelected ? "is-selected" : ""
              }`}
              ref={highlightsRef}
            >
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
                        <p className="title has-text-left">{activeJob.name}</p>
                        <a
                          href={activeJob.companyRef}
                          target="blank"
                          className="subtitle has-text-left"
                        >
                          {activeJob.companyName}
                        </a>
                      </div>
                    </div>
                    <div className="content">
                      <strong>
                        Duration:{" "}
                        {`${activeJob.startDate} - ${
                          activeJob.endDate === "~"
                            ? "Present"
                            : activeJob.endDate
                        }`}
                      </strong>

                      <br />

                      <Markdown className="content is-normal">
                        {activeJob.content}
                      </Markdown>
                    </div>

                    <div className="has-text-centered">
                      <button
                        className="button has-icon is-light is-rounded is-outlined expand-description"
                        onClick={() =>
                          expandView(
                            "timeline",
                            highlightsRef,
                            buttonRef
                          )
                        }
                        ref={buttonRef}
                        role="button"
                        aria-label="Expand Section Button"
                      >
                        <span className="icon is-large">
                          <i className="fas fa-chevron-down"></i>
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
