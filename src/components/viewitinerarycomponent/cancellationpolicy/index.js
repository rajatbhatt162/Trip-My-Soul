
"use client"
import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import CloseIcon from '@mui/icons-material/Close';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import { Box, Container, Grid, Typography } from '@mui/material';

const columns = [
  { id: 'name', minWidth: 170 },
  { id: 'code', label: 'Upto 16 days', minWidth: 170 },
  { id: 'population', label: '15-8 days', minWidth: 170 },
  { id: 'size', label: '7-3 days', minWidth: 170 },
  { id: 'density', label: '2-0 days', minWidth: 170 },
];

function createData(name, code, population, size, density) {
  return { name, code, population, size, density };
}

const rows = [
  createData('Batch Shifting', <CheckOutlinedIcon sx={{color:'green'}} aria-label="Check mark" />, <CloseIcon color="error" aria-label="Close mark" />, <CloseIcon color="error" aria-label="Close mark" />, <CloseIcon color="error" aria-label="Close mark" />),
  createData('Cancellation Charge', 'Free Cancellation', '25% of the Trip Amount', '50% of the Trip Amount', '100% of the Trip Amount'),
  createData('Booking Amount', 'Refunded in mode of Credit Note', 'Adjusted in Refund Deduction', 'Adjusted in Refund Deduction', 'No Refund'),
  createData('Remaining Amount', 'Full Refund (minus) booking amount', 'Refund (minus) 25% of the trip amount', 'Refund (minus) 50% of the trip amount', 'No Refund'),
];

export default function CancellationPolicyTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <Box sx={{ paddingBottom: "25px" }}>
      <Container maxWidth="xl">
        <Box sx={{ paddingBottom: "25px", paddingTop: "50px" }}>
          <Typography component="h2" sx={{ fontSize: "25px", fontWeight: "400", color: '#FF7A00' }} variant="h4">
            Cancellation Policy
          </Typography>
        </Box>
        <Grid container>
          <Grid xs={12}>
            <Paper sx={{ width: '100%' }}>
              <TableContainer className="custom-scrollbar" sx={{ maxHeight: 440 }}>
                <Table stickyHeader aria-label="Cancellation Policy Table">
                  <TableHead>
                    <TableRow>
                      {columns.map((column) => (
                        <TableCell
                          key={column.id}
                          style={{ minWidth: column.minWidth, fontSize: "15px", color: '#FF7A00' }}
                        >
                          {column.label}
                        </TableCell>
                      ))}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows
                      .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                      .map((row, rowIndex) => (
                        <TableRow hover role="row" tabIndex={-1} key={rowIndex}>
                          {columns.map((column) => {
                            const value = row[column.id];
                            return (
                              <TableCell key={column.id} align={column.align}>
                                {typeof value === 'object' ? value : value}
                              </TableCell>
                            );
                          })}
                        </TableRow>
                      ))}
                  </TableBody>
                </Table>
              </TableContainer>
              {/* Uncomment this section if implementing pagination */}
              {/* <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              /> */}
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
