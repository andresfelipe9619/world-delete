import { Alert } from "@aws-amplify/ui-react";
import React from "react";

export default function ErrorAlert({ error }) {
  if (!error) return null;
  return <Alert variation="error">{error?.message || "Algo salió mal"}</Alert>;
}
