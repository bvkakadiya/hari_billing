import PropTypes from "prop-types";
import { Formik, Field, Form } from "formik";
import FormControl from "@mui/material/FormControl";
// import { useState } from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";

const CompanyForm = (props) => {
  const categories = ["Gujarat", "Rajesthan", "Maharastra", "Madhay Pradesh"];

  const handleSubmit = async (values) => {
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

      const data = values;
      const request = nameIndex.get(data.name);
      request.onsuccess = (event) => {
        const existingData = event.target.result;
        if (!existingData) {
          const addRequest = store.add(data);
          addRequest.onsuccess = () => {
            console.log(
              "Data added to the object store with ID:",
              addRequest.result
            );
          };
        } else {
          console.log(
            "Data already exists in the object store with ID:",
            existingData.id
          );
        }
      };
      tx.oncomplete = () => {
        console.log("Data added to the object store");
      };
    };
  };

  return (
    <Formik
      initialValues={{
        name: "",
        contactNumber: "",
        email: "",
        address: "",
        gstNumber: "",
        state: "",
        code: "",
      }}
      onSubmit={handleSubmit}
    >
      {({ values }) => (
        <Form>
          <Paper
            elevation={3}
            sx={{ mt: 3, marginRight: "15%", marginLeft: "15%" }}
          >
            <Box sx={{ padding: 5 }}>
              <Typography variant="h6" gutterBottom sx={{ paddingBottom: 5 }}>
                Company Details
              </Typography>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={3}>
                  <InputLabel
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      fontWeight: 700,
                    }}
                  >
                    Name
                  </InputLabel>
                </Grid>
                <Grid item xs={12} sm={9}>
                  <Field
                    required
                    id="name"
                    name="name"
                    label="Name"
                    fullWidth
                    size="small"
                    autoComplete="off"
                    variant="outlined"
                    as={TextField}
                  />
                </Grid>
                <Grid item xs={12} sm={3}>
                  <InputLabel
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      fontWeight: 700,
                    }}
                  >
                    Contact Number
                  </InputLabel>
                </Grid>
                <Grid item xs={12} sm={9}>
                  <Field
                    required
                    id="contactNumber"
                    name="contactNumber"
                    label="Contact Number"
                    fullWidth
                    size="small"
                    autoComplete="off"
                    variant="outlined"
                    as={TextField}
                  />
                </Grid>
                <Grid item xs={12} sm={3}>
                  <InputLabel
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      fontWeight: 700,
                    }}
                  >
                    Email ID
                  </InputLabel>
                </Grid>
                <Grid item xs={12} sm={9}>
                  <Field
                    required
                    id="email"
                    name="email"
                    label="Email ID"
                    fullWidth
                    size="small"
                    autoComplete="off"
                    variant="outlined"
                    as={TextField}
                  />
                </Grid>
                <Grid item xs={12} sm={3}>
                  <InputLabel
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      fontWeight: 700,
                    }}
                  >
                    Address
                  </InputLabel>
                </Grid>
                <Grid item xs={12} sm={9}>
                  <Field
                    id="address"
                    name="address"
                    label="Address"
                    multiline
                    fullWidth
                    rows={4}
                    as={TextField}
                  />
                </Grid>
                <Grid item xs={12} sm={3}>
                  <InputLabel
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      fontWeight: 700,
                    }}
                  >
                    GST Number
                  </InputLabel>
                </Grid>
                <Grid item xs={12} sm={9}>
                  <Field
                    required
                    id="gstNumber"
                    name="gstNumber"
                    label="GST Number"
                    fullWidth
                    size="small"
                    autoComplete="off"
                    variant="outlined"
                    as={TextField}
                  />
                </Grid>
                <Grid item xs={12} sm={3}>
                  <InputLabel
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      fontWeight: 700,
                    }}
                  >
                    State
                  </InputLabel>
                </Grid>
                <Grid item xs={12} sm={3}>
                  <FormControl fullWidth size="small">
                    <InputLabel id="demo-simple-select-label">State</InputLabel>
                    <Field
                      as={Select}
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      name="state"
                      value={values.state}
                      label="State"
                      //   onChange={handleChange}
                    >
                      {categories.map((item, index) => (
                        <MenuItem value={item} key={index}>
                          {item}
                        </MenuItem>
                      ))}
                    </Field>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={3}>
                  <InputLabel
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      fontWeight: 700,
                    }}
                  >
                    Code
                  </InputLabel>
                </Grid>
                <Grid item xs={12} sm={3}>
                  <Field
                    required
                    id="code"
                    name="code"
                    label="State Code"
                    fullWidth
                    size="small"
                    autoComplete="off"
                    variant="outlined"
                    as={TextField}
                  />
                </Grid>

                <Grid item xs={12} sm={4}>
                  <Button type="submit" variant="contained">
                    Save
                  </Button>
                </Grid>
                <Grid item xs={12} sm={5} />
              </Grid>
            </Box>
          </Paper>
        </Form>
      )}
    </Formik>
  );
};

CompanyForm.propTypes = {};

export default CompanyForm;
