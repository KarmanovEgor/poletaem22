import { useEffect } from "react";

export function useIntersectionObserver(ref, threshold, delay, state, setState) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !state) {
          setTimeout(() => {
            console.log("Element is visible"); // Логируем, когда срабатывает
            setState(true);
          }, delay);
          observer.disconnect();
        }
      },
      { threshold }
    );

    const element = ref.current;

    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [ref, state, setState, threshold, delay]);
}