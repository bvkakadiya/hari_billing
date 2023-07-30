import React, { useState } from 'react';
import "./App.css";
import ThemeCustomization from "@/assets/themes";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import CompanyForm from "./components/CompanyForm";
import CompaniesTable from "./components/CompaniesTable";

function App() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <ThemeCustomization>
      <AppBar position="fixed" color="primary">
        <Toolbar>
          <Typography variant="h6">Hari Billing App</Typography>
          <Button color="inherit" onClick={handleOpen}>Add Company</Button>
        </Toolbar>
      </AppBar>

      <Modal open={open} onClose={handleClose}>
        <CompanyForm onClose={handleClose} />
      </Modal>

      <CompaniesTable />
    </ThemeCustomization>
  );
}

export default App;