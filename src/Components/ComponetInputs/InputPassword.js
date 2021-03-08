import React from "react";
import { VisibleDiv, P } from "./Styled";
import { ThemeProvider } from "@material-ui/core";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import theme from "./Theme/theme";

function ComponentInputs(props) {
  const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "72px",
    },
    margin: {
      margin: "8px 0",
    },
    withoutLabel: {
      marginTop: theme.spacing(3),
    },
    textField: {
      width: "328px",
    },
  }));

  const classes = useStyles();
  const [values, setValues] = React.useState({
    password: "",
    showPassword: false,
  });

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <FormControl
          className={clsx(classes.margin, classes.textField)}
          variant="outlined"
        >
          <InputLabel htmlFor="outlined-adornment-password">
            {props.label}
          </InputLabel>
          <OutlinedInput
            error={props.errorPassword}
            name={props.name}
            placeholder={props.placeholder}
            id="outlined-adornment-password"
            type={values.showPassword ? "text" : "password"}
            value={props.value}
            onChange={props.onChange}
            endAdornment={
              <InputAdornment position="end" className={"inputBox"}>
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
            labelWidth={70}
          />
          <VisibleDiv errorPassword={props.errorPassword} visible={"none"}>
            <P>Deve ser a mesma que a anterior</P>
          </VisibleDiv>
        </FormControl>
      </div>
    </ThemeProvider>
  );
}
export default ComponentInputs;
