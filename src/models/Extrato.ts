import ContaCorrente from "./ContaCorrente"

interface Extrato{
    id: number;
    dataHoraMovimento: Date;
    operacao: string;
    valorOperacao: number;
    contaCorrente?: ContaCorrente|null;
}

export default Extrato;