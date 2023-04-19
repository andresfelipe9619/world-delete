import format from "date-fns/format";
import { es } from "date-fns/locale";

export const isProduction = process.env.NODE_ENV === "production";

export const DATE_FORMAT = "yyyy-MM-dd HH:mm:ss";

export function calculateOrthographicCameraSize(canvas, fixedSizePixels) {
  const { width, height } = canvas;
  const aspect = width / height;
  const size = (fixedSizePixels / height) * 2;
  return {
    left: (-aspect * size) / 2,
    right: (aspect * size) / 2,
    top: size / 2,
    bottom: -size / 2,
    size,
  };
}

export const SUPPORTED_IMAGE_FORMATS = ["image/jpg", "image/jpeg", "image/png"];

export const map2select = ([value, label]) => ({ label, value });

export function dateFormatter({ value }) {
  if (value && new Date(value)) {
    return format(new Date(value), "PP", { locale: es });
  }
  return "N/A";
}

export function nullifyObjectEmptyStrings(object) {
  return Object.entries(object).reduce(
    (acc, [key, value]) => ({
      ...acc,
      [key]: replaceEmptyStringWithNull(value),
    }),
    {}
  );
}

export const getFileExtension = (fileName, forceLowerCase = true) => {
  let [extension] = fileName
    .split(".")
    .reverse()
    .slice(0, 1)
    .join("")
    .split("/");
  if (forceLowerCase) extension = extension.toLowerCase();
  return extension;
};

export const getFile = (file) => {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onloadend = () =>
      resolve({ name: file.name, base64: reader.result });
    reader.readAsDataURL(file);
  });
};

export function replaceEmptyStringWithNull(value) {
  if (!value) return null;
  return value;
}

export const isDate = (item) =>
  isNaN(item) && new Date(item) !== "Invalid Date" && !isNaN(new Date(item));

export const isObject = (item) => !!item && typeof item === "object";

export const isBoolean = (item) => typeof item === "boolean";

export const isNullish = (item) => typeof item === "undefined" || item === null;
