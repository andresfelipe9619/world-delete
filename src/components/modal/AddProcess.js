import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Alert, Divider, LinearProgress, TextField } from "@mui/material";
import Upload from "../form/Upload";

export default function AddProcess({
  open,
  loading,
  handleClose,
  handleConfirm,
}) {
  const [caseNumber, setCaseNumber] = React.useState("");
  const [file, setFile] = React.useState(null);
  const [touched, setTouched] = React.useState(false);

  function handleChangeName(e) {
    const value = e.target.value;
    if (!touched) setTouched(true);
    if (!value) setTouched(false);

    setCaseNumber(value);
  }

  function handleChangeFile(e) {
    setFile(e.target.value);
  }

  const invalidFile = !file?.length;
  const invalidInput = caseNumber.length !== 23;
  const showInputError = touched && invalidFile && invalidInput;

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      fullWidth
      maxWidth="md"
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">Creación de Proceso</DialogTitle>
      <DialogContent>
        {loading && <LinearProgress />}
        <Alert severity="info">
          {`Puedes crear un proceso escribiendo el radicado ó crear varios
          subiendo un archivo CSV.`}
          <br />
          Ejemplo CSV:{" "}
          <strong>{`\nradicado;\n05001400300120100126200;
          \n05001400300120120117600;`}</strong>
        </Alert>
        <TextField
          sx={{ my: 2 }}
          fullWidth
          name="name"
          error={showInputError}
          label="# Radicado"
          helperText={
            showInputError ? "El # Radicado debe tener 25 digitos" : ""
          }
          disabled={loading || !invalidFile}
          value={caseNumber}
          onChange={handleChangeName}
        />
        <Divider />
        <Upload
          uploading={loading}
          item={{ name: "document", label: "Document" }}
          handleChange={handleChangeFile}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancelar</Button>
        <Button
          onClick={() => handleConfirm(caseNumber, file)}
          autoFocus
          disabled={loading || showInputError}
        >
          Crear
        </Button>
      </DialogActions>
    </Dialog>
  );
}
