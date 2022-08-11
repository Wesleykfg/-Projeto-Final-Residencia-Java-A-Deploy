import React, {useState, useEffect, ChangeEvent} from "react";
import { Grid, Box, Typography, Button, TextField } from "@material-ui/core"
import {useHistory} from "react-router-dom";
import User from "../../models/User";
import {cadastroUsuario} from "../../services/Service";
import { Link } from "react-router-dom";
import "./CadastroUsuario.css";
import {toast} from "react-toastify";

function CadastroUsuario() {
    return (
        <Grid container direction='row' justifyContent='center' alignItems='center' className='background-color'>
            <Grid item xs={12} sm={6} className='imagem2' ></Grid>
            <Grid item xs={12} sm={6} alignItems='center'>
                <Box paddingX={10} paddingBottom={20}>
                    <form>
                        <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className='textos2'>Cadastre-se</Typography>

                        <TextField id='nome' label='Nome' variant='outlined' name='nome' margin='normal' className='inputs' fullWidth />
                        <TextField id='usuario' label='Usuário' variant='outlined' name='usuario' margin='normal' className='inputs' fullWidth />
                        <TextField id='senha' label='Senha' variant='outlined' name='Senha' margin='normal' type='password' className='inputs' fullWidth />
                        <TextField id='confirmarSenha' label='Confirmar Senha' variant='outlined' name='confirmarSenha' margin='normal' type='password' className='inputs' fullWidth />
                        <Box marginTop={2} textAlign='center'>
                            <Link to='/login' className='text-decorator-none'>
                                <Button variant='contained' color='secondary' className='btnCancelar'>
                                    Cancelar
                                </Button>
                            </Link>
                            <Button type='submit' variant='contained' color='primary' className='btnCadastrar'>
                                Cadastrar
                            </Button>
                        </Box>
                    </form>
                </Box>
            </Grid>


        </Grid>
    );
}

export default CadastroUsuario;