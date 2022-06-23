import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import React from 'react';
import ProductsAPI from '../api/Products';
import { LinearProgress, Alert } from '@mui/material';

export default class Products extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            loading: false,
            loadingException: false
        }
    }

    async componentDidMount() {
        this.setState({
            loading: true,
            loadingException: false
        })
        try {
            const productsAPI = new ProductsAPI();
            const response = productsAPI.getAllStatic();
            this.setState({
                posts: response,
                loadingException: !response || !response.data || !response.data.length
            })
        } catch (e) {
            console.log(e);
            this.setState({ loadingException: true });
        } finally {
            this.setState({ loading: false })
        }
    }

    alertMessage() {
        if (this.loadingException) {
            return <Alert severity="error">This is an error alert — check it out!</Alert>
        } else {
            return '';
        }
    }

    render() {
        if (!this.state.loading) {
            return (
                <>
                
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>ID</TableCell>
                                    <TableCell>Title</TableCell>
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
        } else {
            return (
                <LinearProgress></LinearProgress>
            )
        }
    }
}