import { Component, OnInit } from '@angular/core';
import { JsonPipe } from '@angular/common';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent implements OnInit {

public dadosOcorrencia;
public listaLotes =[];
public listaErros =[]
public retorno;

  constructor(private sanitizer:DomSanitizer) { 

    this.dadosOcorrencia = 
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
                "msgErro": "O Evento informado;o foi reconhecido pelo sistema.o Sugerida: Verificar se o evento informado e a vers&#227;o do leiaute est&#227;o de acordo com a Tabela 9 (Tipos de Arquivo do eSocial) do eSocial.",
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
                "msgErro": "O Evento informado n&#227;o foi reconhecido pelo sistema.o Sugerida: Verificar se o evento informado e a vers&#227;o do leiaute est&#227;o de acordo com a Tabela 9 (Tipos de Arquivo do eSocial) do eSocial.",
                "gravidade": "Erro"
              }
            ]
          }
        ]
  
      };

      this.retorno = this.dadosOcorrencia.lotes;


      let codigoErro, mensagemErro, gravidade

      for(let i = 0; i <  this.retorno.length; i++){
  
        for(let j of this.retorno[i].erros){

          
          codigoErro = j.codigo;
          mensagemErro  = j.msgErro;
          gravidade = j.gravidade;

  

        }


       let url : string;
       let download : string;
       url = this.retorno[i].linkXmlRetorno.substring(this.retorno[i].linkXmlRetorno.indexOf('<a href=')+8,this.retorno[i].linkXmlRetorno.lastIndexOf('download'));
       download = this.retorno[i].linkXmlRetorno.substring(this.retorno[i].linkXmlRetorno.indexOf('download=')+9,this.retorno[i].linkXmlRetorno.lastIndexOf('>Arq. Retorno<'))
     
        this.listaLotes.push({

          'cnpj': this.retorno[i].cnpj,
          'lote': this.retorno[i].lote,
          'caminhoArq' : this.retorno[i].caminhoArq,
          'nomeArquivo' : this.retorno[i].nomeArquivo,
          'eventoAutorizado' : this.retorno[i].eventoAutorizado,
          'linkXmlRetorno' : this.retorno[i].linkXmlRetorno,
          'href' : url.toString().replace('"','').replace('"',''),
          'download' : download.toString().replace('"','').replace('"',''),
          'retornoDisponivel' : this.retorno[i].retornoDisponivel,
          'codigoErro' : codigoErro,
          'mensagemErro' : mensagemErro,
          'gravidade' : gravidade
        
        });
      
      }
      
     
  }



  redirecionarUrl(url:string){

    //console.log(url)
    window.location.href=url;
  }

  sanitize(url:string){
    return this.sanitizer.bypassSecurityTrustUrl(url);
}

  ngOnInit() {

     
  }



}
