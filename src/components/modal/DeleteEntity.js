import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { LinearProgress } from "@mui/material";

export default function DeleteEntity({
  id,
  open,
  entity,
  loading,
  handleClose,
  handleConfirm,
}) {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        {`Estas seguro que desear borrar este ${entity}?`}
      </DialogTitle>
      <DialogContent>
        {loading && <LinearProgress />}
        <DialogContentText id="alert-dialog-description">
          Esto borrara el {entity} <strong>#{id}</strong> y todos los elementos
          relacionados a el.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} disabled={loading}>
          Cancelar
        </Button>
        <Button onClick={handleConfirm} autoFocus disabled={loading}>
          Borrar
        </Button>
      </DialogActions>
    </Dialog>
  );
}
