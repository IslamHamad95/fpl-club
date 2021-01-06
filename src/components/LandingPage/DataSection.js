import { withStyles, makeStyles } from "@material-ui/core/styles";

import {
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core";
import React from "react";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "#4c07915b",
    color: theme.palette.common.white,
    fontSize: "2vh",
  },
  body: {
    fontSize: "1.8vh",
    color: "#4C0791",
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(name, numOfTransfers) {
  return { name, numOfTransfers };
}

const rows = [
  createData("FERNANDES1", 3124),
  createData("SALAH1", 72616),
  createData("FERNANDES2", 3124),
  createData("SALAH2", 72616),
  createData("FERNANDES3", 3124),
  createData("SALAH3", 72616),
];

const useStyles = makeStyles({
  table: {
    minWidth: 200,
  },
});

const DataSection = () => {
  const classes = useStyles();
  return (
    <Grid container className="data-section">
      <Grid container className="transfers" direction="column">
        <h1 className="table-titles">MOST TRANSFERED IN</h1>
        <Grid item className="table-one">
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="cutomized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell align="left">Name</StyledTableCell>
                  <StyledTableCell align="center">
                    <i id="green-arrow" className="fas fa-arrow-right"></i>
                  </StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <StyledTableRow key={row.name}>
                    <StyledTableCell>{row.name}</StyledTableCell>
                    <StyledTableCell align="center">
                      {row.numOfTransfers}
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        <br />
        <h1 className="table-titles">MOST TRANSFERED OUT</h1>
        <Grid item className="table-one">
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="cutomized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell align="left">Name</StyledTableCell>
                  <StyledTableCell align="center">
                    <i id="red-arrow" className="fas fa-arrow-left"></i>
                  </StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <StyledTableRow key={row.name}>
                    <StyledTableCell>{row.name}</StyledTableCell>
                    <StyledTableCell align="center">
                      {row.numOfTransfers}
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>

      <Grid container className="stats" direction="column">
        <h1 className="table-titles">CURRENT GAME WEEK 29</h1>
        <Grid item className="current-gw-stats">
          <ul>
            <li>HIGHEST POINTS:</li>
            <li>AVERAGE POINTS:</li>
            <li>MOST CAPTAINED:</li>
            <li>NUMBER OF TRANSFERS:</li>
            <li>MOST TRANSFERED IN PLAYER</li>
            <li>NEXT DEADLINE:</li>
          </ul>
        </Grid>

        <br />

        <h1 className="table-titles">KING OF THE WEEK </h1>
        <Grid item className="current-gw-stats">
          <ul>
            <li>HIGHEST POINTS:</li>
            <li>AVERAGE POINTS:</li>
            <li>MOST CAPTAINED:</li>
            <li>NUMBER OF TRANSFERS:</li>
            <li>MOST TRANSFERED IN PLAYER</li>
            <li>NEXT DEADLINE:</li>
          </ul>
        </Grid>
      </Grid>

      <Grid container className="transfers" direction="column">
      <h1 className="table-titles">MOST POINTS</h1>
      <Grid item className="table-one">
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="cutomized table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="left">Name</StyledTableCell>
                <StyledTableCell align="center">
                  PTS
                </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <StyledTableRow key={row.name}>
                  <StyledTableCell>{row.name}</StyledTableCell>
                  <StyledTableCell align="center">
                    {row.numOfTransfers}
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
      <br />
      <h1 className="table-titles">MOST EXPENSIVE</h1>
      <Grid item className="table-one">
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="cutomized table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="left">Name</StyledTableCell>
                <StyledTableCell align="center">
                  M$
                </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <StyledTableRow key={row.name}>
                  <StyledTableCell>{row.name}</StyledTableCell>
                  <StyledTableCell align="center">
                    {row.numOfTransfers}
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
    </Grid>
  );
};

export default DataSection;
