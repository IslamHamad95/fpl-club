import React, { useState, useEffect, useCallback, useMemo } from "react";
import { connect } from "react-redux";
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
import kotw from "../../storage/kotw.png";
import beerLogo from "../../storage/beer-logo.png";
import { LatestGWData, Players } from "../../APICall";
import { getPlayersData } from "../../redux/playersRedux/PlayersActions";
import {getGameWeekData} from "../../redux/LastGWRedux/GWActions"
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

const DataSection = ({ playersData, gameWeekData,getPlayers, getGameWeek }) => {
  const classes = useStyles();
  const fetchPlayersAPI = Players();
  const fetchGameWeekAPI= LatestGWData(16)
  //Fetch API Data
  //---------------------------------------------------------
  useEffect(()=>{
    getPlayers(fetchPlayersAPI)
  },[fetchPlayersAPI])
  useEffect(()=>{
    getGameWeek(fetchGameWeekAPI)
  },[fetchGameWeekAPI])
  //--------------------------------------------------------
  return (
    <Grid container className="data-section" spacing={1}>
      <Grid item lg={3}>
        <Grid container spacing={2}>
          <Grid item className="table-one">
            <h1 className="table-titles">MOST TRANSFERED IN</h1>
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

          <Grid item className="table-one">
            <h1 className="table-titles">MOST TRANSFERED OUT</h1>
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
      </Grid>

      <Grid item lg={6}>
        <Grid container className="stats" direction="column">
          <h1 className="table-titles">LAST GAME WEEK []</h1>
          <Grid item className="current-gw-stats">
            <ul>
              <li>HIGHEST POINTS:</li>
              <br />
              <li>AVERAGE POINTS: </li>
              <br />
              <li>MOST CAPTAINED: </li>
              <br />
              <li>MOST POINTS: </li>
              <br />
              <li>NUMBER OF TRANSFERS:</li>
              <br />
              <li>MOST TRANSFERED IN PLAYER: </li>
              <br />
            </ul>
          </Grid>

          <br />

          <h1 className="table-titles">KING OF THE WEEK </h1>
          <Grid item>
            <Grid container alignItems="center" className="kotw">
              <Grid item className="player" lg={6}>
                <img id="kotw-img" src={kotw} alt="King of The Week" />
                <h3> H.KANE</h3>
              </Grid>
              <Grid item className="points" lg={6}>
                <h3> 20 POINTS</h3>
                <img id="spr-logo" src={beerLogo} alt="Sponser" />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item lg={3}>
        <Grid container spacing={2}>
          <Grid item className="table-one">
            <h1 className="table-titles">MOST POINTS</h1>
            <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="cutomized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell align="left">Name</StyledTableCell>
                    <StyledTableCell align="center">PTS</StyledTableCell>
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

          <Grid item className="table-one">
            <h1 className="table-titles">MOST EXPENSIVE</h1>
            <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="cutomized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell align="left">Name</StyledTableCell>
                    <StyledTableCell align="center">M$</StyledTableCell>
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
    </Grid>
  );
};

const mapStateToProps = (state) => {
  return {
    gameWeekData: state.gameWeek,
    playersData: state.players,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getPlayers: (data) => dispatch(getPlayersData(data)),
    getGameWeek:(data)=> dispatch(getGameWeekData(data))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DataSection);
