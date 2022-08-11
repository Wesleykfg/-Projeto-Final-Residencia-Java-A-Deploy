import React, { useEffect } from "react";
import { Typography, Box, Grid, Button } from "@material-ui/core"
import { useHistory } from "react-router";
import { useSelector } from "react-redux";
import { TokenState } from "../../store/tokens/tokensReducer";
import {Link} from "react-router-dom";
import {toast} from "react-toastify";

function ListarAgencia() {
    let history = useHistory();
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    useEffect(() => {
        if (token == '') {
            history.push('/agencias')
        }

    }, [token]);
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" className="caixaProdutos">
                <Grid xs={12} className="caixaProdutos">
                    <Box>
                        <img src="https://i.imgur.com/wJmEUxD.png" alt="" width="100%" />
                    </Box>
                </Grid>

                <Grid xs={5} sm={5} className="img">
                    <img src="https://i.imgur.com/0oqcguC.png" alt="" className="img" />

                </Grid>

                <Grid xs={2} sm={2} className="aligncenter" >
                    <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" className="aligncenterProdutos" >Agencias</Typography>

                </Grid>

                <Grid xs={5} sm={5} className="img">
                    <img src="https://i.imgur.com/0oqcguC.png" alt="" className="img" />

                </Grid>

                <Grid xs={10} sm={10} className="aligncenter">
                <Typography variant="subtitle1" color="initial">Aqui você consegue ver as agências fisicas do AccentureBank</Typography>
                </Grid>

                <Box border={1} className="dest">
                    <Box justifyContent="center" display="flex" className="imagem3">
                        <img src="https://i.imgur.com/9UxFOwX.jpg" alt="" className="card-home" />
                    </Box>
                    <Typography variant="h6" component="h5" align="center" gutterBottom className="nome-autor">
                        Agência Santos Dumont
                    </Typography>
                    <Typography variant="body2" component="p" align="center" className="pitch-autor">
                        Endereço: Av. Aviação Brilhante, N95
                        Bairro: O Primeiro      
                        Tel: (12) 4003-2030
                        Numero da Agencia: 550
                    </Typography>
                    <Box display="flex" justifyContent="center">
                        <a href="https://www.instagram.com/generationbrasil/" target="_blank">

                        </a>
                        <a href="https://www.linkedin.com/school/generationbrasil/" target="_blank">

                        </a>
                    </Box>
                </Box>

                <Box border={1} className="dest">
                    <Box justifyContent="center" display="flex" className="imagem3">
                        <img src="https://i.imgur.com/eBzZ5QQ.jpg" alt="" className="card-home" />
                    </Box>
                    <Typography variant="h6" component="h5" align="center" gutterBottom className="nome-autor">
                        Agência Bairro do Limão
                    </Typography>
                    <Typography variant="body2" component="p" align="center" className="pitch-autor">
                        Endereço: Av. Selestino Burrol, N220
                        Bairro: Limão      
                        Tel: (11) 4003-8020
                        Numero da Agencia: 049
                    </Typography>
                    <Box display="flex" justifyContent="center">
                        <a href="https://www.instagram.com/generationbrasil/" target="_blank">

                        </a>
                        <a href="https://www.linkedin.com/school/generationbrasil/" target="_blank">

                        </a>
                    </Box>
                </Box>

                <Box border={1} className="dest">
                    <Box justifyContent="center" display="flex" className="imagem3">
                        <img src="https://i.imgur.com/WkvHhW2.jpg" alt="" className="card-home" />
                    </Box>
                    <Typography variant="h6" component="h5" align="center" gutterBottom className="nome-autor">
                        Agência Prisma
                    </Typography>
                    <Typography variant="body2" component="p" align="center" className="pitch-autor">
                        Endereço: Av. Prismaria Nova, N1020
                        Bairro: Prismaria      
                        Tel: (11) 4003-3030
                        Numero da Agencia: 550
                    </Typography>
                    <Box display="flex" justifyContent="center">
                        <a href="https://www.instagram.com/generationbrasil/" target="_blank">

                        </a>
                        <a href="https://www.linkedin.com/school/generationbrasil/" target="_blank">

                        </a>
                    </Box>
                </Box>

            </Grid>
        </>
    );
}

export default ListarAgencia;