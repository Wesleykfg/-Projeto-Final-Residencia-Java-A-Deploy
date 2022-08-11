import React, { useEffect } from "react";
import { Typography, Box, Grid, Button } from "@material-ui/core"
import TabPostagem from "../../components/postagens/tabpostagem/TabPostagem";
import "./Home.css";
import CarouselComponent from "../../components/carousel/CarouselComponent";
import ModalPostagem from "../../components/postagens/modalPostagem/ModalPostagem";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";
import { TokenState } from "../../store/tokens/tokensReducer";
import {Link} from "react-router-dom";
import {toast} from "react-toastify";

function Home() {
    let history = useHistory();
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    useEffect(() => {
        if (token == '') {
            history.push('/home')
        }

    }, [token]);
    return (
        <>
        
            <Grid xs={12} sm={12} container direction="row" justifyContent="center" alignItems="center" className="caixa">
                
                    <Box className="carrossel">
                        <CarouselComponent />
                    </Box>

                

                <Grid xs={5} sm={5} className="img">
                    <img src="https://i.imgur.com/0oqcguC.png" alt="" className="img" />

                </Grid>

                <Grid xs={2} sm={2} className="aligncenter">
                    <Typography variant="h3" component="h4" align="center" className="titulo">Destaques da Semana</Typography>

                </Grid>


                <Grid xs={5} sm={5} className="img">
                    <img src="https://i.imgur.com/0oqcguC.png" alt="" className="img" />

                </Grid>


                <Box border={1} className="dest">
                    <Box justifyContent="center" display="flex" className="imagem3">
                        <img src="https://i.imgur.com/LUq0C7d.png" alt="" className="card-home" />
                        
                    </Box>
                    <Typography variant="h6" component="h5" align="center" gutterBottom className="nome-autor">
                        Financiamento
                    </Typography>
                    <Typography variant="body2" component="p" align="center" className="pitch-autor">
                        Veja as melhores taxas...
                    </Typography>
                    
                </Box>

                <Box border={1} className="dest">
                    <Box justifyContent="center" display="flex" className="imagem3">
                        <img src="https://i.imgur.com/BmkvEjN.png" alt="" className="card-home" />
                    </Box>
                    <Typography variant="h6" component="h5" align="center" gutterBottom className="nome-autor">
                        Programação
                    </Typography>
                    <Typography variant="body2" component="p" align="center" className="pitch-autor">
                        Empresas no mundo da tecnologia...
                    </Typography>
                    
                </Box>

                <Box border={1} className="dest">
                    <Box justifyContent="center" display="flex" className="imagem3">
                        <img src="https://i.imgur.com/SceenkL.jpg" alt="" className="card-home" />
                    </Box>
                    <Typography variant="h6" component="h5" align="center" gutterBottom className="nome-autor">
                        Accenture
                    </Typography>
                    <Typography variant="body2" component="p" align="center" className="pitch-autor">
                        Veja o depoimento de nossos clientes...
                    </Typography>
                </Box>

                <Box border={1} className="dest">
                    <Box justifyContent="center" display="flex" className="imagem3">
                        <img src="https://i.imgur.com/0N9Dnks.jpg" alt="" className="card-home" />
                    </Box>
                    
                    <Typography variant="h6" component="h5" align="center" gutterBottom className="nome-autor">
                        Benefícios
                    </Typography>
                    <Typography variant="body2" component="p" align="center" className="pitch-autor">
                        Veja benefícios da conta AccentureBank..
                    </Typography>
                </Box>

            </Grid>
        </>
    );
}

export default Home;