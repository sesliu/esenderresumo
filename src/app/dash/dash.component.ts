import { Component, OnInit } from '@angular/core';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent implements OnInit {

public dadosOcorrencia = [];
public listaLotes =[];
public listaErros =[]

  constructor() { 

    this.dadosOcorrencia = [
      {
        "cnpj": "40168635000117",
        "lotes": [
          {
            "cnpj": "40168635000117",
            "lote": 6036,
            "caminhoArq": "C:\\teste\\rubricas_S1010_40168635000117_ID1401686350000002019042416572606722.xml",
            "nomeArquivo": "retorno_rubricas_S1010_40168635000117_ID1401686350000002019042416572606722",
            "eventoAutorizado": "Não",
            "linkXmlRetorno": "<a href=\"http://win-vs-esender:5000/esender/ResumoWeb/XMLRetorno?PIdLote=6036\" download=\"Retorno_retorno_rubricas_S1010_40168635000117_ID1401686350000002019042416572606722_20190515115841.xml\">Arq. Retorno</a>",
            "retornoDisponivel": true,
            "erros": [
              {
                "codigo": 102,
                "msgErro": "O Evento informado n&#227;o foi reconhecido pelo sistema.\nA&#231;&#227;o Sugerida: Verificar se o evento informado e a vers&#227;o do leiaute est&#227;o de acordo com a Tabela 9 (Tipos de Arquivo do eSocial) do eSocial.",
                "gravidade": "Erro"
              }
            ]
          },
          {
            "cnpj": "40168635000117",
            "lote": 6037,
            "caminhoArq": "C:\\teste\\rubricas_S1010_40168635000117_ID1401686350000002019042416572706724.xml",
            "nomeArquivo": "retorno_rubricas_S1010_40168635000117_ID1401686350000002019042416572706724",
            "eventoAutorizado": "Não",
            "linkXmlRetorno": "<a href=\"http://win-vs-esender:5000/esender/ResumoWeb/XMLRetorno?PIdLote=6037\" download=\"Retorno_retorno_rubricas_S1010_40168635000117_ID1401686350000002019042416572706724_20190515115841.xml\">Arq. Retorno</a>",
            "retornoDisponivel": true,
            "erros": [
              {
                "codigo": 102,
                "msgErro": "O Evento informado n&#227;o foi reconhecido pelo sistema.\nA&#231;&#227;o Sugerida: Verificar se o evento informado e a vers&#227;o do leiaute est&#227;o de acordo com a Tabela 9 (Tipos de Arquivo do eSocial) do eSocial.",
                "gravidade": "Erro"
              }
            ]
          }
        ]
  
      }];

      
     for(let i  of this.dadosOcorrencia){

         this.listaLotes = i.lotes;
        
     }
     
     for(let i of this.listaLotes){

        this.listaErros = i.erros;
     }

     console.log(this.listaLotes)

      
     
      
     
  }

  ngOnInit() {

     
  }



}
