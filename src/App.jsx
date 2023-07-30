import "./App.css";
import ThemeCustomization from '@/assets/themes';

// import Dashboard from "./components/Dashboard";
import MainLayout from "./layout";

function App() {

  return (
    <ThemeCustomization>
      <MainLayout />
      {/* <Dashboard /> */}
     </ThemeCustomization>
  );
}

export default App;
