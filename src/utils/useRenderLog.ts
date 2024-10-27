export const useRenderLog = (componentName: string) => {
    console.log(`${componentName} rendered at:`, new Date().toISOString());
  };
