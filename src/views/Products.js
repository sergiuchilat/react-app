import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import React from 'react';
import axios from 'axios';

export default class Products extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts : []
        }
    }
    async componentDidMount() {
        const response  = await axios.get("https://my-json-server.typicode.com/typicode/demo/posts");
        this.setState({posts: response.data})
        console.log(this.state.posts);
    }

    render() {
        return (
            <>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>ID</TableCell>
                                <TableCell align="right">Title</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.state.posts.map((row) => (
                                <TableRow
                                    key={row.id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {row.id}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {row.title}
                                    </TableCell>
            
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </>
        )
    }
}