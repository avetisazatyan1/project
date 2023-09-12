import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { makeStyles } from '@mui/styles';
import "./style.css";

function createData(name, step1, step2, step3) {
    return {
        name,
        step1,
        step2,
        step3,
    };
}

const useStyles = makeStyles({
    table: {
        "& .MuiTableCell-root": {
            border: 'none'
        }
    }
});

function Row(props) {
    const { row } = props;
    const [open, setOpen] = React.useState(false);
    return (
        <React.Fragment>
        <TableRow>
            <TableCell 
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    color: 'white',
                }} component="th" scope="row"  onClick={() => setOpen(!open)}>

                <IconButton
                    style={{color: 'white'}} 
                    aria-label="expand row"
                    size="small"
                    
                >
                    {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                </IconButton>
                <p> {row.name} </p>
            </TableCell>
            <TableCell style={{color: 'white'}} align="center">{row.step1}</TableCell>
            <TableCell style={{color: 'white'}} align="center">{row.step2}</TableCell>
            <TableCell style={{color: 'white'}} align="center">{row.step3}</TableCell>
        </TableRow>
        <TableRow>
            <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <Box sx={{ margin: 1 }}>
                <Typography  style={{color: 'white', fontSize: '14px'}} gutterBottom component="div">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium quis ullam optio! Cumque quisquam delectus, ducimus beatae porro qui ut?
                </Typography>
                </Box>
            </Collapse>
            </TableCell>
        </TableRow>
        </React.Fragment>
    );
}

Row.propTypes = {
    row: PropTypes.shape({
        step1: PropTypes.string,
        step2: PropTypes.string,
        step3: PropTypes.string,
        name: PropTypes.string
    }).isRequired,
};

const rows = [
    createData('Trading Period', 'Unlimited', 'Unlimited', 'Unlimited'),
    createData('Minimum Trading Days', '4 days', '4 days', '4 days', ''),
    createData('Maximum Daily Loss', '$500', '$500', '$500'),
    createData('Maximum Loss', '$1000', '$1000', '$1000' ),
    createData('Profit Target', '$1000', '$1000', '$1000'),
    createData('Refundable Fee', '$155', '$Free', 'Refund')  
];

export default function StepTable() {
    const classes = useStyles();

    return (
        <TableContainer component={Paper} style={{background: '#161515', border: 'black', color: 'white', boxShadow: "0px 4px 33px 0px rgba(241, 236, 236, 0.3)", }}>
            <Table className={classes.table} aria-label="collapsible table" >
                <TableHead>
                    <TableRow>
                        <TableCell style={{width: '20%'}}>
                            <div>
                                <img 
                                    src ="/assets/Icons/logo.svg"
                                    alt="logo"
                                    width={110}
                                    height={90}
                                />
                            </div>
                        </TableCell>
                        <TableCell align="center">
                            <div style={{color: 'yellow'}}>Step 1</div>   
                            <div style={{color: 'yellow'}}>FTMO Challenge</div>           
                        </TableCell>
                        <TableCell align="center">
                            <div style={{color: 'yellow'}}>Step 2</div>   
                            <div style={{color: 'yellow'}}>Verification</div>
                        </TableCell>
                        <TableCell align="center">
                            <div style={{color: 'yellow'}}>Step 3</div>   
                            <div style={{color: 'yellow'}}>FTMO Trader</div>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <Row key={row.name} row={row} />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
