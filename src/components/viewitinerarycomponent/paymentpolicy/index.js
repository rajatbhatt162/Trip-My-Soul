import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import CloseIcon from "@mui/icons-material/Close";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";
import { Box, Container, Grid, Typography } from "@mui/material";

// Define table columns
const columns = [
  { id: "name", label: "Payment Method", minWidth: 170 },
  { id: "code", label: "Upto 16 days", minWidth: 170 },
  { id: "population", label: "15-8 days", minWidth: 170 },
  { id: "size", label: "7-3 days", minWidth: 170 },
  { id: "density", label: "2-0 days", minWidth: 170 },
];

// Helper function to create data rows
const createData = (name, code, population, size, density) => {
  return { name, code, population, size, density };
};

// Data rows
const rows = [
  createData("Booking Amount", <CheckOutlinedIcon sx={{ color: "green" }} />, <CheckOutlinedIcon sx={{ color: "green" }} />, <CheckOutlinedIcon sx={{ color: "green" }} />, <CheckOutlinedIcon sx={{ color: "green" }} />),
  createData("50% Payment", "Optional", "Compulsory", <CloseIcon color="error" />, <CloseIcon color="error" />),
  createData("75% Payment", "Optional", "Optional", "Compulsory", <CloseIcon color="error" />),
  createData("100% Payment", "Optional", "Optional", "Optional", "Compulsory"),
];

const PaymentPolicyTable = () => {
  return (
    <Box sx={{ paddingBottom: "25px" }}>
      <Container maxWidth="xl">
        <Box sx={{ paddingBottom: "25px", paddingTop: "50px" }}>
          <Typography sx={{ fontSize: "25px", fontWeight: "400", color: "#FF7A00" }} variant="h4">
            Payment Policy
          </Typography>
        </Box>
        <Grid container>
          <Grid item xs={12}>
            <Paper sx={{ width: "100%" }}>
              <TableContainer sx={{ maxHeight: 440 }}>
                <Table stickyHeader aria-label="Payment Policy Table">
                  <TableHead>
                    <TableRow>
                      {columns.map((column) => (
                        <TableCell
                          key={column.id}
                          style={{
                            minWidth: column.minWidth,
                            fontSize: "15px",
                            color: "#FF7A00",
                          }}
                        >
                          {column.label}
                        </TableCell>
                      ))}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row, rowIndex) => (
                      <TableRow hover role="checkbox" tabIndex={-1} key={rowIndex}>
                        {columns.map((column) => {
                          const value = row[column.id];
                          return (
                            <TableCell key={column.id} align={column.align}>
                              {typeof value === "object" ? value : value}
                            </TableCell>
                          );
                        })}
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default PaymentPolicyTable;
