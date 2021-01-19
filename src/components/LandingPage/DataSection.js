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
import beerLogo from "../../storage/beer-logo.png";
import { fetchPlayers } from "../../redux/playersRedux/PlayersActions";
import { fetchGameWeek } from "../../redux/LastGWRedux/GWActions";
import {
  StyledTableCell,
  StyledTableRow,
  useStyles,
} from "../../MaterialStyles";

import { DisplayTablesData } from "../../DisplayTableData";

const DataSection = ({
  playersData,
  gameWeekData,
  getPlayers,
  getGameWeek,
}) => {
  const classes = useStyles();
  const [mostCaptained, setMostCaptained] = useState("");
  const [mostTransferredIn, setMostTransferredIn] = useState("");
  const [kingOfTheWeek, setKingOfTheWeek]=useState({
    id:0,
    code:0,
    name:"",
    photo:"",
    points:0
  })
 
  const [sortByGoals, setSortByGoals] = useState([]);
  const [sortByAssists, setSortByAssists] = useState([]);
  const [sortByTransferredIn, setByTransferredIn] = useState([]);
  const [sortByTransferredOut, setByTransferredOut] = useState([]);
  useEffect(() => {
    getGameWeek(18);
    getPlayers();
  }, [getGameWeek, getPlayers]);


  useEffect(() => {
    const getPlayerById=(id)=> {
      const x = playersData.players.find((player) => player.id === id);
      return x?.web_name;
    }
  
    const getKOTW=(id)=>{
      const x=playersData.players.find((player) => player.id === id);
      return  x
    }
    const MC = getPlayerById(gameWeekData.most_captained);
    const MTI = getPlayerById(gameWeekData.most_transferred_in);
    const KOTW= getKOTW(gameWeekData.top_element)
    setMostCaptained(MC);
    setMostTransferredIn(MTI);
    setKingOfTheWeek({
      id: KOTW?.id,
      code:KOTW?.code,
      name:KOTW?.web_name,
      photo: KOTW?.photo,
      points:gameWeekData.top_element_info?.points
    })
  }, [playersData,gameWeekData]);
  
  //console.log(mostCaptained,mostTransferredIn,mostPoints)

  useEffect(() => {
    const sortPlayers = (sortedBy) => {
      const sortedArray = playersData.players
        .sort((a, b) => {
          return a[sortedBy] - b[sortedBy];
        })
        .reverse()
        .splice(0, 6);
      return sortedArray;
    };
    const goals = sortPlayers("goals_scored");
    setSortByGoals([...goals]);
    const assists = sortPlayers("assists");
    setSortByAssists([...assists]);
    const transferredIn = sortPlayers("transfers_in");
    setByTransferredIn([...transferredIn]);
    const transferredOut = sortPlayers("transfers_out");
    setByTransferredOut([...transferredOut]);
  }, [playersData.players]);

  const TopScorrersArray = DisplayTablesData(sortByGoals, "goals_scored");
  const TopAssistsArray = DisplayTablesData(sortByAssists, "assists");
  const MostTransferredInArray = DisplayTablesData(
    sortByTransferredIn,
    "transfers_in"
  );
  const MostTransferredOutArray = DisplayTablesData(
    sortByTransferredOut,
    "transfers_out"
  );

  //------------------------------------------------------------

  return (
    <Grid container className="data-section" spacing={1}>
      <Grid item lg={3}>
        <Grid container spacing={5}>
          <Grid item className="table-one">
            <h1 className="table-titles" id="title-one">
              MOST TRANSFERED IN (20/21)
            </h1>
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
                  {MostTransferredInArray.map((row, index) => (
                    <StyledTableRow key={index}>
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
            <h1 className="table-titles" id="title-two">
              MOST TRANSFERED OUT (20/21)
            </h1>
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
                  {MostTransferredOutArray.map((row, index) => (
                    <StyledTableRow key={index}>
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

      <Grid item lg={6}  >
        <Grid container  className="stats" direction="column">
       
          <Grid item  lg={12} >
          <h1 className="table-titles">LAST GAME WEEK [{gameWeekData.id}]</h1>
            <ul className="current-gw-stats">
              <li>HIGHEST POINTS: {gameWeekData.highest_score}</li>
              <br />
              <li>AVERAGE POINTS: {gameWeekData.average_entry_score} </li>
              <br />
              <li>MOST CAPTAINED: {mostCaptained}</li>
              <br />
              <li>MOST TRANSFERED IN PLAYER: {mostTransferredIn}</li>
              <br />
              <li>NUMBER OF TRANSFERS: {gameWeekData.transfers_made}</li>
            </ul>
          </Grid>

         
          <Grid item   className="kotw-table" justify="space-between" lg={12}>
          <h1 className="table-titles">KING OF THE WEEK </h1>
            <Grid container alignItems="center" className="kotw">
              <Grid item className="player" lg={6}>
                <img id="kotw-img" src={`https://resources.premierleague.com/premierleague/photos/players/110x140/p${kingOfTheWeek.code}.png`} alt="King of The Week" />
                
              </Grid>
              <Grid item className="points" lg={6}>
              <h3> {kingOfTheWeek.name}</h3>
              <br/>
                <h3> {kingOfTheWeek.points} POINTS</h3>
                <img id="spr-logo" src={beerLogo} alt="Sponser" />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item lg={3}>
        <Grid container spacing={6}>
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
                  {TopScorrersArray.map((row, index) => (
                    <StyledTableRow key={index}>
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
                  {TopAssistsArray.map((row, index) => (
                    <StyledTableRow key={index}>
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
