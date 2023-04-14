import * as Yup from "yup";

const getObligatoryText = (field) => `Campo ${field} Obligatorio!`;

export const COLOMBIAN_CODE = "+57";

export const validationSchema = Yup.object().shape({
  phone: Yup.string().required(getObligatoryText("celular")),
  name: Yup.string().required(getObligatoryText("nombre")),
  enableNotifications: Yup.boolean(),
  lastname: Yup.string().required(getObligatoryText("apeliido")),
});

export const getInitialValues = (profileData) => ({
  phone: profileData?.phone || 0,
  name: profileData?.name || "",
  document: profileData?.document || "",
  city: profileData?.city || "",
  address: profileData?.address || "",
  region: profileData?.region || "",
  enableNotifications: profileData?.enableNotifications || false,
  lastname: profileData?.lastname || "",
});
