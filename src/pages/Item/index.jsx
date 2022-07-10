import {Component,Fragment} from "react";
import {styleSheet} from "../Item/styles";
import {withStyles} from "@mui/styles";
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography} from "@mui/material";
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Autocomplete from '@mui/material/Autocomplete';
import GDSEButton from "../../components/common/Button"
import Paper from '@mui/material/Paper';

class Item extends Component{
    constructor(props) {
        super(props);
        this.state = {
            packSize: [
                { label: 'Large'},
                { label: 'Medium'},
                { label: 'Small'},
            ]
        }
    }

    render() {

        function createData(code, name, price, packSize,description, qtyOnHand) {
            return {code, name, price, packSize,description, qtyOnHand };
        }

        const {classes} = this.props
        const rows = [
            createData('I00-001','Frozen yoghurt', 150.0, 'Large', 'AAAAAA', 4),
            createData('I00-002','Ice cream sandwich', 200.0, 'Small', 'BBBBB', 3),
            createData('I00-003','Eclair', 350.0, 16.0, 'CCCCC', 6),
            createData('I00-004','Cupcake', 450.0, 'Medium', 'DDDDDD', 2),
            createData('I00-005','Gingerbread', 500.0, 'Large', 'EEEEEEE', 9),
        ];
        return(
           <div className={classes.container}>
                <div className={classes.title_bar}>
                    <Typography variant="h4">
                        Item Manage
                    </Typography>
                </div>
               <div className={classes.text_form}>
                    <div className={classes.text_field}>
                        <Grid container spacing={3}>
                            <Grid item lg={6} md={6} sm={6} xm={6} >
                                <TextField id="outlined-basic" placeHolder="Item Code" label="Item Code" variant="outlined" size="small"
                                           style={{width: '100%'}}/>
                            </Grid>
                            <Grid item lg={6} md={6} sm={6} xm={6} >
                                <TextField id="outlined-basic" placeHolder="Name" label="Item name" variant="outlined" size="small"
                                           style={{width: '100%'}} />
                            </Grid>
                            <Grid item lg={6} md={6} sm={6} xm={6}>
                                <TextField id="outlined-basic" placeHolder="Price" label="Price" variant="outlined" size="small"
                                           style={{width: '100%'}}
                                />
                            </Grid>
                            <Grid item lg={6} md={6} sm={6} xm={6}>
                                <Autocomplete
                                    disablePortal
                                    id="combo-box-demo"
                                    options={this.state.packSize}
                                    sx={{ width: 300 }}
                                    renderInput={(params) => <TextField {...params} label="Pack Size" />}
                                    getOptionLabel={
                                        (option) => option.label
                                    }
                                    onChange={(e, value) => {
                                        console.log(value.label + " " + value.year);
                                    }}
                                    size="small"
                                    style={{ width: '100%' }}
                                />
                            </Grid>
                            <Grid item lg={6} md={6} sm={6} xm={6}>
                                <TextField id="outlined-basic" placeHolder="Description" label="Description" variant="outlined" size="small"
                                           style={{width: '100%'}}
                                />
                            </Grid>
                            <Grid item lg={6} md={6} sm={6} xm={6} >
                                <TextField id="outlined-basic" placeHolder="Qty On Han" label="Qty On Hand" variant="outlined" size="small"
                                           style={{width: '100%'}}/>
                            </Grid>
                            <Grid item lg={12} md={12} sm={12} xm={12} style={{display: 'flex'}} justifyContent="flex-end" >
                                <GDSEButton size="small" variant="contained" label="save"/>
                            </Grid>
                        </Grid>
                    </div>
                    <div className={classes.table_field}>
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Code&nbsp;</TableCell>
                                        <TableCell align="right">Name&nbsp;</TableCell>
                                        <TableCell align="right">Price&nbsp;</TableCell>
                                        <TableCell align="right">Pack Size&nbsp;</TableCell>
                                        <TableCell align="right">Description&nbsp;</TableCell>
                                        <TableCell align="right">Qty On Hand&nbsp;</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows.map((row) => (
                                        <TableRow
                                            key={row.name}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell component="th" scope="row">
                                                {row.code}
                                            </TableCell>
                                            <TableCell align="right">{row.name}</TableCell>
                                            <TableCell align="right">{row.price}</TableCell>
                                            <TableCell align="right">{row.packSize}</TableCell>
                                            <TableCell align="right">{row.description}</TableCell>
                                            <TableCell align="right">{row.qtyOnHand}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div>
               </div>
           </div>
        )
    }
}

export default withStyles(styleSheet)(Item)