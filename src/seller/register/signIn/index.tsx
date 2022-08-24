import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Button, TextField, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createNewAccountAction } from "../../../redux/action/user.action";
import { emailValidation } from "../../../script/validation";
const SignIN = (props: any) => {
  const [values, setValues] = useState<any>({
    email: "",
    username: "",
    password: "",
    repeatpassword: "",
    showRepeatPassword: false,
    showPassword: false,
  });
  const [erros, setErros] = useState<any>({});
  const dispatch: Function = useDispatch();
  const handleChange =
    (prop: keyof any) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
    };

  const handleClickShowPassword = (props: any) => {
    console.log();
    setValues({
      ...values,
      [props]: values[props] ? false : true,
    });
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  const handleSignIn = () => {
    if (
      values.email &&
      values.username &&
      values.password &&
      values.repeatpassword
    ) {
      if (!emailValidation(values.email)) {
        setErros({ ...erros, email: "ایمیل معتبر نیست" });
      } else if (values.password === values.repeatpassword) {
        var data = {
          email: values.email,
          password: values.password,
          name: values.username,
        };
        dispatch(createNewAccountAction(data));
      }
    }
  };
  const handleValidateRepeatPassWord = () => {
    if (
      values.password &&
      values.password.length >= 5 &&
      values.password !== values.repeatpassword
    ) {
      setErros({ ...erros, repeatpassword: "تکرار رمز عبور مطابقت ندارد" });
    } else {
      setErros({ ...erros, repeatpassword: null });
    }
  };
  const handleValidatePassWord = () => {
    if (values.password && values.password.length < 5) {
      setErros({ ...erros, password: "رمز عبور وارد شده بسیار ضعیف است" });
    } else {
      setErros({ ...erros, password: null });
    }
  };

  return (
    <>
      <Typography variant="body1">ثبت نام</Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="body1">حساب کاربری دارید ؟ </Typography>
        <Typography variant="body1" sx={{ mx: 1 }}>
          /
        </Typography>
        <Typography
          sx={{ cursor: "pointer", fontWeight: "bold" }}
          variant="body1"
          onClick={() => props.setHasAccount(true)}
        >
          ورود{" "}
        </Typography>
      </Box>
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
        {" "}
        <FormControl
          sx={{ m: 1, width: "45ch", color: "#fff !important" }}
          variant="filled"
        >
          <TextField
            variant="filled"
            sx={{ color: "#fff" }}
            id="filled-adornment-email"
            value={values.email}
            onChange={handleChange("email")}
            error={erros.email ? true : false}
            helperText={erros.email}
            label="ایمیل"
          />
        </FormControl>
        <FormControl
          sx={{ m: 1, width: "45ch", color: "#fff !important" }}
          variant="filled"
        >
          <TextField
            variant="filled"
            sx={{ color: "#fff" }}
            id="filled-adornment-username"
            value={values.username}
            onChange={handleChange("username")}
            label="نام کاربری"
          />
        </FormControl>
        <FormControl
          sx={{ m: 1, width: "45ch", color: "#fff !important" }}
          variant="filled"
        >
          <TextField
            variant="filled"
            sx={{ color: "#fff" }}
            id="filled-adornment-password"
            type={values.showPassword ? "text" : "password"}
            value={values.password}
            onChange={handleChange("password")}
            onBlur={handleValidatePassWord}
            error={erros.password ? true : false}
            helperText={erros.password}
            label="رمز عبور"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => handleClickShowPassword("showPassword")}
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
              ),
            }}
          />
        </FormControl>
        <FormControl
          sx={{ m: 1, width: "45ch", color: "#fff !important" }}
          variant="filled"
        >
          <TextField
            variant="filled"
            sx={{ color: "#fff" }}
            id="filled-adornment-showRepeatPassword"
            type={values.showRepeatPassword ? "text" : "password"}
            value={values.repeatpassword}
            onChange={handleChange("repeatpassword")}
            onBlur={handleValidateRepeatPassWord}
            error={erros.repeatpassword ? true : false}
            helperText={erros.repeatpassword}
            label=" تکرار رمز عبور"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() =>
                      handleClickShowPassword("showRepeatPassword")
                    }
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {values.showRepeatPassword ? (
                      <VisibilityOff sx={{ color: "#fff !important" }} />
                    ) : (
                      <Visibility sx={{ color: "#fff !important" }} />
                    )}
                  </IconButton>
                </InputAdornment>
              ),
            }}
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
        }}
        variant="contained"
        size="large"
        onClick={handleSignIn}
      >
        ثبت نام
      </Button>
    </>
  );
};

export default SignIN;
