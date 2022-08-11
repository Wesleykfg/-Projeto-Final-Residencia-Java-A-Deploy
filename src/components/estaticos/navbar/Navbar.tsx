
import React from 'react';
import { AppBar, Toolbar, Typography, Box, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom'
import './Navbar.css'
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { useDispatch } from "react-redux";
import { addToken } from '../../../store/tokens/actions';
import {toast} from "react-toastify";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function Navbar() {
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );
    let history = useHistory();
    const dispatch = useDispatch();

    function goLogout() {
        dispatch(addToken(''));
        toast.info("Usuário deslogado", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            theme: "colored",
            progress: undefined,
        });
        history.push('/login')
    }

    var navbarComponent;

    if (token != "") {
        navbarComponent = <AppBar position="static" className="navbar">
            <Toolbar variant="dense">
            <img src= "https://i.imgur.com/g0eqKeE.png" className='logo' />
                <Box className='cursor'>
                    <Typography variant="h5" color="inherit">
                    </Typography>
                </Box>

                <Box display="flex" justifyContent="start">
                    <Link to="/home" className="text-decorator-none">
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" color="inherit">
                                home
                            </Typography>
                        </Box>
                    </Link>
                    <Link to="/posts" className="text-decorator-none">
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" color="inherit">
                                postagens
                            </Typography>
                        </Box>
                    </Link>
                    <Link to="/temas" className="text-decorator-none">
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" color="inherit">
                                temas
                            </Typography>
                        </Box>
                    </Link>
                    <Link to="/sobre" className="text-decorator-none">
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" color="inherit">
                                sobre
                            </Typography>
                        </Box>
                    </Link>

                    <Link to="/agencias" className="text-decorator-none">
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" color="inherit">
                                agencias
                            </Typography>
                        </Box>
                    </Link>
                    <Box mx={1} className='navbar'>

                    </Box>

                    <Form className="d-flex">
            <Form.Control
              type="Pesquisar"
              placeholder="Pesquisar"
              className="me-2"
              aria-label="Pesquisar"
            />
            <Grid xs={12} >
                <Box>
                <Button variant="outline-success" className='button'>Search</Button>
                </Box>
            </Grid>
          </Form>

          <Box className="accicon">
                                <AccountCircleIcon  onClick={() => goLogout()} />

                            </Box>
                    <Box mx={1} className='cursor' onClick={goLogout}>
                        <Typography variant="h6" color="inherit">
                            logout
                        </Typography>
                    </Box>

                </Box>

            </Toolbar>
        </AppBar>
    }
    return (
        <>
        <AppBar position="static" className="navbar">
            {navbarComponent}
        </AppBar>
        </>
    )
}

export default Navbar;