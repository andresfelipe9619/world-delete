import { useBreakpointValue } from "@aws-amplify/ui-react";

function useResponsive() {
  const screen = useBreakpointValue(["base", "sm", "md", "large"]);
  const isMobile = ["base", "sm"].includes(screen);
  return { screen, isMobile };
}

export default useResponsive;
