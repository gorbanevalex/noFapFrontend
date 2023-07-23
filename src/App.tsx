import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { theme } from "themes/theme";
import AuthProvider from "providers/AuthProvider";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AuthProvider />
    </ThemeProvider>
  );
}

export default App;
