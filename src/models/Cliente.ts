import Agencia from "./Agencia"

interface Cliente{
    id: number;
    nome: string;
    cpf: string;
    fone: string;
    agencia?: Agencia|null;
}

export default Cliente;