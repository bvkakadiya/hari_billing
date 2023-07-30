import "./App.css";
import ThemeCustomization from "@/assets/themes";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CompanyForm from "./components/CompanyForm";

// import Dashboard from "./components/Dashboard";

function App() {
  return (
    <ThemeCustomization>
      <AppBar position="fixed" color="primary">
        <Toolbar>
          <Typography variant="h6">Hari Billing App</Typography>
          <Typography variant="h6">Hari Billing App</Typography>
          <Typography variant="h6">Hari Billing App</Typography>
        </Toolbar>
      </AppBar>

      <CompanyForm />
      {/* <Dashboard /> */}
    </ThemeCustomization>
  );
}

export default App;
