import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import {
  DialogContentText,
  Divider,
  LinearProgress,
  TextField,
} from "@mui/material";

export default function UpdateDocument({
  open,
  document,
  loading,
  handleClose,
  handleConfirm,
}) {
  const [name, setName] = React.useState("");

  function handleChangeName(e) {
    setName(e.target.value);
  }

  React.useEffect(() => {
    if (document.name) {
      setName(document.name);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      fullWidth
      maxWidth="md"
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        Estas seguro que quieres compartir este documento en la Libreria
        Juridíca ?
      </DialogTitle>
      <DialogContent>
        {loading && <LinearProgress />}
        <DialogContentText id="alert-dialog-description">
          Para poder compartir este documento en la Libreria Juridica, primero
          debes asignarle un nombre
        </DialogContentText>
        <TextField
          sx={{ my: 2 }}
          fullWidth
          name="name"
          error={!name}
          label="Nombre Documento"
          disabled={loading}
          value={name}
          onChange={handleChangeName}
        />
        <Divider />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancelar</Button>
        <Button
          onClick={() => handleConfirm(name)}
          autoFocus
          disabled={loading || !name}
        >
          Actualizar
        </Button>
      </DialogActions>
    </Dialog>
  );
}
