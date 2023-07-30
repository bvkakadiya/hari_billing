import "./App.css";
import ThemeCustomization from '@/assets/themes';
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'

// import Dashboard from "./components/Dashboard";

function App() {

  return (
    <ThemeCustomization>
    Hello
    <AppBar position="fixed" color="primary">
      <Toolbar>
        <Typography variant="h6">
          Hello
        </Typography>
      </Toolbar>
    </AppBar>
      {/* <Dashboard /> */}
     </ThemeCustomization>
  );
}

export default App;
