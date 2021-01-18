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
  
  export function createData(name, element) {
    return { name, element };
  }
  
  
  
  export const useStyles = makeStyles({
    table: {
      minWidth: 200,
      padding:100
    },
  });