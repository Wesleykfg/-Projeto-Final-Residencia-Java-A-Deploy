import Extrato from "./Extrato"
import Cliente from "./Cliente"

interface ContaCorrente{
    id: number;
    contaCorrenteAgencia: string;
    contaCorrenteNumero: string;
    saldo: number;
    statusConta: string;
    extrato?: Extrato|null;
    cliente?: Cliente|null;
}

export default ContaCorrente;