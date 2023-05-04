import * as Yup from "yup";

export const COLOMBIAN_CODE = "+57";

export const validationSchema = Yup.object().shape({
  name: Yup.string().required(),
  email: Yup.string().email().required(),
  password: Yup.string().required(),
});

export const getInitialValues = (profileData) => ({
  name: profileData?.name || "",
  email: profileData?.email || "",
  password: profileData?.password || "",
});
