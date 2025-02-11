import { JobMetadataWithContent } from "@/types/job";

export default function WorkExperience({ topJobs }: { topJobs: JobMetadataWithContent[] }) {
  return (
    <section className="experience-section">
      <h2 className="underlined">Work experience:</h2>
      <div>
        <table>
          <tbody>
            <tr className="columns pl-5">
              {topJobs.map((job) => (
                <td key={job.key} className="job-column column ph-5 is-half">
                  <h3>
                    {job.name} at
                    <a className="pl-1" href={job.companyRef}>
                      {job.companyName}
                    </a>
                  </h3>

                  <p className="short-description pl-05 indent-5">
                    {job.shortDescription}
                  </p>

                  <small className="pl-05">
                    <strong>
                      Duration:{" "}
                      {`${job.startDate} - ${
                        job.endDate === "~" ? "Present" : job.endDate
                      }`}
                    </strong>
                  </small>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
