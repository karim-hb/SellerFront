import { Button, Box, Container, Typography } from "@mui/material";
import { useState } from "react";
import Login from "./login";
import SignIN from "./signIn";
const Register = () => {
  const [hasAccount, setHasAccount] = useState<boolean>(false);
  return (
    <Box
      sx={{
        background:
          "url(./assets/images/loginHero.jpg) no-repeat center center",
        width: "100vw",
        height: "100vh",
        position: "relative",
      }}
      className="login"
    >
      <Box
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          px: { md: 10 },
          maxWidth: "600px",
        }}
      >
        <Box
          sx={{
            height: { md: "80%", xs: "100%" },
            borderRadius: 2,
            background: "rgb(76 68 68 / 89%)",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            flexDirection: "column",
            width: "100%",
          }}
        >
      
            {hasAccount ? (
              <Login setHasAccount={(data: boolean) => setHasAccount(data)} />
            ) : (
              <SignIN setHasAccount={(data: boolean) => setHasAccount(data)} />
            )}
    
          <Box sx={{ borderTop: "1px solid #cccccc", pt: 3, px: 1 }}>
            <Typography variant="body2">
              ورود شما به سایت به معنی این است شما تمام قوانین سایت را پذیرفته
              اید
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Register;
