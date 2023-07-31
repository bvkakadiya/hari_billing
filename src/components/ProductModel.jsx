import React, { useState } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@mui/styles";
import { Button, Modal, TextField, Select, MenuItem } from "@mui/material";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  formControl: {
    marginTop: theme.spacing(2),
    minWidth: 120,
  },
  formControlLabel: {
    marginTop: theme.spacing(1),
  },
}));

const ProductModel = ({open, onClose}) => {
  const classes = useStyles();
  const [companies, setCompanies] = useState([]);
  const initialValues = {
    name: "",
    description: "",
    price: "",
    companyId: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    description: Yup.string().required("Required"),
    price: Yup.number().required("Required"),
    companyId: Yup.string().required("Required"),
  });

  const onSubmit = (values, { resetForm }) => {
    // props.onSave(values);
    resetForm();
    // handleClose();
    onClose();
  };

//   const handleClose = () => {
//     setOpen(false);
//   };

  const dbName = "my-db";
  const storeName = "my-store";
  const indexName = "name";

  const request = indexedDB.open(dbName);

  // Create the object store if it doesn't exist
  request.onupgradeneeded = (event) => {
    const db = event.target.result;
    const stores = db.createObjectStore(storeName, { autoIncrement: true });
    stores.createIndex(indexName, "name", { unique: true });
  };

  // Add data to the object store
  request.onsuccess = (event) => {
    const db = event.target.result;
    const tx = db.transaction(storeName, "readwrite");
    const store = tx.objectStore(storeName);
    const nameIndex = store.index(indexName);
    const request = nameIndex.getAll();
    request.onsuccess = (event) => {
      const data = event.target.result;
      console.log(data);
      // give data to id property
      const newData = data.map((item, index) => {
        item.id = index;
        return item;
      });
      setCompanies(newData);
    };
  };


  return (
   
      <Modal open={open} onClose={onClose}>
        <div className={classes.paper}>
          <h2 id="simple-modal-title">Add Product</h2>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {({ errors, touched }) => (
              <Form className={classes.form}>
                <Field
                  as={TextField}
                  autoFocus
                  margin="dense"
                  id="name"
                  name="name"
                  label="Name"
                  type="text"
                  error={touched.name && Boolean(errors.name)}
                  helperText={touched.name && errors.name}
                />
                <Field
                  as={TextField}
                  margin="dense"
                  id="description"
                  name="description"
                  label="Description"
                  type="text"
                  error={touched.description && Boolean(errors.description)}
                  helperText={touched.description && errors.description}
                />
                <Field
                  as={TextField}
                  margin="dense"
                  id="price"
                  name="price"
                  label="Price"
                  type="number"
                  error={touched.price && Boolean(errors.price)}
                  helperText={touched.price && errors.price}
                />
                <Field
                  as={Select}
                  margin="dense"
                  id="companyId"
                  name="companyId"
                  label="Company"
                  error={touched.companyId && Boolean(errors.companyId)}
                  helperText={touched.companyId && errors.companyId}
                >
                  {companies.map((company) => (
                    <MenuItem key={company.id} value={company.id}>
                      {company.name}
                    </MenuItem>
                  ))}
                </Field>
                <Button type="submit">Save</Button>
                <Button onClick={onClose}>Cancel</Button>
              </Form>
            )}
          </Formik>
        </div>
      </Modal>
    
  );
};

ProductModel.propTypes = {
    onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default ProductModel;
