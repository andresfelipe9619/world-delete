import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import LockIcon from "@mui/icons-material/LockOutlined";

export function renderCell(params) {
  const value = params.formattedValue || params.value;
  return (
    <HtmlTooltip
      arrow
      interactive
      title={<Typography variant="caption">{value}</Typography>}
    >
      <Typography
        sx={{
          overflow: "hidden",
          whiteSpace: "nowrap",
          textOverflow: "ellipsis",
          maxWidth: params.colDef.width,
        }}
        variant="inherit"
      >
        {value}
      </Typography>
    </HtmlTooltip>
  );
}

export function renderCaseNumber(params) {
  const value = params.formattedValue || params.value;
  const { scraperError, isPrivate } = params?.row || {};
  return (
    <span>
      <HtmlTooltip
        arrow
        interactive
        title={
          <Typography variant="caption">
            {isPrivate ? "El proceso es privado:" : ""} {scraperError || value}
          </Typography>
        }
      >
        <Typography
          sx={{
            overflow: "hidden",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
            maxWidth: params.colDef.width,
          }}
          variant="inherit"
        >
          {value}
          {scraperError && !isPrivate && (
            <WarningAmberIcon color="error" fontSize="small" />
          )}
          {isPrivate && <LockIcon color="warning" fontSize="small" />}
        </Typography>
      </HtmlTooltip>
    </span>
  );
}

const HtmlTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#f5f5f9",
    color: "rgba(0, 0, 0, 0.87)",
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    border: "1px solid #dadde9",
  },
}));
