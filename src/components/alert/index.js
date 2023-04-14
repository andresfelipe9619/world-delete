import React from "react";
import Snackbar from "@mui/material/Snackbar";
import { useAlert } from "../../context/alert";
import MuiAlert from "@mui/material/Alert";

const CustomAlert = React.forwardRef(function CustomAlert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

class CustomizedSnackbar extends React.PureComponent {
  render() {
    const { open, message, handleClose, variant, duration, position } =
      this.props;

    return (
      <Snackbar
        anchorOrigin={{
          vertical: "top",
          horizontal: position || "right",
        }}
        open={open}
        autoHideDuration={duration || null}
        ClickAwayListenerProps={{
          mouseEvent: false,
          touchEvent: false,
          onClickAway: () => {},
        }}
        onClose={handleClose}
        style={{
          top: "85px",
        }}
      >
        <CustomAlert
          onClose={handleClose}
          severity={variant}
          sx={{ width: "100%" }}
        >
          {message}
        </CustomAlert>
      </Snackbar>
    );
  }
}

function Alert() {
  const [props, { closeAlert }] = useAlert();
  return <CustomizedSnackbar {...props} handleClose={closeAlert} />;
}
export { Alert };
export default CustomizedSnackbar;
