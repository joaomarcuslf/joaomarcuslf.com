import { JobMetadataWithContent } from '@/types/job';
import { smoothScroll } from '@/utils/scroll';
import { useState } from 'react';

function useShowDescription(jobs:  JobMetadataWithContent[]) {
  const [activeJob, setActiveJob] = useState< JobMetadataWithContent | null>(null);


  const showDescription = (key: string) => {
    const job = jobs.find((job) => job.key === key);

    smoothScroll(".timeline");

    if (job?.key === activeJob?.key) {
      setActiveJob(null);
      return;
    }

    setActiveJob(job as JobMetadataWithContent);
  };

  return { activeJob, showDescription };
}

export default useShowDescription;

