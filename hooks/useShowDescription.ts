import { JobMetadataWithContent } from '@/types/job';
import { smoothScroll } from '@/utils/scroll';
import { useState } from 'react';

function useShowDescription(jobs:  JobMetadataWithContent[]) {
  const [isSelected, setIsSelected] = useState<boolean>(false);
  const [activeJob, setActiveJob] = useState<JobMetadataWithContent | null>(jobs[jobs.length-1]);

  const showDescription = (key: string, allowToggle: boolean = true) => {
    setIsSelected(true);
    const job = jobs.find((job) => job.key === key);

    smoothScroll(".timeline");

    if (job?.key === activeJob?.key && allowToggle) {
      setActiveJob(null);
      return;
    }

    setActiveJob(job as JobMetadataWithContent);
  };

  return { activeJob, showDescription, isSelected };
}

export default useShowDescription;

