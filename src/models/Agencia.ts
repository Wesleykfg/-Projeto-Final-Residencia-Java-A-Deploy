import Cliente from "./Cliente";

interface Agencia{
    id: number;
    nome: string;
    endereco: string;
    fone: string;
    cliente?: Cliente|null;
}

export default Agencia;