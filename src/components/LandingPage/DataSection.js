import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  Grid,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core";
import kotw from "../../storage/kotw.png";
import beerLogo from "../../storage/beer-logo.png";
import { fetchPlayers } from "../../redux/playersRedux/PlayersActions";
import { fetchGameWeek } from "../../redux/LastGWRedux/GWActions";
import {
  StyledTableCell,
  StyledTableRow,
  useStyles,
} from "../../MaterialStyles";

import {DisplayTablesData} from "../../DisplayTableData"

const DataSection = ({
  playersData,
  gameWeekData,
  getPlayers,
  getGameWeek,
}) => {
  const classes = useStyles();
  const [mostCaptained, setMostCaptained] = useState("");
  const [mostTransferredIn, setMostMostTransferredIn] = useState("");
  const [mostPoints, setMostPoints] = useState("");
  const [sortByGoals,setSortByGoals]=useState([])
  const [sortByAssists,setSortByAssists]=useState([])
  const [sortByTransferredIn,setByTransferredIn]=useState([])
  const [sortByTransferredOut,setByTransferredOut]=useState([])
  useEffect(() => {
    getGameWeek(16);
    getPlayers();
  }, [getGameWeek, getPlayers]);

  function getPlayerById(id) {
    let x = null;
    x = playersData.players.find((player) => player.id === id);
    return x?.web_name;
  }
  useEffect(() => {
    const MC = getPlayerById(gameWeekData.most_captained);
    const MTI = getPlayerById(gameWeekData.most_transferred_in);
    const MP = getPlayerById(gameWeekData.top_element);
    setMostCaptained(MC);
    setMostMostTransferredIn(MTI);
    setMostPoints(MP);
  }, [getPlayerById]);
  //console.log(mostCaptained,mostTransferredIn,mostPoints)
  const sortPlayers=(sortedBy)=>{
    const sortedArray=playersData.players.sort((a,b)=>{
      return a[sortedBy] - b[sortedBy]
    }).reverse().splice(0,6)
    return sortedArray
  }
  useEffect(()=>{
    const goals=  sortPlayers("goals_scored")
    setSortByGoals([...goals]) 
    const assists= sortPlayers("assists")
    setSortByAssists([...assists]) 
    const transferredIn=sortPlayers("transfers_in")
    setByTransferredIn([...transferredIn])
    const transferredOut= sortPlayers("transfers_out")
    setByTransferredOut([...transferredOut])
  },[playersData.players])

  const TopScorrersArray= DisplayTablesData(sortByGoals,"goals_scored")
  const TopAssistsArray= DisplayTablesData(sortByAssists,"assists")
  const MostTransferredInArray= DisplayTablesData(sortByTransferredIn,"transfers_in")
  const MostTransferredOutArray= DisplayTablesData(sortByTransferredOut,"transfers_out")


  //------------------------------------------------------------

  return (
    <Grid container className="data-section" spacing={1}>
      <Grid item lg={3}>
        <Grid container spacing={2}>
          <Grid item className="table-one">
            <h1 className="table-titles">MOST TRANSFERED IN THIS SEASON</h1>
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
                  {MostTransferredInArray.map((row) => (
                    <StyledTableRow key={row.name}>
                      <StyledTableCell>{row.name}</StyledTableCell>
                      <StyledTableCell align="center">
                        {row.element}
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>

          <Grid item className="table-one">
            <h1 className="table-titles">MOST TRANSFERED OUT THIS SEASON</h1>
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
                  {MostTransferredOutArray.map((row) => (
                    <StyledTableRow key={row.name}>
                      <StyledTableCell>{row.name}</StyledTableCell>
                      <StyledTableCell align="center">
                        {row.element}
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
          <h1 className="table-titles">LAST GAME WEEK [{gameWeekData.id}]</h1>
          <Grid item className="current-gw-stats">
            <ul>
              <li>HIGHEST POINTS: {gameWeekData.highest_score}</li>
              <br />
              <li>AVERAGE POINTS: {gameWeekData.average_entry_score} </li>
              <br />
              <li>MOST CAPTAINED: {mostCaptained}</li>
              <br />
              <li>MOST TRANSFERED IN PLAYER: {mostTransferredIn}</li>
              <br />
              <li>MOST POINTS: {mostPoints} - 20</li>
              <br />
              <li>NUMBER OF TRANSFERS: {gameWeekData.transfers_made}</li>
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
            <h1 className="table-titles">TOP SCORRERS</h1>
            <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="cutomized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell align="left">Name</StyledTableCell>
                    <StyledTableCell align="center">#</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {TopScorrersArray.map((row) => (
                    <StyledTableRow key={row.name}>
                      <StyledTableCell>{row.name}</StyledTableCell>
                      <StyledTableCell align="center">
                        {row.element}
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>

          <Grid item className="table-one">
            <h1 className="table-titles">TOP ASSISTERS</h1>
            <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="cutomized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell align="left">Name</StyledTableCell>
                    <StyledTableCell align="center">#</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {TopAssistsArray.map((row) => (
                    <StyledTableRow key={row.name}>
                      <StyledTableCell>{row.name}</StyledTableCell>
                      <StyledTableCell align="center">
                        {row.element}
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
    gameWeekData: state.gameWeek.gameWeek,
    playersData: state.players,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getPlayers: () => dispatch(fetchPlayers()),
    getGameWeek: (id) => dispatch(fetchGameWeek(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DataSection);
