import { styled } from "@mui/material/styles";
import {
  Link,
  Container,
  Typography,
  Divider,
  Stack,
  Button,
  InputAdornment,
  TextField,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Apple, Google, PasswordOutlined } from "@mui/icons-material";

// ----------------------------------------------------------------------

const StyledRoot = styled("div")(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    display: "flex",
  },
}));

const StyledSection = styled("div")(({ theme }) => ({
  width: "100%",
  maxWidth: 480,
  display: "flex",
  flexDirection: "column",
  // boxShadow: theme.shadows.,
  backgroundColor: "#1A1A1F",
}));

const StyledContent = styled("div")(({ theme }) => ({
  maxWidth: 480,
  margin: "auto",
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  padding: theme.spacing(12, 0),
}));

// ----------------------------------------------------------------------

export default function LoginPage() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const handleClick = () => {
    navigate("/dashboard", { replace: true });
  };

  return (
    <StyledRoot>
      {/*<Logo*/}
      {/*  sx={{*/}
      {/*    position: "fixed",*/}
      {/*    top: { xs: 16, sm: 24, md: 40 },*/}
      {/*    left: { xs: 16, sm: 24, md: 40 },*/}
      {/*  }}*/}
      {/*/>*/}

      <StyledSection>
        <Typography variant="h3" sx={{ px: 2, mt: 10, mb: 5 }}>
          World Delete
        </Typography>{" "}
        <Typography variant="h3" sx={{ px: 2 }}>
          Don’t wait any longer for help if you are suffering from a
          reputational crisis. Contact us using the following form and we will
          get in touch with you in less than thirty (30) minutes.
        </Typography>
      </StyledSection>

      <Container maxWidth="sm">
        <StyledContent>
          <Typography variant="h4" gutterBottom>
            Sign in
          </Typography>
          <Typography variant="body2" sx={{ mb: 5 }}>
            Don’t have an account? {""}
            <Link variant="subtitle2">Sign up</Link>
          </Typography>
          <Stack direction="row" spacing={2}>
            <Button
              fullWidth
              size="large"
              color="inherit"
              variant="outlined"
              endIcon={<Apple />}
            >
              Apple
            </Button>
            <Button
              fullWidth
              size="large"
              color="inherit"
              variant="outlined"
              endIcon={<Google />}
            >
              Google
            </Button>
          </Stack>
          <Divider sx={{ my: 3 }}>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              OR
            </Typography>
          </Divider>
          <Stack spacing={3}>
            <TextField name="email" label="Email" />

            <TextField
              name="password"
              label="Password"
              type={showPassword ? "text" : "password"}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowPassword(!showPassword)}
                      edge="end"
                    >
                      <PasswordOutlined />
                      {/*<Iconify*/}
                      {/*  icon={*/}
                      {/*    showPassword ? "eva:eye-fill" : "eva:eye-off-fill"*/}
                      {/*  }*/}
                      {/*/>*/}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Stack>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            sx={{ my: 6 }}
          >
            <Button
              size="large"
              type="submit"
              variant="contained"
              onClick={handleClick}
            >
              Login
            </Button>
            <Link variant="subtitle2" underline="hover">
              Forgot password?
            </Link>
          </Stack>
        </StyledContent>
      </Container>
    </StyledRoot>
  );
}
