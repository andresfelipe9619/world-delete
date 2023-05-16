import React from "react";
import { Button, Checkbox, TextField, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { useFormik } from "formik";
import FormControlLabel from "@mui/material/FormControlLabel";

const ContactForm = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      email: "",
      country: "",
      howdidyou: "",
      tellus: "",
    },
    onSubmit: (values) => {
      // Handle form submission
      console.log(values);
    },
  });

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignContent={"space-between"}
    >
      <CustomTextField
        name={"name"}
        label={"Name"}
        value={formik.values.name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      <CustomTextField
        name={"phone"}
        label={"Phone"}
        value={formik.values.phone}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      <CustomTextField
        name={"email"}
        label={"Email"}
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      <CustomTextField
        name={"country"}
        label={"Country"}
        value={formik.values.country}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      <CustomTextField
        name={"howdidyou"}
        label={"How did you hear about us?"}
        value={formik.values.howdidyou}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      <CustomTextField
        name={"tellus"}
        label={"Tell us about yourself"}
        helperText={"300 symbols max"}
        value={formik.values.tellus}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      <FormControlLabel
        sx={{ my: 2 }}
        control={<Checkbox defaultChecked />}
        label={
          <Typography variant={"caption"}>
            I have read and accept the Privacy policy
          </Typography>
        }
      />
      <Button
        onClick={formik.handleSubmit}
        sx={{ my: 4, width: 140 }}
        variant={"contained"}
      >
        Send
      </Button>
    </Box>
  );
};

const CustomTextField = ({
  name,
  label,
  value,
  onChange,
  onBlur,
  helperText,
}) => {
  return (
    <TextField
      fullWidth
      sx={{ mt: 1 }}
      variant="standard"
      name={name}
      label={label}
      value={value}
      helperText={helperText || ""}
      onChange={onChange}
      onBlur={onBlur}
    />
  );
};
export default ContactForm;
