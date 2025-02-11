import { JobMetadata } from '@/types/job';
import { smoothScroll } from '@/utils/scroll';
import { useCallback, useState } from 'react';

function useShowDescription(jobs: JobMetadata[]) {
  const [activeJob, setActiveJob] = useState<JobMetadata | null>(null);


  const showDescription = useCallback((key: string) => {
    const job = jobs.find((job) => job.key === key);

    if (job?.key === activeJob?.key) {
      setActiveJob(null);
      return;
    }

    setActiveJob(job as JobMetadata);

    smoothScroll(".timeline");
  }, []);

  return { activeJob, showDescription };
}

export default useShowDescription;

