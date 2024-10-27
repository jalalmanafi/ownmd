import { useEffect, useRef } from "react";

export const useRenderTracker = (componentName: string, watchValue: any) => {
    const renderCount = useRef(0);
    const previousValue = useRef(watchValue);

    useEffect(() => {
      renderCount.current += 1;

      console.group(`${componentName} Render Info`);
      console.log('Render count:', renderCount.current);
      console.log('Previous value:', previousValue.current);
      console.log('Current value:', watchValue);
      console.log('Value changed:', previousValue.current !== watchValue);
      console.groupEnd();

      previousValue.current = watchValue;
    }, [watchValue, componentName]);

    return renderCount.current;
  };