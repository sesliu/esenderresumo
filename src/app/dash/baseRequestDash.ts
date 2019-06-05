export class BaseRequestDash{


    idTransmissor: string;
    pagina: string;
    dataInicio: string;
    dataFim: string;
    totalArquivos: 0;
    enviadosComSucesso: 0;
    erro: 0;
    filaEnvio: 0;
    dadosOcorrencia: string;
    totalPaginas: 0;
    servidor: string;

    constructor(idTransmissor,pagina,dataInicio,dataFim){

        this.idTransmissor = idTransmissor
        this.pagina = pagina
        this.dataInicio = dataInicio,
        this.dataFim =dataFim

    }

} 