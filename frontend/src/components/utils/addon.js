import { TableCell, TableRow, withStyles } from "@material-ui/core";

export const StyledTableCell = withStyles((theme) => ({
  head: {
    // backgroundColor: "lightyellow",
    backgroundColor: "#C2D2FF",
    // opacity: 1,
    color: theme.palette.common.black,
  },

  body: {
    fontSize: 14,
    paddingBlock: 0,
  },
}))(TableCell);

export const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(even)": {
      backgroundColor: theme.palette.action.hover,
      //   backgroundColor: "lightyellow",
    },
    border: "1px solid gray",
  },
}))(TableRow);
