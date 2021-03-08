import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#000",
      contrastText: "white",
    },

    text: {
      primary: "black",
      fontSize: "18px",
    },
  },
});

export default theme;
