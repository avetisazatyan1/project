import * as React from "react";
import {
  Card,
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableRow,
  TableHead,
} from "@mui/material";

import "./Styles.css";

const data = [
  {
    size: "5K",
    price: "59",
  },
  {
    size: "10K",
    price: "104",
  },
  {
    size: "25K",
    price: "204",
  },
  {
    size: "50K",
    price: "299",
  },
  {
    size: "100K",
    price: "429",
  },
  {
    size: "200K",
    price: "799",
  },
];

const AccountPrices = () => {
  return (
    <div className="app-section-account-prices">
      <div className="table-wrapper">
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Account Size</TableCell>
              <TableCell align="center">Price</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item, i) => (
              <TableRow>
                <TableCell align="center">${item.size}</TableCell>
                <TableCell align="center">${item.price}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};
export default AccountPrices;
