import { smoothScroll } from '@/utils/scroll';
import { useCallback, RefObject } from 'react';

function useExpandView() {
  const expandView = useCallback((section: string, highlightsRef: RefObject<HTMLDivElement>, buttonRef: RefObject<HTMLButtonElement>) => {
    if (buttonRef.current && highlightsRef.current) {
      buttonRef.current.classList.toggle("is-flipped");
      highlightsRef.current.classList.toggle("is-expanded");

      setTimeout(() => {
        if (highlightsRef.current) {
          smoothScroll(`#${section}`);
        }
      }, 250);
    }
  }, []);

  return expandView;
}

export default useExpandView;

