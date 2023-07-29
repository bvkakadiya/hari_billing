import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import theme from "@/assets/theme";
import { ThemeProvider } from "@mui/material";
import Dashboard from "./components/Dashboard";

function App() {
  const [count, setCount] = useState(0);

  return (
    <ThemeProvider theme={theme}>
      <Dashboard />
     </ThemeProvider>
  );
}

export default App;
