import React, { ChangeEvent, useEffect, useState } from 'react'
import { Container, Typography, TextField, Button, Select, InputLabel, MenuItem, FormControl, FormHelperText } from "@material-ui/core"
import './CadastroCliente.css';
import { useHistory, useParams } from 'react-router-dom';
import Agencia from "../../../models/Agencia";
import Cliente from '../../../models/Cliente';
import { buscar, buscaId, post, put } from '../../../services/Service';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import {toast} from "react-toastify";

function CadastroCliente() {
    let history = useHistory();
    const { id } = useParams<{ id: string }>();
    const [agencias, setAgencias] = useState<Agencia[]>([])
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

    const [agencia, setAgencia] = useState<Agencia>(
        {
        id: 0,
        nome: '',
        endereco: '',
        fone: ''
        })
    const [cliente, setCliente] = useState<Cliente>({
        id: 0,
        nome: '',
        cpf: '',
        fone: '',
        agencia: null
    })

    useEffect(() => {
        setCliente({
            ...cliente,
            agencia: agencia
        })
    }, [agencia])

    useEffect(() => {
        getAgencias()
        if (id !== undefined) {
            findByIdCliente(id)
        }
    }, [id])

    async function getAgencias() {
        await buscar("/agencias", setAgencias, {
            headers: {
                'Authorization': token
            }
        })
    }

    async function findByIdCliente(id: string) {
        await buscaId(`clientes/${id}`, setCliente, {
            headers: {
                'Authorization': token
            }
        })
    }

    function updatedCliente(e: ChangeEvent<HTMLInputElement>) {

        setCliente({
            ...cliente,
            [e.target.name]: e.target.value,
            agencia: agencia
        })

    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()

        if (id !== undefined) {
            put(`/clientes`, cliente, setCliente, {
                headers: {
                    'Authorization': token
                }
            })
            toast.success("Cliente atualizado com sucesso", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            });
        } else {
            post(`/clientes`, cliente, setCliente, {
                headers: {
                    'Authorization': token
                }
            })
            toast.success("Cliente cadastrado com sucesso", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            });
        }
        back()

    }

    function back() {
        history.push('/clientes')
    }

    return (
        <Container maxWidth="sm" className="topo">
            <form onSubmit={onSubmit}>
                <Typography variant="h3" color="textSecondary" component="h1" align="center" >Formulário de cadastro cliente</Typography>
                <TextField value={cliente.nome} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedCliente(e)} id="nome" label="nome" variant="outlined" name="nome" margin="normal" fullWidth />
                <TextField value={cliente.cpf} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedCliente(e)} id="cpf" label="cpf" name="cpf" variant="outlined" margin="normal" fullWidth />
                <TextField value={cliente.fone} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedCliente(e)} id="fone" label="fone" name="fone" variant="outlined" margin="normal" fullWidth />

                <FormControl >
                    <InputLabel id="demo-simple-select-helper-label">Agencia </InputLabel>
                    <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        onChange={(e) => buscaId(`/temas/${e.target.value}`, setAgencia, {
                            headers: {
                                'Authorization': token
                            }
                        })}>
                        {
                            agencias.map(agencia => (
                                <MenuItem value={agencia.id}>{agencia.nome}{agencia.endereco}{agencia.fone}</MenuItem>
                            ))
                        }
                    </Select>
                    <FormHelperText>Escolha uma agencia para o seu cliente</FormHelperText>
                    <Button type="submit" variant="contained" color="primary">
                        Finalizar
                    </Button>
                </FormControl>
            </form>
        </Container>
    )
}
export default CadastroCliente;