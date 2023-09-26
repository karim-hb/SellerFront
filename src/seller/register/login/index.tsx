import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Button, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import FilledInput from "@mui/material/FilledInput";
import FormControl from "@mui/material/FormControl";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import InputLabel from "@mui/material/InputLabel";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginAction } from "../../../redux/action/user.action";
const Login = (props: any) => {
  const [values, setValues] = useState<any>({
    email: "",
    password: "",
  });
  const dispatch: Function = useDispatch();
  const handleChange =
    (prop: keyof any) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
    };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  const handleLogin = () => {
    if (values.password && values.email) {
      var data = {
        username: values.email,
        password: values.password,
      };
      dispatch(loginAction(data));
    }
  };
  return (
    <>
      <Typography variant="body1">ورود </Typography>
  {/*     <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="body1">حساب کاربری ندارید ؟ </Typography>
        <Typography variant="body1" sx={{ mx: 1 }}>
          /
        </Typography>
        <Typography
          sx={{ cursor: "pointer", fontWeight: "bold" }}
          variant="body1"
          onClick={() => props.setHasAccount(false)}
        >
          ساخت حساب کاربری
        </Typography>
      </Box> */}
      <Box
        component="form"
        sx={{
          height: "40%",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          flexDirection: "column",
          width: "100%",
        }}
      >
        <FormControl
          sx={{ m: 1, width: "45ch", color: "#fff !important" }}
          variant="filled"
        >
          <InputLabel
            sx={{ color: "#fff !important" }}
            htmlFor="filled-adornment-email"
          >
            ایمیل
          </InputLabel>
          <FilledInput
            id="filled-adornment-email"
            value={values.email}
            onChange={handleChange("email")}
          />
        </FormControl>
        <FormControl
          sx={{ m: 1, width: "45ch", color: "#fff !important" }}
          variant="filled"
        >
          <InputLabel
            sx={{ color: "#fff !important" }}
            htmlFor="filled-adornment-password"
          >
            رمز عبور
          </InputLabel>
          <FilledInput
            id="filled-adornment-password"
            type={values.showPassword ? "text" : "password"}
            value={values.password}
            onChange={handleChange("password")}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? (
                    <VisibilityOff sx={{ color: "#fff !important" }} />
                  ) : (
                    <Visibility sx={{ color: "#fff !important" }} />
                  )}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
      </Box>

      <Button
        sx={{
          width: "45ch",
          background: (theme) => theme.palette.secondary.main,
          "&:hover": {
            background: (theme) => theme.palette.secondary.dark,
          },
          "&:disabled": {
            background: (theme) => theme.palette.grey[400],
            color: "#fff",
          },
        }}
        variant="contained"
        size="large"
        onClick={handleLogin}
        disabled={!(values.password && values.email)}
      >
        ورود
      </Button>
    </>
  );
};

export default Login;
