import { useState } from 'react';
import "./App.css";
import ThemeCustomization from "@/assets/themes";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import CompanyForm from "./components/CompanyForm";
import CompaniesTable from "./components/CompaniesTable";
import ProductModel from './components/ProductModel';

function App() {
  const [open, setOpen] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [openProduct, setOpenProduct] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleRefresh = () => {
    setRefresh(!refresh);
  };

  return (
    <ThemeCustomization>
      <AppBar position="fixed" color="primary">
        <Toolbar>
          <Typography variant="h6">Hari Billing App</Typography>
          <Button color="inherit" onClick={handleOpen}>Add Company</Button>
          <Button color="inherit" onClick={handleRefresh}>Refresh</Button>
          <Button color="inherit" onClick={setOpenProduct}>Add Product</Button>
        </Toolbar>
      </AppBar>

      <Modal open={open} onClose={handleClose}>
        <CompanyForm onClose={handleClose} setRefresh={setRefresh} />
      </Modal>
      <ProductModel open={openProduct} onClose={()=>setOpenProduct(false) }/>

      <CompaniesTable refresh={refresh} />
    </ThemeCustomization>
  );
}

export default App;