import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Container from '@mui/material/Container';
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';

const columns = [
  { field: 'name', headerName: 'Name', width: 200 },
  { field: 'address', headerName: 'Address', width: 300 },
  { field: 'gstNumber', headerName: 'GST Number', width: 150 },
];

const CompaniesTable = (props) => {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    const dbName = "my-db";
    const storeName = "my-store";
    const indexName = "name";

    const request = indexedDB.open(dbName);
    request.onsuccess = (event) => {
      const db = event.target.result;
      const tx = db.transaction(storeName, "readonly");
      const store = tx.objectStore(storeName);
      const index = store.index(indexName);
      const request = index.getAll();
      request.onsuccess = (event) => {
        const data = event.target.result;
        console.log(data);
        // give data to id property
        const newData = data.map((item, index) => {
            item.id = index
            return item
        })
        setCompanies(newData);
      };
    };
  }, []);

  return (
    <Container maxWidth="lg">
      <h1>Companies Table</h1>
      <Paper sx={{ height: 400, width: '100%' }}>
        <DataGrid rows={companies} columns={columns} pageSize={5} />
      </Paper>
    </Container>
  );
};

CompaniesTable.propTypes = {};

export default CompaniesTable;