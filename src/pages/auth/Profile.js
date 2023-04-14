import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import {
  Button,
  CardActions,
  CardContent,
  Divider,
  FormControl,
  FormHelperText,
  InputLabel,
  LinearProgress,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import Grid from "@mui/material/Grid";
import { useFormik } from "formik";
import { COLOMBIAN_CODE, getInitialValues, validationSchema } from "./settings";
import { getFile, SUPPORTED_IMAGE_FORMATS } from "../../utils";
import { citiesGroupByDepartment, departments } from "./cities";
import { useAlertDispatch } from "../../context/alert";
import Box from "@mui/material/Box";

function getPhoneNumber(profile) {
  const haveCode = profile?.phone.startsWith(COLOMBIAN_CODE);
  return haveCode ? profile?.phone : `${COLOMBIAN_CODE}${profile.phone}`;
}

function Profile({ user }) {
  const [avatar, setAvatar] = useState(null);
  const [uploadedFile, setUploadedFile] = useState(null);
  const [{ data: profileData, loading }, { updateUser, getProfileData }] = [
    {},
    {},
  ];
  const { username: cognitoId, attributes } = user || {};
  const { email } = attributes;
  const { openErrorAlert } = useAlertDispatch();

  async function uploadPhoto() {
    // try {
    //   let photo = profileData?.photo || "";
    //   if (!uploadedFile) return photo;
    //
    //   const result = await uploadProfilePictureToS3(uploadedFile);
    //   console.log("result", result);
    //   photo = result.key;
    //   console.log("photo", photo);
    //   return photo;
    // } catch (error) {
    //   console.log("Error uploading file: ", error);
    // }
  }

  async function onSubmit(values) {
    const profile = {
      ...values,
      email,
      cognitoId,
    };
    console.log("profile", profile);
    const phone = getPhoneNumber(profile);
    const photo = await uploadPhoto();
    const haveChanged = Object.entries(profileData).some(
      ([key, value]) => profile[key] !== value
    );
    if (haveChanged) {
      await updateUser(profileData.id, { ...profile, phone, photo });
    }
  }

  useEffect(() => {
    if (!cognitoId) return;
    getProfileData(cognitoId);
    //eslint-disable-next-line
  }, [cognitoId]);

  const formikProps = useFormik({
    onSubmit,
    validationSchema,
    initialValues: getInitialValues(profileData),
    enableReinitialize: true,
  });

  async function handleChangePhoto(event) {
    try {
      const [file] = event.currentTarget.files || [];
      console.log("file", file);
      if (!file) return;
      await formikProps.setFieldValue("photo", file);
      const { base64 } = await getFile(file);
      setAvatar(base64);
      setUploadedFile(file);
    } catch (error) {
      console.error(error);
      openErrorAlert(error);
    }
  }

  function handleChangeNotification(e) {
    const { checked } = e.target;
    formikProps.setFieldValue("enableNotifications", checked);
  }

  const src = avatar || profileData?.signedPhoto;
  const departmentCities = citiesGroupByDepartment[formikProps?.values?.region];

  return (
    <Grid container spacing={2}>
      {loading && <LinearProgress />}
      <Grid item xs={12} md={6}>
        <Card sx={{ px: 4, py: 2 }} elevation={3}>
          <CardContent>
            <Box
              display={"flex"}
              marginBottom={40}
              marginTop={40}
              alignItems={"center"}
              alignContent={"center"}
              justifyContent="center"
              direction={"column"}
            >
              {!!src && (
                <img
                  alt="Foto Perfil"
                  src={src}
                  style={{
                    objectFit: "initial",
                    objectPosition: "50% 50%",
                    borderRadius: "50%",
                    backgroundColor: "initial",
                    height: "auto",
                    width: "180px",
                    opacity: "100%",
                  }}
                />
              )}
              <Box display={"flex"} mt={2}>
                <FormUpload
                  name="photo"
                  isSubmitting={formikProps.isSubmitting}
                  accept={SUPPORTED_IMAGE_FORMATS.join()}
                  handleChange={handleChangePhoto}
                />
              </Box>
            </Box>
            <Input
              name="name"
              required
              placeholder="Nombre"
              loading={loading}
              {...formikProps}
            />
            <Input
              name="lastname"
              required
              placeholder="Apellido"
              loading={loading}
              {...formikProps}
            />
            <Input
              name="phone"
              required
              placeholder="Celular"
              loading={loading}
              {...formikProps}
            />
            <FormGroup sx={{ justifySelf: "flex-end", my: 1 }}>
              <FormControlLabel
                control={
                  <Switch
                    isDisabled={formikProps.isSubmitting || loading}
                    checked={formikProps.values.enableNotifications}
                    onChange={handleChangeNotification}
                  />
                }
                label="Habilitar Notificaciones"
              />
            </FormGroup>
            <Divider />
            <Typography variant="h3" sx={{ mt: 4, mb: 2 }}>
              Información para pago
            </Typography>
            <Input
              name="document"
              placeholder="Documento"
              loading={loading}
              {...formikProps}
            />
            <FormSelect
              options={departments}
              label="Departamento"
              name={"region"}
              {...formikProps}
            />
            <FormSelect
              options={departmentCities}
              label="Ciudad"
              name={"city"}
              {...formikProps}
            />
            <Input
              name="address"
              placeholder="Dirección"
              loading={loading}
              {...formikProps}
            />
          </CardContent>
          <CardActions>
            <Button variant="outlined" onClick={formikProps.handleSubmit}>
              Guardar
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
}

function FormSelect({
  name,
  label,
  values,
  options,
  required = false,
  isSubmitting,
  handleChange,
  errors,
  touched,
}) {
  return (
    <FormControl
      sx={{ my: 1 }}
      fullWidth
      required={required}
      variant="outlined"
      error={!!errors[name]}
      disabled={isSubmitting}
    >
      <InputLabel id={`${name}-label`}>{label}</InputLabel>
      <Select
        labelId={`${name}-label`}
        id={name}
        name={name}
        label={label}
        disabled={isSubmitting}
        value={values[name] || ""}
        onChange={handleChange}
      >
        {(options || []).map((d, i) => (
          <MenuItem key={i} value={d.value}>
            {d.label}
          </MenuItem>
        ))}
      </Select>
      {!!touched[name] && !!errors[name] && (
        <FormHelperText>{errors[name] || ""}</FormHelperText>
      )}
    </FormControl>
  );
}

const Input = ({
  name,
  required = true,
  placeholder,
  values,
  loading,
  isSubmitting,
  type = "text",
  handleChange,
  errors,
}) => (
  <TextField
    type={type}
    name={name}
    fullWidth
    sx={{ my: 1 }}
    required={required}
    disabled={isSubmitting || loading}
    value={values[name] || ""}
    placeholder={placeholder}
    onChange={handleChange}
    helperText={errors[name]}
    error={!!errors[name]}
  />
);

function FormUpload({ accept, name, label, handleChange, isSubmitting }) {
  return (
    <>
      <input
        hidden
        name={name}
        type="file"
        disabled={isSubmitting}
        id={`${name}-button-file`}
        accept={accept}
        onChange={handleChange}
      />
      <label htmlFor={`${name}-button-file`}>
        {label}
        <Button component="span" variant="outlined" disabled={isSubmitting}>
          Sube una foto
        </Button>
      </label>
    </>
  );
}

export default Profile;
