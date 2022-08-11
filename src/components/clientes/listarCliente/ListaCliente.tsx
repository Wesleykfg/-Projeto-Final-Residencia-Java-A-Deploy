import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Cliente from '../../../models/Cliente';
import { buscar } from '../../../services/Service'
import { Box, Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import './ListaCliente.css';
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import {toast} from "react-toastify";

function ListaCliente() {
    const [clientes, setClientes] = useState<Cliente[]>([])
    let history = useHistory();
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );


    useEffect(() => {
        if (token == "") {
            toast.error("Você precisa estar logado!!!", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            });
            history.push("/login")

        }
    }, [token])

    async function getCliente() {
        await buscar("/clientes", setClientes, {
            headers: {
                'Authorization': token
            }
        })
    }

    useEffect(() => {

        getCliente()

    }, [clientes.length])

    return (
        <>
            {
                clientes.map(cliente => (
                    <Box m={2} >
                        <Card variant="outlined">
                            <CardContent>
                                <Typography color="textSecondary" gutterBottom>
                                    Clientes
                                </Typography>
                                <Typography variant="h5" component="h2">
                                    {cliente.nome}
                                </Typography>
                                <Typography variant="body2" component="p">
                                    {cliente.fone}
                                </Typography>
                                <Typography variant="body2" component="p">
                                    {cliente.agencia?.nome}
                                </Typography>
                                <Typography variant="body2" component="p">
                                    {cliente.agencia?.endereco}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Box display="flex" justifyContent="center" mb={1.5}>

                                    <Link to={`/formularioPostagem/${cliente.id}`} className="text-decorator-none" >
                                        <Box mx={1}>
                                            <Button variant="contained" className="marginLeft" size='small' color="primary" >
                                                atualizar
                                            </Button>
                                        </Box>
                                    </Link>
                                    <Link to={`/deletarPostagem/${cliente.id}`} className="text-decorator-none">
                                        <Box mx={1}>
                                            <Button variant="contained" size='small' color="secondary">
                                                deletar
                                            </Button>
                                        </Box>
                                    </Link>
                                </Box>
                            </CardActions>
                        </Card>
                    </Box>
                ))
            }
        </>
    )
}

export default ListaCliente;