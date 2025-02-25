import { useState } from 'react';

import { JobMetadataWithContent } from '@/types/job';
import { smoothScroll } from '@/utils/scroll';

function useShowDescription(jobs:  JobMetadataWithContent[]) {
  const [isSelected, setIsSelected] = useState<boolean>(false);
  const [activeJob, setActiveJob] = useState<JobMetadataWithContent | null>(null);

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

