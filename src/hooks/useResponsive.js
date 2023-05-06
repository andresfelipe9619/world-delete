import { useTheme, useMediaQuery } from "@mui/material";

const useResponsive = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));

  return { isSmallScreen, isMediumScreen, isLargeScreen };
};

export default useResponsive;
