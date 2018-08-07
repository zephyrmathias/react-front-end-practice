import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TableWrapper = styled.div`
  position: relative;
  width: ${({ tableWidth }) => tableWidth || '900px'};
`;

const Scroller = styled.div`
  width: 100%;
  overflow-x:auto;
  overflow-y:visible;
  padding-bottom: 5px;
  
  @media (max-width: 768px) {
    margin-left:150px;
  }
`;

const Table = styled.table`
  table-layout: fixed;
  width: 100%;
  font-size: 14px;
  border-collapse: collapse;

  > thead > tr > th,
  > tbody > tr > td {
    background: white;
    box-sizing: border-box;
    width: 150px;
    white-space: no-wrap;
    word-wrap: break-word;
    padding: 7px;
  }

  @media (max-width: 768px) {
    > thead > tr > th:nth-child(1),
    > tbody > tr > td:nth-child(1) {
      position: absolute;
      left: 0;
    }
  }
`;

const TableHead = styled.thead`
  > tr > th {
    text-align: left;
    font-weight: bold;
    font-size: 16px;
    border-bottom: 1px solid red;
  }
`;

const TableBody = styled.tbody`
  > tr > td {
    vertical-align: top;
    height: 90px;
  }
`;

const StickyTable = ({
  tableWidth,
  columns,
  rows,
}) => {
  const renderColumns = () => {
    const columnsData = columns.map(col => (
      <th key={col.key}>
        {col.label}
      </th>
    ));
    return <tr>{columnsData}</tr>;
  };

  const renderRows = (
    rows.map((row) => {
      const rowsData = columns.map(col => (
        <td key={col.key}>
          {row[col.key]}
        </td>
      ));
      return (
        <tr key={row.id}>
          {rowsData}
        </tr>
      );
    })
  );

  return (
    <TableWrapper tableWidth={tableWidth}>
      <Scroller>
        <Table>
          <TableHead>
            {renderColumns()}
          </TableHead>
          <TableBody>
            {renderRows}
          </TableBody>
        </Table>
      </Scroller>
    </TableWrapper>
  );
};

StickyTable.propTypes = {
  tableWidth: PropTypes.string,
  columns: PropTypes.arrayOf(Object).isRequired,
  rows: PropTypes.arrayOf(Object).isRequired,
};

StickyTable.defaultProps = {
  tableWidth: '900px',
};

export default StickyTable;
