import React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import TableBody from "@mui/material/TableBody";
import TableHead from "@mui/material/TableHead";

import TableHeader from "./TableHeader";
import TableRowItem from "./TableRowItem";

function DataTable({
  currentRecords,
  selectedRows,
  editingRowId,
  editName,
  editEmail,
  editRole,
  handleSelectAll,
  handleRowSelected,
  handleEdit,
  handleSaveEdit,
  cancelEdit,
  handleDelete,
  handleEditNameChange,
  handleEditEmailChange,
  handleEditRoleChange,
  setSelectedRows,
}) {
  const allRowsSelected = selectedRows.length === currentRecords.length;

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableHeader
            allRowsSelected={allRowsSelected}
            handleSelectAll={handleSelectAll}
            selectedRows={selectedRows}
            setSelectedRows={setSelectedRows} 
            currentRecords={currentRecords} 
          />
        </TableHead>
        <TableBody>
          {currentRecords.map((row) => (
            <TableRowItem
              key={row.id}
              row={row}
              selected={selectedRows.includes(row)}
              editing={row.id === editingRowId}
              editName={editName}
              editEmail={editEmail}
              editRole={editRole}
              handleRowSelected={handleRowSelected}
              handleEdit={handleEdit}
              handleSaveEdit={handleSaveEdit}
              cancelEdit={cancelEdit}
              handleDelete={handleDelete}
              handleEditNameChange={handleEditNameChange}
              handleEditEmailChange={handleEditEmailChange}
              handleEditRoleChange={handleEditRoleChange}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default DataTable;










