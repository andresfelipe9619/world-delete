import { useNavigate, useRouteError } from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function ErrorPage() {
  const error = useRouteError();
  const navigate = useNavigate();
  console.error(error);

  const message = error.statusText || error.message;
  if (message === "Not Found") {
    return (
      <Box
        id="error-page"
        textAlign="center"
        display={"flex"}
        alignItems={"center"}
        height={"90vh"}
        justifyContent={"center"}
        flexDirection={"column"}
      >
        <Typography variant={"h1"} paragraph sx={{ fontSize: 60 }}>
          404 page
        </Typography>
        <Typography sx={{ mb: 10 }}>Nothing ahead</Typography>
        <Button variant={"outlined"} onClick={() => navigate("/")}>
          Home Page
        </Button>
      </Box>
    );
  }

  return (
    <Box id="error-page" textAlign="center">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{message}</i>
      </p>
    </Box>
  );
}
