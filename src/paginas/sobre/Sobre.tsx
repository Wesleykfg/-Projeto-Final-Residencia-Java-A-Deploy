import React from 'react';
import { Grid, Box, Typography } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import './Sobre.css';


function Sobre() {

    return (


        <Grid container direction="row" justifyContent="center" className="caixa-sobre">
            <Grid xs={12} className="imagem-manifesto">
                <Box>
                    <img src="https://i.imgur.com/2VBf1ZG.png" alt="" width="100%" />
                </Box>
            </Grid>
            <Grid alignItems="center" item xs={12} sm={12} >

                <Typography variant="body2" component="p" align="center" className="texto-manifesto">
                    Nosso projeto visa atender de forma coerente e correta todos
                    os clientes que buscam qualidade e segurança.
                </Typography>
                <Typography variant="body2" component="p" align="center" className="texto-manifesto">
                    Em pleno acordo com todas as causas de minorias e meio ambiente,
                    aqui você é respeitado e reconhecido pelo que é!
                    Não buscamos somente clientes, buscamos construir uma relação de cumplicidade.
                </Typography>
                <Typography variant="body2" component="p" align="center" className="texto-manifesto">
                    Promovemos e apoiamos a toda iniciativa que busca alavancar a economia,
                    bem-estar e segurança de toda população.
                    Sendo assim, seus dados estarão plenamente seguros conosco.
                </Typography>
                <Typography variant="body2" component="p" align="center" className="texto-manifesto">
                    O AccentureBank é uma nova forma de planejar sua vida financeira,
                    é uma nova forma de prosperar em seus projetos,
                    mas não somente isso, o AccentureBank é e sempre será uma revolução
                    
                    
                </Typography>
                <Typography variant="body2" component="p" align="center" className="texto-manifesto dresscodetxt">
                    Somos AccentureBank.
                </Typography>

            </Grid>

            <Grid item xs={5} sm={5} >
                <img src="https://i.imgur.com/0oqcguC.png" alt="linha" className="linha" />
            </Grid>

            <Grid item xs={2} sm={2} justifyContent="center">

                <Typography variant="h4" component="h3" align="center" gutterBottom className="titulo-autores">
                    Equipe
                </Typography>

            </Grid>

            <Grid item xs={5} sm={5} className='imagem3'>
                <img src="https://i.imgur.com/0oqcguC.png" alt="linha" className="linha"/>
            </Grid>

            <Box border={1} className="card">
                <Box justifyContent="center" display="flex">
                    <img src="https://i.imgur.com/QGyfXUp.jpg" alt="" className="card-img" />
                </Box>
                <Typography variant="h6" component="h5" align="center" gutterBottom className="nome-autor">
                    Rhaan Dias
                </Typography>
                <Typography variant="body2" component="p" align="center" className="pitch-autor">
                    Cursando Tecnologia e banco de dados, com visão para a área
                    sigo uma filosofia muito simples
                    A confiança e cooperação é muito importante no trabalho em equipe.
                    Com o treinamento focado em Java e MySQL
                    Ajudei a desenvolver o Back-end e principalmente
                    as requisições personalizadas.
                </Typography>
                <Box display="flex" justifyContent="center">
                    <a href="https://github.com/Rhaandias" target="_blank">
                        <GitHubIcon className="github" />
                    </a>
                    <a href="www.linkedin.com/in/rhaan-dias-de-oliveira-6620a71a2" target="_blank">
                        <LinkedInIcon className="in" />
                    </a>
                </Box>
            </Box>

            <Box border={1} className="card">
                <Box justifyContent="center" display="flex">
                    <img src="https://avatars.githubusercontent.com/u/90806568?s=400&u=d46a0e82d323c484bd0832087dff74fdda482e5c&v=4" alt="" className="card-img" />
                </Box>
                <Typography variant="h6" component="h5" align="center" gutterBottom className="nome-autor">
                    Wesley Gomes
                </Typography>
                <Typography variant="body2" component="p" align="center" className="pitch-autor">
                    Graduado em Administração, e formado como Desenvolvedor Full Stack Java Jr. pela Generation Brasil, 
                    com o foco no desenvolvimento pessoal e profissional sempre buscando o aprendizado
                    utilizando de linguagens como:
                    Java para back-end e bibliotecas do React para front-end, além disso, minhas Soft Skills também foram desenvolvidas,
                    principalmente a comunicação, traço muito importante de minha personalidade.
                </Typography>
                <Box display="flex" justifyContent="center">
                    <a href="https://github.com/wesleykfg" target="_blank">
                        <GitHubIcon className="github" />
                    </a>
                    <a href="https://www.linkedin.com/in/wesley-gomes-528978142/" target="_blank">
                        <LinkedInIcon className="in" />
                    </a>
                </Box>
            </Box>

            <Box border={1} className="card">
                <Box justifyContent="center" display="flex">
                    <img src="https://i.imgur.com/9ZJ47sI.jpg" alt="" className="card-img" />
                </Box>
                <Typography variant="h6" component="h5" align="center" gutterBottom className="nome-autor">
                    Rodolfo Gueiros
                </Typography>
                <Typography variant="body2" component="p" align="center" className="pitch-autor">
                    Atuando com linguagem de console e Back-end
                    Eu contribui para os códigos principalmente
                    o Enum!
                    Tendo como filosofia "A mente que se abre a uma nova ideia jamais 
                    voltará ao seu tamanho original" - Albert Einstein.
                    Busco o desenvolvimento continuo.
                </Typography>
                <Box display="flex" justifyContent="center">
                    <a href="https://github.com/RodolfoGueiros" target="_blank">
                        <GitHubIcon className="github" />
                    </a>
                    <a href="" target="_blank">
                        <LinkedInIcon className="in" />
                    </a>
                </Box>
            </Box>

            <Box border={1} className="card">
                <Box justifyContent="center" display="flex">
                    <img src="https://i.imgur.com/JCLOnLj.jpg" alt="" className="card-img" />
                </Box>
                <Typography variant="h6" component="h5" align="center" gutterBottom className="nome-autor">
                Ricardo Valverde
                </Typography>
                <Typography variant="body2" component="p" align="center" className="pitch-autor">
                    Atuando como Salesforce eu contribui
                    com toda a ideia do projeto e pesquisas necessarias.
                    Arquitetando as reuniões, ajudando companheiros
                    e incrementando o pensamento
                    sobre o que é o Acc Bank.
                </Typography>
                <Box display="flex" justifyContent="center">
                    <a href="" target="_blank">
                        <GitHubIcon className="github" />
                    </a>
                    <a href="https://www.linkedin.com/in/ricardo-valverde-5790161a6/" target="_blank">
                        <LinkedInIcon className="in" />
                    </a>
                </Box>
            </Box>
        </Grid>
    );
}

export default Sobre;