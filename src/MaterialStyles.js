import { withStyles, makeStyles } from "@material-ui/core/styles";
import {  TableCell, TableRow} from "@material-ui/core"
export const StyledTableCell = withStyles((theme) => ({
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
  
  export const StyledTableRow = withStyles((theme) => ({
    root: {
      "&:nth-of-type(odd)": {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);
  
  function createData(name, numOfTransfers) {
    return { name, numOfTransfers };
  }
  
  export const rows = [
    createData("FERNANDES1", 3124),
    createData("SALAH1", 72616),
    createData("FERNANDES2", 3124),
    createData("SALAH2", 72616),
    createData("FERNANDES3", 3124),
    createData("SALAH3", 72616),
  ];
  
  export const useStyles = makeStyles({
    table: {
      minWidth: 200,
    },
  });