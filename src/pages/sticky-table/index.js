import React from 'react';
import StickyTable from '../../components/StickyTable';
import rowsData from './data.json';

const columnsData = [
  { key: 'name', label: 'Name' },
  { key: 'gender', label: 'Gender' },
  { key: 'company', label: 'Company' },
  { key: 'email', label: 'E-mail' },
  { key: 'phone', label: 'Phone' },
  { key: 'address', label: 'Address' },
  { key: 'favoriteFruit', label: 'Favorite Fruit' },
];

const StickyTablePage = () => (
  <StickyTable
    tableWidth="600px"
    columns={columnsData}
    rows={rowsData}
  />
);

export default StickyTablePage;
