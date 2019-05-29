import { Component, OnInit } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent implements OnInit {

  public dadosOcorrencia;
  public listaLotes = [];
  public listaErros = []
  public retorno;
  public p: number = 1;

  constructor(private sanitizer: DomSanitizer) {

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
          },
          {
            "cnpj": "40168635000117",
            "lote": 6038,
            "caminhoArq": "C:\\teste\\rubricas_S1010_40168635000117_ID1401686350000002019042416572706726.xml",
            "nomeArquivo": "retorno_rubricas_S1010_40168635000117_ID1401686350000002019042416572706726",
            "eventoAutorizado": "Não",
            "linkXmlRetorno": "<a href=\"http://win-vs-esender:5000/esender/ResumoWeb/XMLRetorno?PIdLote=6038\" download=\"Retorno_retorno_rubricas_S1010_40168635000117_ID1401686350000002019042416572706726_20190515115841.xml\">Arq. Retorno</a>",
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
            "lote": 6039,
            "caminhoArq": "C:\\teste\\rubricas_S1010_40168635000117_ID1401686350000002019042416572706728.xml",
            "nomeArquivo": "retorno_rubricas_S1010_40168635000117_ID1401686350000002019042416572706728",
            "eventoAutorizado": "Não",
            "linkXmlRetorno": "<a href=\"http://win-vs-esender:5000/esender/ResumoWeb/XMLRetorno?PIdLote=6039\" download=\"Retorno_retorno_rubricas_S1010_40168635000117_ID1401686350000002019042416572706728_20190515115841.xml\">Arq. Retorno</a>",
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
            "lote": 6040,
            "caminhoArq": "C:\\teste\\rubricas_S1010_40168635000117_ID1401686350000002019042416572706730.xml",
            "nomeArquivo": "retorno_rubricas_S1010_40168635000117_ID1401686350000002019042416572706730",
            "eventoAutorizado": "Não",
            "linkXmlRetorno": "<a href=\"http://win-vs-esender:5000/esender/ResumoWeb/XMLRetorno?PIdLote=6040\" download=\"Retorno_retorno_rubricas_S1010_40168635000117_ID1401686350000002019042416572706730_20190515115841.xml\">Arq. Retorno</a>",
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
            "lote": 6041,
            "caminhoArq": "C:\\teste\\rubricas_S1010_40168635000117_ID1401686350000002019042416572706732.xml",
            "nomeArquivo": "retorno_rubricas_S1010_40168635000117_ID1401686350000002019042416572706732",
            "eventoAutorizado": "Não",
            "linkXmlRetorno": "<a href=\"http://win-vs-esender:5000/esender/ResumoWeb/XMLRetorno?PIdLote=6041\" download=\"Retorno_retorno_rubricas_S1010_40168635000117_ID1401686350000002019042416572706732_20190515115841.xml\">Arq. Retorno</a>",
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
            "lote": 6042,
            "caminhoArq": "C:\\teste\\rubricas_S1010_40168635000117_ID1401686350000002019042416572706734.xml",
            "nomeArquivo": "retorno_rubricas_S1010_40168635000117_ID1401686350000002019042416572706734",
            "eventoAutorizado": "Não",
            "linkXmlRetorno": "<a href=\"http://win-vs-esender:5000/esender/ResumoWeb/XMLRetorno?PIdLote=6042\" download=\"Retorno_retorno_rubricas_S1010_40168635000117_ID1401686350000002019042416572706734_20190515115841.xml\">Arq. Retorno</a>",
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
            "lote": 6043,
            "caminhoArq": "C:\\teste\\rubricas_S1010_40168635000117_ID1401686350000002019042416572706736.xml",
            "nomeArquivo": "retorno_rubricas_S1010_40168635000117_ID1401686350000002019042416572706736",
            "eventoAutorizado": "Não",
            "linkXmlRetorno": "<a href=\"http://win-vs-esender:5000/esender/ResumoWeb/XMLRetorno?PIdLote=6043\" download=\"Retorno_retorno_rubricas_S1010_40168635000117_ID1401686350000002019042416572706736_20190515115841.xml\">Arq. Retorno</a>",
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
            "lote": 6044,
            "caminhoArq": "C:\\teste\\rubricas_S1010_40168635000117_ID1401686350000002019042416572706738.xml",
            "nomeArquivo": "retorno_rubricas_S1010_40168635000117_ID1401686350000002019042416572706738",
            "eventoAutorizado": "Não",
            "linkXmlRetorno": "<a href=\"http://win-vs-esender:5000/esender/ResumoWeb/XMLRetorno?PIdLote=6044\" download=\"Retorno_retorno_rubricas_S1010_40168635000117_ID1401686350000002019042416572706738_20190515115841.xml\">Arq. Retorno</a>",
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
            "lote": 6045,
            "caminhoArq": "C:\\teste\\rubricas_S1010_40168635000117_ID1401686350000002019042416572706740.xml",
            "nomeArquivo": "retorno_rubricas_S1010_40168635000117_ID1401686350000002019042416572706740",
            "eventoAutorizado": "Não",
            "linkXmlRetorno": "<a href=\"http://win-vs-esender:5000/esender/ResumoWeb/XMLRetorno?PIdLote=6045\" download=\"Retorno_retorno_rubricas_S1010_40168635000117_ID1401686350000002019042416572706740_20190515115841.xml\">Arq. Retorno</a>",
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
            "lote": 6046,
            "caminhoArq": "C:\\teste\\rubricas_S1010_40168635000117_ID1401686350000002019042416572706742.xml",
            "nomeArquivo": "retorno_rubricas_S1010_40168635000117_ID1401686350000002019042416572706742",
            "eventoAutorizado": "Não",
            "linkXmlRetorno": "<a href=\"http://win-vs-esender:5000/esender/ResumoWeb/XMLRetorno?PIdLote=6046\" download=\"Retorno_retorno_rubricas_S1010_40168635000117_ID1401686350000002019042416572706742_20190515115841.xml\">Arq. Retorno</a>",
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
            "lote": 6047,
            "caminhoArq": "C:\\teste\\rubricas_S1010_40168635000117_ID1401686350000002019042416572806744.xml",
            "nomeArquivo": "retorno_rubricas_S1010_40168635000117_ID1401686350000002019042416572806744",
            "eventoAutorizado": "Não",
            "linkXmlRetorno": "<a href=\"http://win-vs-esender:5000/esender/ResumoWeb/XMLRetorno?PIdLote=6047\" download=\"Retorno_retorno_rubricas_S1010_40168635000117_ID1401686350000002019042416572806744_20190515115841.xml\">Arq. Retorno</a>",
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
            "lote": 6048,
            "caminhoArq": "C:\\teste\\rubricas_S1010_40168635000117_ID1401686350000002019042416572806746.xml",
            "nomeArquivo": "retorno_rubricas_S1010_40168635000117_ID1401686350000002019042416572806746",
            "eventoAutorizado": "Não",
            "linkXmlRetorno": "<a href=\"http://win-vs-esender:5000/esender/ResumoWeb/XMLRetorno?PIdLote=6048\" download=\"Retorno_retorno_rubricas_S1010_40168635000117_ID1401686350000002019042416572806746_20190515115841.xml\">Arq. Retorno</a>",
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
            "lote": 6049,
            "caminhoArq": "C:\\teste\\rubricas_S1010_40168635000117_ID1401686350000002019042416572806748.xml",
            "nomeArquivo": "retorno_rubricas_S1010_40168635000117_ID1401686350000002019042416572806748",
            "eventoAutorizado": "Não",
            "linkXmlRetorno": "<a href=\"http://win-vs-esender:5000/esender/ResumoWeb/XMLRetorno?PIdLote=6049\" download=\"Retorno_retorno_rubricas_S1010_40168635000117_ID1401686350000002019042416572806748_20190515115841.xml\">Arq. Retorno</a>",
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
            "lote": 6050,
            "caminhoArq": "C:\\teste\\rubricas_S1010_40168635000117_ID1401686350000002019042416572806750.xml",
            "nomeArquivo": "retorno_rubricas_S1010_40168635000117_ID1401686350000002019042416572806750",
            "eventoAutorizado": "Não",
            "linkXmlRetorno": "<a href=\"http://win-vs-esender:5000/esender/ResumoWeb/XMLRetorno?PIdLote=6050\" download=\"Retorno_retorno_rubricas_S1010_40168635000117_ID1401686350000002019042416572806750_20190515115841.xml\">Arq. Retorno</a>",
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
            "lote": 6051,
            "caminhoArq": "C:\\teste\\rubricas_S1010_40168635000117_ID1401686350000002019042416572806752.xml",
            "nomeArquivo": "retorno_rubricas_S1010_40168635000117_ID1401686350000002019042416572806752",
            "eventoAutorizado": "Não",
            "linkXmlRetorno": "<a href=\"http://win-vs-esender:5000/esender/ResumoWeb/XMLRetorno?PIdLote=6051\" download=\"Retorno_retorno_rubricas_S1010_40168635000117_ID1401686350000002019042416572806752_20190515115841.xml\">Arq. Retorno</a>",
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
            "lote": 6052,
            "caminhoArq": "C:\\teste\\rubricas_S1010_40168635000117_ID1401686350000002019042416572806754.xml",
            "nomeArquivo": "retorno_rubricas_S1010_40168635000117_ID1401686350000002019042416572806754",
            "eventoAutorizado": "Não",
            "linkXmlRetorno": "<a href=\"http://win-vs-esender:5000/esender/ResumoWeb/XMLRetorno?PIdLote=6052\" download=\"Retorno_retorno_rubricas_S1010_40168635000117_ID1401686350000002019042416572806754_20190515115841.xml\">Arq. Retorno</a>",
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
            "lote": 6053,
            "caminhoArq": "C:\\teste\\rubricas_S1010_40168635000117_ID1401686350000002019042416572806756.xml",
            "nomeArquivo": "retorno_rubricas_S1010_40168635000117_ID1401686350000002019042416572806756",
            "eventoAutorizado": "Não",
            "linkXmlRetorno": "<a href=\"http://win-vs-esender:5000/esender/ResumoWeb/XMLRetorno?PIdLote=6053\" download=\"Retorno_retorno_rubricas_S1010_40168635000117_ID1401686350000002019042416572806756_20190515115841.xml\">Arq. Retorno</a>",
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
            "lote": 6054,
            "caminhoArq": "C:\\teste\\rubricas_S1010_40168635000117_ID1401686350000002019042416572806758.xml",
            "nomeArquivo": "retorno_rubricas_S1010_40168635000117_ID1401686350000002019042416572806758",
            "eventoAutorizado": "Não",
            "linkXmlRetorno": "<a href=\"http://win-vs-esender:5000/esender/ResumoWeb/XMLRetorno?PIdLote=6054\" download=\"Retorno_retorno_rubricas_S1010_40168635000117_ID1401686350000002019042416572806758_20190515115841.xml\">Arq. Retorno</a>",
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
            "lote": 6055,
            "caminhoArq": "C:\\teste\\rubricas_S1010_40168635000117_ID1401686350000002019042416572806760.xml",
            "nomeArquivo": "retorno_rubricas_S1010_40168635000117_ID1401686350000002019042416572806760",
            "eventoAutorizado": "Não",
            "linkXmlRetorno": "<a href=\"http://win-vs-esender:5000/esender/ResumoWeb/XMLRetorno?PIdLote=6055\" download=\"Retorno_retorno_rubricas_S1010_40168635000117_ID1401686350000002019042416572806760_20190515115841.xml\">Arq. Retorno</a>",
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
            "lote": 6056,
            "caminhoArq": "C:\\teste\\rubricas_S1010_40168635000117_ID1401686350000002019042416572906762.xml",
            "nomeArquivo": "retorno_rubricas_S1010_40168635000117_ID1401686350000002019042416572906762",
            "eventoAutorizado": "Não",
            "linkXmlRetorno": "<a href=\"http://win-vs-esender:5000/esender/ResumoWeb/XMLRetorno?PIdLote=6056\" download=\"Retorno_retorno_rubricas_S1010_40168635000117_ID1401686350000002019042416572906762_20190515115841.xml\">Arq. Retorno</a>",
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
            "lote": 6057,
            "caminhoArq": "C:\\teste\\rubricas_S1010_40168635000117_ID1401686350000002019042416572906764.xml",
            "nomeArquivo": "retorno_rubricas_S1010_40168635000117_ID1401686350000002019042416572906764",
            "eventoAutorizado": "Não",
            "linkXmlRetorno": "<a href=\"http://win-vs-esender:5000/esender/ResumoWeb/XMLRetorno?PIdLote=6057\" download=\"Retorno_retorno_rubricas_S1010_40168635000117_ID1401686350000002019042416572906764_20190515115841.xml\">Arq. Retorno</a>",
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
            "lote": 6058,
            "caminhoArq": "C:\\teste\\rubricas_S1010_40168635000117_ID1401686350000002019042416572906766.xml",
            "nomeArquivo": "retorno_rubricas_S1010_40168635000117_ID1401686350000002019042416572906766",
            "eventoAutorizado": "Não",
            "linkXmlRetorno": "<a href=\"http://win-vs-esender:5000/esender/ResumoWeb/XMLRetorno?PIdLote=6058\" download=\"Retorno_retorno_rubricas_S1010_40168635000117_ID1401686350000002019042416572906766_20190515115841.xml\">Arq. Retorno</a>",
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
            "lote": 6059,
            "caminhoArq": "C:\\teste\\rubricas_S1010_40168635000117_ID1401686350000002019042416572906768.xml",
            "nomeArquivo": "retorno_rubricas_S1010_40168635000117_ID1401686350000002019042416572906768",
            "eventoAutorizado": "Não",
            "linkXmlRetorno": "<a href=\"http://win-vs-esender:5000/esender/ResumoWeb/XMLRetorno?PIdLote=6059\" download=\"Retorno_retorno_rubricas_S1010_40168635000117_ID1401686350000002019042416572906768_20190515115841.xml\">Arq. Retorno</a>",
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
            "lote": 6060,
            "caminhoArq": "C:\\teste\\rubricas_S1010_40168635000117_ID1401686350000002019042416572906770.xml",
            "nomeArquivo": "retorno_rubricas_S1010_40168635000117_ID1401686350000002019042416572906770",
            "eventoAutorizado": "Não",
            "linkXmlRetorno": "<a href=\"http://win-vs-esender:5000/esender/ResumoWeb/XMLRetorno?PIdLote=6060\" download=\"Retorno_retorno_rubricas_S1010_40168635000117_ID1401686350000002019042416572906770_20190515115841.xml\">Arq. Retorno</a>",
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
            "lote": 6061,
            "caminhoArq": "C:\\teste\\rubricas_S1010_40168635000117_ID1401686350000002019042416572906772.xml",
            "nomeArquivo": "retorno_rubricas_S1010_40168635000117_ID1401686350000002019042416572906772",
            "eventoAutorizado": "Não",
            "linkXmlRetorno": "<a href=\"http://win-vs-esender:5000/esender/ResumoWeb/XMLRetorno?PIdLote=6061\" download=\"Retorno_retorno_rubricas_S1010_40168635000117_ID1401686350000002019042416572906772_20190515115841.xml\">Arq. Retorno</a>",
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
            "lote": 6062,
            "caminhoArq": "C:\\teste\\rubricas_S1010_40168635000117_ID1401686350000002019042416572906774.xml",
            "nomeArquivo": "retorno_rubricas_S1010_40168635000117_ID1401686350000002019042416572906774",
            "eventoAutorizado": "Não",
            "linkXmlRetorno": "<a href=\"http://win-vs-esender:5000/esender/ResumoWeb/XMLRetorno?PIdLote=6062\" download=\"Retorno_retorno_rubricas_S1010_40168635000117_ID1401686350000002019042416572906774_20190515115841.xml\">Arq. Retorno</a>",
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
            "lote": 6063,
            "caminhoArq": "C:\\teste\\rubricas_S1010_40168635000117_ID1401686350000002019042416572906776.xml",
            "nomeArquivo": "retorno_rubricas_S1010_40168635000117_ID1401686350000002019042416572906776",
            "eventoAutorizado": "Não",
            "linkXmlRetorno": "<a href=\"http://win-vs-esender:5000/esender/ResumoWeb/XMLRetorno?PIdLote=6063\" download=\"Retorno_retorno_rubricas_S1010_40168635000117_ID1401686350000002019042416572906776_20190515115841.xml\">Arq. Retorno</a>",
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
            "lote": 6064,
            "caminhoArq": "C:\\teste\\rubricas_S1010_40168635000117_ID1401686350000002019042416572906778.xml",
            "nomeArquivo": "retorno_rubricas_S1010_40168635000117_ID1401686350000002019042416572906778",
            "eventoAutorizado": "Não",
            "linkXmlRetorno": "<a href=\"http://win-vs-esender:5000/esender/ResumoWeb/XMLRetorno?PIdLote=6064\" download=\"Retorno_retorno_rubricas_S1010_40168635000117_ID1401686350000002019042416572906778_20190515115841.xml\">Arq. Retorno</a>",
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
            "lote": 6065,
            "caminhoArq": "C:\\teste\\rubricas_S1010_40168635000117_ID1401686350000002019042416573006780.xml",
            "nomeArquivo": "retorno_rubricas_S1010_40168635000117_ID1401686350000002019042416573006780",
            "eventoAutorizado": "Não",
            "linkXmlRetorno": "<a href=\"http://win-vs-esender:5000/esender/ResumoWeb/XMLRetorno?PIdLote=6065\" download=\"Retorno_retorno_rubricas_S1010_40168635000117_ID1401686350000002019042416573006780_20190515115841.xml\">Arq. Retorno</a>",
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
            "lote": 6066,
            "caminhoArq": "C:\\teste\\rubricas_S1010_40168635000117_ID1401686350000002019042416573006782.xml",
            "nomeArquivo": "retorno_rubricas_S1010_40168635000117_ID1401686350000002019042416573006782",
            "eventoAutorizado": "Não",
            "linkXmlRetorno": "<a href=\"http://win-vs-esender:5000/esender/ResumoWeb/XMLRetorno?PIdLote=6066\" download=\"Retorno_retorno_rubricas_S1010_40168635000117_ID1401686350000002019042416573006782_20190515115841.xml\">Arq. Retorno</a>",
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
            "lote": 6067,
            "caminhoArq": "C:\\teste\\rubricas_S1010_40168635000117_ID1401686350000002019042416573006784.xml",
            "nomeArquivo": "retorno_rubricas_S1010_40168635000117_ID1401686350000002019042416573006784",
            "eventoAutorizado": "Não",
            "linkXmlRetorno": "<a href=\"http://win-vs-esender:5000/esender/ResumoWeb/XMLRetorno?PIdLote=6067\" download=\"Retorno_retorno_rubricas_S1010_40168635000117_ID1401686350000002019042416573006784_20190515115841.xml\">Arq. Retorno</a>",
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
            "lote": 6068,
            "caminhoArq": "C:\\teste\\rubricas_S1010_40168635000117_ID1401686350000002019042416573006786.xml",
            "nomeArquivo": "retorno_rubricas_S1010_40168635000117_ID1401686350000002019042416573006786",
            "eventoAutorizado": "Não",
            "linkXmlRetorno": "<a href=\"http://win-vs-esender:5000/esender/ResumoWeb/XMLRetorno?PIdLote=6068\" download=\"Retorno_retorno_rubricas_S1010_40168635000117_ID1401686350000002019042416573006786_20190515115841.xml\">Arq. Retorno</a>",
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
            "lote": 6069,
            "caminhoArq": "C:\\teste\\rubricas_S1010_40168635000117_ID1401686350000002019042416573006788.xml",
            "nomeArquivo": "retorno_rubricas_S1010_40168635000117_ID1401686350000002019042416573006788",
            "eventoAutorizado": "Não",
            "linkXmlRetorno": "<a href=\"http://win-vs-esender:5000/esender/ResumoWeb/XMLRetorno?PIdLote=6069\" download=\"Retorno_retorno_rubricas_S1010_40168635000117_ID1401686350000002019042416573006788_20190515115841.xml\">Arq. Retorno</a>",
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
            "lote": 6070,
            "caminhoArq": "C:\\teste\\rubricas_S1010_40168635000117_ID1401686350000002019042416573006790.xml",
            "nomeArquivo": "retorno_rubricas_S1010_40168635000117_ID1401686350000002019042416573006790",
            "eventoAutorizado": "Não",
            "linkXmlRetorno": "<a href=\"http://win-vs-esender:5000/esender/ResumoWeb/XMLRetorno?PIdLote=6070\" download=\"Retorno_retorno_rubricas_S1010_40168635000117_ID1401686350000002019042416573006790_20190515115841.xml\">Arq. Retorno</a>",
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
            "lote": 6071,
            "caminhoArq": "C:\\teste\\rubricas_S1010_40168635000117_ID1401686350000002019042416573006792.xml",
            "nomeArquivo": "retorno_rubricas_S1010_40168635000117_ID1401686350000002019042416573006792",
            "eventoAutorizado": "Não",
            "linkXmlRetorno": "<a href=\"http://win-vs-esender:5000/esender/ResumoWeb/XMLRetorno?PIdLote=6071\" download=\"Retorno_retorno_rubricas_S1010_40168635000117_ID1401686350000002019042416573006792_20190515115841.xml\">Arq. Retorno</a>",
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
            "lote": 6072,
            "caminhoArq": "C:\\teste\\rubricas_S1010_40168635000117_ID1401686350000002019042416573006794.xml",
            "nomeArquivo": "retorno_rubricas_S1010_40168635000117_ID1401686350000002019042416573006794",
            "eventoAutorizado": "Não",
            "linkXmlRetorno": "<a href=\"http://win-vs-esender:5000/esender/ResumoWeb/XMLRetorno?PIdLote=6072\" download=\"Retorno_retorno_rubricas_S1010_40168635000117_ID1401686350000002019042416573006794_20190515115841.xml\">Arq. Retorno</a>",
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
            "lote": 6073,
            "caminhoArq": "C:\\teste\\rubricas_S1010_40168635000117_ID1401686350000002019042416573006796.xml",
            "nomeArquivo": "retorno_rubricas_S1010_40168635000117_ID1401686350000002019042416573006796",
            "eventoAutorizado": "Não",
            "linkXmlRetorno": "<a href=\"http://win-vs-esender:5000/esender/ResumoWeb/XMLRetorno?PIdLote=6073\" download=\"Retorno_retorno_rubricas_S1010_40168635000117_ID1401686350000002019042416573006796_20190515115841.xml\">Arq. Retorno</a>",
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
            "lote": 6074,
            "caminhoArq": "C:\\teste\\rubricas_S1010_40168635000117_ID1401686350000002019042416573106798.xml",
            "nomeArquivo": "retorno_rubricas_S1010_40168635000117_ID1401686350000002019042416573106798",
            "eventoAutorizado": "Não",
            "linkXmlRetorno": "<a href=\"http://win-vs-esender:5000/esender/ResumoWeb/XMLRetorno?PIdLote=6074\" download=\"Retorno_retorno_rubricas_S1010_40168635000117_ID1401686350000002019042416573106798_20190515115841.xml\">Arq. Retorno</a>",
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
            "lote": 6075,
            "caminhoArq": "C:\\teste\\rubricas_S1010_40168635000117_ID1401686350000002019042416573106800.xml",
            "nomeArquivo": "retorno_rubricas_S1010_40168635000117_ID1401686350000002019042416573106800",
            "eventoAutorizado": "Não",
            "linkXmlRetorno": "<a href=\"http://win-vs-esender:5000/esender/ResumoWeb/XMLRetorno?PIdLote=6075\" download=\"Retorno_retorno_rubricas_S1010_40168635000117_ID1401686350000002019042416573106800_20190515115841.xml\">Arq. Retorno</a>",
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
            "lote": 6076,
            "caminhoArq": "C:\\teste\\rubricas_S1010_40168635000117_ID1401686350000002019042416573106802.xml",
            "nomeArquivo": "retorno_rubricas_S1010_40168635000117_ID1401686350000002019042416573106802",
            "eventoAutorizado": "Não",
            "linkXmlRetorno": "<a href=\"http://win-vs-esender:5000/esender/ResumoWeb/XMLRetorno?PIdLote=6076\" download=\"Retorno_retorno_rubricas_S1010_40168635000117_ID1401686350000002019042416573106802_20190515115841.xml\">Arq. Retorno</a>",
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
            "lote": 6077,
            "caminhoArq": "C:\\teste\\rubricas_S1010_40168635000117_ID1401686350000002019042416573106804.xml",
            "nomeArquivo": "retorno_rubricas_S1010_40168635000117_ID1401686350000002019042416573106804",
            "eventoAutorizado": "Não",
            "linkXmlRetorno": "<a href=\"http://win-vs-esender:5000/esender/ResumoWeb/XMLRetorno?PIdLote=6077\" download=\"Retorno_retorno_rubricas_S1010_40168635000117_ID1401686350000002019042416573106804_20190515115841.xml\">Arq. Retorno</a>",
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
            "lote": 6078,
            "caminhoArq": "C:\\teste\\rubricas_S1010_40168635000117_ID1401686350000002019042416573106806.xml",
            "nomeArquivo": "retorno_rubricas_S1010_40168635000117_ID1401686350000002019042416573106806",
            "eventoAutorizado": "Não",
            "linkXmlRetorno": "<a href=\"http://win-vs-esender:5000/esender/ResumoWeb/XMLRetorno?PIdLote=6078\" download=\"Retorno_retorno_rubricas_S1010_40168635000117_ID1401686350000002019042416573106806_20190515115841.xml\">Arq. Retorno</a>",
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
            "lote": 6079,
            "caminhoArq": "C:\\teste\\rubricas_S1010_40168635000117_ID1401686350000002019042416573106808.xml",
            "nomeArquivo": "retorno_rubricas_S1010_40168635000117_ID1401686350000002019042416573106808",
            "eventoAutorizado": "Não",
            "linkXmlRetorno": "<a href=\"http://win-vs-esender:5000/esender/ResumoWeb/XMLRetorno?PIdLote=6079\" download=\"Retorno_retorno_rubricas_S1010_40168635000117_ID1401686350000002019042416573106808_20190515115841.xml\">Arq. Retorno</a>",
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
            "lote": 6080,
            "caminhoArq": "C:\\teste\\rubricas_S1010_40168635000117_ID1401686350000002019042416573106810.xml",
            "nomeArquivo": "retorno_rubricas_S1010_40168635000117_ID1401686350000002019042416573106810",
            "eventoAutorizado": "Não",
            "linkXmlRetorno": "<a href=\"http://win-vs-esender:5000/esender/ResumoWeb/XMLRetorno?PIdLote=6080\" download=\"Retorno_retorno_rubricas_S1010_40168635000117_ID1401686350000002019042416573106810_20190515115841.xml\">Arq. Retorno</a>",
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
            "lote": 6081,
            "caminhoArq": "C:\\teste\\rubricas_S1010_40168635000117_ID1401686350000002019042416573106812.xml",
            "nomeArquivo": "retorno_rubricas_S1010_40168635000117_ID1401686350000002019042416573106812",
            "eventoAutorizado": "Não",
            "linkXmlRetorno": "<a href=\"http://win-vs-esender:5000/esender/ResumoWeb/XMLRetorno?PIdLote=6081\" download=\"Retorno_retorno_rubricas_S1010_40168635000117_ID1401686350000002019042416573106812_20190515115841.xml\">Arq. Retorno</a>",
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
            "lote": 6082,
            "caminhoArq": "C:\\teste\\rubricas_S1010_40168635000117_ID1401686350000002019042416573106814.xml",
            "nomeArquivo": "retorno_rubricas_S1010_40168635000117_ID1401686350000002019042416573106814",
            "eventoAutorizado": "Não",
            "linkXmlRetorno": "<a href=\"http://win-vs-esender:5000/esender/ResumoWeb/XMLRetorno?PIdLote=6082\" download=\"Retorno_retorno_rubricas_S1010_40168635000117_ID1401686350000002019042416573106814_20190515115841.xml\">Arq. Retorno</a>",
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
            "lote": 6083,
            "caminhoArq": "C:\\teste\\rubricas_S1010_40168635000117_ID1401686350000002019042416573206816.xml",
            "nomeArquivo": "retorno_rubricas_S1010_40168635000117_ID1401686350000002019042416573206816",
            "eventoAutorizado": "Não",
            "linkXmlRetorno": "<a href=\"http://win-vs-esender:5000/esender/ResumoWeb/XMLRetorno?PIdLote=6083\" download=\"Retorno_retorno_rubricas_S1010_40168635000117_ID1401686350000002019042416573206816_20190515115841.xml\">Arq. Retorno</a>",
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
            "lote": 6084,
            "caminhoArq": "C:\\teste\\rubricas_S1010_40168635000117_ID1401686350000002019042416573206818.xml",
            "nomeArquivo": "retorno_rubricas_S1010_40168635000117_ID1401686350000002019042416573206818",
            "eventoAutorizado": "Não",
            "linkXmlRetorno": "<a href=\"http://win-vs-esender:5000/esender/ResumoWeb/XMLRetorno?PIdLote=6084\" download=\"Retorno_retorno_rubricas_S1010_40168635000117_ID1401686350000002019042416573206818_20190515115841.xml\">Arq. Retorno</a>",
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
            "lote": 6085,
            "caminhoArq": "C:\\teste\\rubricas_S1010_40168635000117_ID1401686350000002019042416573206820.xml",
            "nomeArquivo": "retorno_rubricas_S1010_40168635000117_ID1401686350000002019042416573206820",
            "eventoAutorizado": "Não",
            "linkXmlRetorno": "<a href=\"http://win-vs-esender:5000/esender/ResumoWeb/XMLRetorno?PIdLote=6085\" download=\"Retorno_retorno_rubricas_S1010_40168635000117_ID1401686350000002019042416573206820_20190515115841.xml\">Arq. Retorno</a>",
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
            "lote": 6086,
            "caminhoArq": "C:\\teste\\rubricas_S1010_40168635000117_ID1401686350000002019042416573206822.xml",
            "nomeArquivo": "retorno_rubricas_S1010_40168635000117_ID1401686350000002019042416573206822",
            "eventoAutorizado": "Não",
            "linkXmlRetorno": "<a href=\"http://win-vs-esender:5000/esender/ResumoWeb/XMLRetorno?PIdLote=6086\" download=\"Retorno_retorno_rubricas_S1010_40168635000117_ID1401686350000002019042416573206822_20190515115841.xml\">Arq. Retorno</a>",
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
            "lote": 6087,
            "caminhoArq": "C:\\teste\\rubricas_S1010_40168635000117_ID1401686350000002019042416573206824.xml",
            "nomeArquivo": "retorno_rubricas_S1010_40168635000117_ID1401686350000002019042416573206824",
            "eventoAutorizado": "Não",
            "linkXmlRetorno": "<a href=\"http://win-vs-esender:5000/esender/ResumoWeb/XMLRetorno?PIdLote=6087\" download=\"Retorno_retorno_rubricas_S1010_40168635000117_ID1401686350000002019042416573206824_20190515115841.xml\">Arq. Retorno</a>",
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
            "lote": 6088,
            "caminhoArq": "C:\\teste\\rubricas_S1010_40168635000117_ID1401686350000002019042416573206826.xml",
            "nomeArquivo": "retorno_rubricas_S1010_40168635000117_ID1401686350000002019042416573206826",
            "eventoAutorizado": "Não",
            "linkXmlRetorno": "<a href=\"http://win-vs-esender:5000/esender/ResumoWeb/XMLRetorno?PIdLote=6088\" download=\"Retorno_retorno_rubricas_S1010_40168635000117_ID1401686350000002019042416573206826_20190515115841.xml\">Arq. Retorno</a>",
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
            "lote": 6089,
            "caminhoArq": "C:\\teste\\rubricas_S1010_40168635000117_ID1401686350000002019042416573206828.xml",
            "nomeArquivo": "retorno_rubricas_S1010_40168635000117_ID1401686350000002019042416573206828",
            "eventoAutorizado": "Não",
            "linkXmlRetorno": "<a href=\"http://win-vs-esender:5000/esender/ResumoWeb/XMLRetorno?PIdLote=6089\" download=\"Retorno_retorno_rubricas_S1010_40168635000117_ID1401686350000002019042416573206828_20190515115841.xml\">Arq. Retorno</a>",
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
            "lote": 6090,
            "caminhoArq": "C:\\teste\\rubricas_S1010_40168635000117_ID1401686350000002019042416573206830.xml",
            "nomeArquivo": "retorno_rubricas_S1010_40168635000117_ID1401686350000002019042416573206830",
            "eventoAutorizado": "Não",
            "linkXmlRetorno": "<a href=\"http://win-vs-esender:5000/esender/ResumoWeb/XMLRetorno?PIdLote=6090\" download=\"Retorno_retorno_rubricas_S1010_40168635000117_ID1401686350000002019042416573206830_20190515115841.xml\">Arq. Retorno</a>",
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
            "lote": 6091,
            "caminhoArq": "C:\\teste\\rubricas_S1010_40168635000117_ID1401686350000002019042416573306832.xml",
            "nomeArquivo": "retorno_rubricas_S1010_40168635000117_ID1401686350000002019042416573306832",
            "eventoAutorizado": "Não",
            "linkXmlRetorno": "<a href=\"http://win-vs-esender:5000/esender/ResumoWeb/XMLRetorno?PIdLote=6091\" download=\"Retorno_retorno_rubricas_S1010_40168635000117_ID1401686350000002019042416573306832_20190515115841.xml\">Arq. Retorno</a>",
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
            "lote": 6092,
            "caminhoArq": "C:\\teste\\rubricas_S1010_40168635000117_ID1401686350000002019042416573306834.xml",
            "nomeArquivo": "retorno_rubricas_S1010_40168635000117_ID1401686350000002019042416573306834",
            "eventoAutorizado": "Não",
            "linkXmlRetorno": "<a href=\"http://win-vs-esender:5000/esender/ResumoWeb/XMLRetorno?PIdLote=6092\" download=\"Retorno_retorno_rubricas_S1010_40168635000117_ID1401686350000002019042416573306834_20190515115841.xml\">Arq. Retorno</a>",
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
            "lote": 6093,
            "caminhoArq": "C:\\teste\\rubricas_S1010_40168635000117_ID1401686350000002019042416573306836.xml",
            "nomeArquivo": "retorno_rubricas_S1010_40168635000117_ID1401686350000002019042416573306836",
            "eventoAutorizado": "Não",
            "linkXmlRetorno": "<a href=\"http://win-vs-esender:5000/esender/ResumoWeb/XMLRetorno?PIdLote=6093\" download=\"Retorno_retorno_rubricas_S1010_40168635000117_ID1401686350000002019042416573306836_20190515115841.xml\">Arq. Retorno</a>",
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
            "lote": 6094,
            "caminhoArq": "C:\\teste\\rubricas_S1010_40168635000117_ID1401686350000002019042416573306838.xml",
            "nomeArquivo": "retorno_rubricas_S1010_40168635000117_ID1401686350000002019042416573306838",
            "eventoAutorizado": "Não",
            "linkXmlRetorno": "<a href=\"http://win-vs-esender:5000/esender/ResumoWeb/XMLRetorno?PIdLote=6094\" download=\"Retorno_retorno_rubricas_S1010_40168635000117_ID1401686350000002019042416573306838_20190515115841.xml\">Arq. Retorno</a>",
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
            "lote": 6095,
            "caminhoArq": "C:\\teste\\rubricas_S1010_40168635000117_ID1401686350000002019042416573306840.xml",
            "nomeArquivo": "retorno_rubricas_S1010_40168635000117_ID1401686350000002019042416573306840",
            "eventoAutorizado": "Não",
            "linkXmlRetorno": "<a href=\"http://win-vs-esender:5000/esender/ResumoWeb/XMLRetorno?PIdLote=6095\" download=\"Retorno_retorno_rubricas_S1010_40168635000117_ID1401686350000002019042416573306840_20190515115841.xml\">Arq. Retorno</a>",
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
            "lote": 6096,
            "caminhoArq": "C:\\teste\\rubricas_S1010_40168635000117_ID1401686350000002019042416573406842.xml",
            "nomeArquivo": "retorno_rubricas_S1010_40168635000117_ID1401686350000002019042416573406842",
            "eventoAutorizado": "Não",
            "linkXmlRetorno": "<a href=\"http://win-vs-esender:5000/esender/ResumoWeb/XMLRetorno?PIdLote=6096\" download=\"Retorno_retorno_rubricas_S1010_40168635000117_ID1401686350000002019042416573406842_20190515115841.xml\">Arq. Retorno</a>",
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
            "lote": 6097,
            "caminhoArq": "C:\\teste\\rubricas_S1010_40168635000117_ID1401686350000002019042416573406844.xml",
            "nomeArquivo": "retorno_rubricas_S1010_40168635000117_ID1401686350000002019042416573406844",
            "eventoAutorizado": "Não",
            "linkXmlRetorno": "<a href=\"http://win-vs-esender:5000/esender/ResumoWeb/XMLRetorno?PIdLote=6097\" download=\"Retorno_retorno_rubricas_S1010_40168635000117_ID1401686350000002019042416573406844_20190515115841.xml\">Arq. Retorno</a>",
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
            "lote": 6098,
            "caminhoArq": "C:\\teste\\rubricas_S1010_40168635000117_ID1401686350000002019042416573406846.xml",
            "nomeArquivo": "retorno_rubricas_S1010_40168635000117_ID1401686350000002019042416573406846",
            "eventoAutorizado": "Não",
            "linkXmlRetorno": "<a href=\"http://win-vs-esender:5000/esender/ResumoWeb/XMLRetorno?PIdLote=6098\" download=\"Retorno_retorno_rubricas_S1010_40168635000117_ID1401686350000002019042416573406846_20190515115841.xml\">Arq. Retorno</a>",
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
            "lote": 6099,
            "caminhoArq": "C:\\teste\\rubricas_S1010_40168635000117_ID1401686350000002019042416573406848.xml",
            "nomeArquivo": "retorno_rubricas_S1010_40168635000117_ID1401686350000002019042416573406848",
            "eventoAutorizado": "Não",
            "linkXmlRetorno": "<a href=\"http://win-vs-esender:5000/esender/ResumoWeb/XMLRetorno?PIdLote=6099\" download=\"Retorno_retorno_rubricas_S1010_40168635000117_ID1401686350000002019042416573406848_20190515115841.xml\">Arq. Retorno</a>",
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
            "lote": 6100,
            "caminhoArq": "C:\\teste\\rubricas_S1010_40168635000117_ID1401686350000002019042416573406850.xml",
            "nomeArquivo": "retorno_rubricas_S1010_40168635000117_ID1401686350000002019042416573406850",
            "eventoAutorizado": "Não",
            "linkXmlRetorno": "<a href=\"http://win-vs-esender:5000/esender/ResumoWeb/XMLRetorno?PIdLote=6100\" download=\"Retorno_retorno_rubricas_S1010_40168635000117_ID1401686350000002019042416573406850_20190515115841.xml\">Arq. Retorno</a>",
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
            "lote": 6101,
            "caminhoArq": "C:\\teste\\rubricas_S1010_40168635000117_ID1401686350000002019042416573406852.xml",
            "nomeArquivo": "retorno_rubricas_S1010_40168635000117_ID1401686350000002019042416573406852",
            "eventoAutorizado": "Não",
            "linkXmlRetorno": "<a href=\"http://win-vs-esender:5000/esender/ResumoWeb/XMLRetorno?PIdLote=6101\" download=\"Retorno_retorno_rubricas_S1010_40168635000117_ID1401686350000002019042416573406852_20190515115841.xml\">Arq. Retorno</a>",
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
            "lote": 6102,
            "caminhoArq": "C:\\teste\\rubricas_S1010_40168635000117_ID1401686350000002019042416573406854.xml",
            "nomeArquivo": "retorno_rubricas_S1010_40168635000117_ID1401686350000002019042416573406854",
            "eventoAutorizado": "Não",
            "linkXmlRetorno": "<a href=\"http://win-vs-esender:5000/esender/ResumoWeb/XMLRetorno?PIdLote=6102\" download=\"Retorno_retorno_rubricas_S1010_40168635000117_ID1401686350000002019042416573406854_20190515115841.xml\">Arq. Retorno</a>",
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
            "lote": 6103,
            "caminhoArq": "C:\\teste\\rubricas_S1010_40168635000117_ID1401686350000002019042416573406856.xml",
            "nomeArquivo": "retorno_rubricas_S1010_40168635000117_ID1401686350000002019042416573406856",
            "eventoAutorizado": "Não",
            "linkXmlRetorno": "<a href=\"http://win-vs-esender:5000/esender/ResumoWeb/XMLRetorno?PIdLote=6103\" download=\"Retorno_retorno_rubricas_S1010_40168635000117_ID1401686350000002019042416573406856_20190515115841.xml\">Arq. Retorno</a>",
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
            "lote": 6104,
            "caminhoArq": "C:\\teste\\rubricas_S1010_40168635000117_ID1401686350000002019042416573406858.xml",
            "nomeArquivo": "retorno_rubricas_S1010_40168635000117_ID1401686350000002019042416573406858",
            "eventoAutorizado": "Não",
            "linkXmlRetorno": "<a href=\"http://win-vs-esender:5000/esender/ResumoWeb/XMLRetorno?PIdLote=6104\" download=\"Retorno_retorno_rubricas_S1010_40168635000117_ID1401686350000002019042416573406858_20190515115841.xml\">Arq. Retorno</a>",
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
            "lote": 6105,
            "caminhoArq": "C:\\teste\\rubricas_S1010_40168635000117_ID1401686350000002019042416573506860.xml",
            "nomeArquivo": "retorno_rubricas_S1010_40168635000117_ID1401686350000002019042416573506860",
            "eventoAutorizado": "Não",
            "linkXmlRetorno": "<a href=\"http://win-vs-esender:5000/esender/ResumoWeb/XMLRetorno?PIdLote=6105\" download=\"Retorno_retorno_rubricas_S1010_40168635000117_ID1401686350000002019042416573506860_20190515115841.xml\">Arq. Retorno</a>",
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
            "lote": 6106,
            "caminhoArq": "C:\\teste\\rubricas_S1010_40168635000117_ID1401686350000002019042416573506862.xml",
            "nomeArquivo": "retorno_rubricas_S1010_40168635000117_ID1401686350000002019042416573506862",
            "eventoAutorizado": "Não",
            "linkXmlRetorno": "<a href=\"http://win-vs-esender:5000/esender/ResumoWeb/XMLRetorno?PIdLote=6106\" download=\"Retorno_retorno_rubricas_S1010_40168635000117_ID1401686350000002019042416573506862_20190515115841.xml\">Arq. Retorno</a>",
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
            "lote": 6107,
            "caminhoArq": "C:\\teste\\rubricas_S1010_40168635000117_ID1401686350000002019042416573506864.xml",
            "nomeArquivo": "retorno_rubricas_S1010_40168635000117_ID1401686350000002019042416573506864",
            "eventoAutorizado": "Não",
            "linkXmlRetorno": "<a href=\"http://win-vs-esender:5000/esender/ResumoWeb/XMLRetorno?PIdLote=6107\" download=\"Retorno_retorno_rubricas_S1010_40168635000117_ID1401686350000002019042416573506864_20190515115841.xml\">Arq. Retorno</a>",
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
            "lote": 6108,
            "caminhoArq": "C:\\teste\\rubricas_S1010_40168635000117_ID1401686350000002019042416573506866.xml",
            "nomeArquivo": "retorno_rubricas_S1010_40168635000117_ID1401686350000002019042416573506866",
            "eventoAutorizado": "Não",
            "linkXmlRetorno": "<a href=\"http://win-vs-esender:5000/esender/ResumoWeb/XMLRetorno?PIdLote=6108\" download=\"Retorno_retorno_rubricas_S1010_40168635000117_ID1401686350000002019042416573506866_20190515115841.xml\">Arq. Retorno</a>",
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
            "lote": 6109,
            "caminhoArq": "C:\\teste\\rubricas_S1010_40168635000117_ID1401686350000002019042416573606868.xml",
            "nomeArquivo": "retorno_rubricas_S1010_40168635000117_ID1401686350000002019042416573606868",
            "eventoAutorizado": "Não",
            "linkXmlRetorno": "<a href=\"http://win-vs-esender:5000/esender/ResumoWeb/XMLRetorno?PIdLote=6109\" download=\"Retorno_retorno_rubricas_S1010_40168635000117_ID1401686350000002019042416573606868_20190515115841.xml\">Arq. Retorno</a>",
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
            "lote": 6110,
            "caminhoArq": "C:\\teste\\rubricas_S1010_40168635000117_ID1401686350000002019042416573706870.xml",
            "nomeArquivo": "retorno_rubricas_S1010_40168635000117_ID1401686350000002019042416573706870",
            "eventoAutorizado": "Não",
            "linkXmlRetorno": "<a href=\"http://win-vs-esender:5000/esender/ResumoWeb/XMLRetorno?PIdLote=6110\" download=\"Retorno_retorno_rubricas_S1010_40168635000117_ID1401686350000002019042416573706870_20190515115841.xml\">Arq. Retorno</a>",
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
            "lote": 6111,
            "caminhoArq": "C:\\teste\\rubricas_S1010_40168635000117_ID1401686350000002019042416573706872.xml",
            "nomeArquivo": "retorno_rubricas_S1010_40168635000117_ID1401686350000002019042416573706872",
            "eventoAutorizado": "Não",
            "linkXmlRetorno": "<a href=\"http://win-vs-esender:5000/esender/ResumoWeb/XMLRetorno?PIdLote=6111\" download=\"Retorno_retorno_rubricas_S1010_40168635000117_ID1401686350000002019042416573706872_20190515115841.xml\">Arq. Retorno</a>",
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
            "lote": 6112,
            "caminhoArq": "C:\\teste\\rubricas_S1010_40168635000117_ID1401686350000002019042416573706874.xml",
            "nomeArquivo": "retorno_rubricas_S1010_40168635000117_ID1401686350000002019042416573706874",
            "eventoAutorizado": "Não",
            "linkXmlRetorno": "<a href=\"http://win-vs-esender:5000/esender/ResumoWeb/XMLRetorno?PIdLote=6112\" download=\"Retorno_retorno_rubricas_S1010_40168635000117_ID1401686350000002019042416573706874_20190515115841.xml\">Arq. Retorno</a>",
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
            "lote": 6113,
            "caminhoArq": "C:\\teste\\rubricas_S1010_40168635000117_ID1401686350000002019042416573806876.xml",
            "nomeArquivo": "retorno_rubricas_S1010_40168635000117_ID1401686350000002019042416573806876",
            "eventoAutorizado": "Não",
            "linkXmlRetorno": "<a href=\"http://win-vs-esender:5000/esender/ResumoWeb/XMLRetorno?PIdLote=6113\" download=\"Retorno_retorno_rubricas_S1010_40168635000117_ID1401686350000002019042416573806876_20190515115841.xml\">Arq. Retorno</a>",
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
            "lote": 6114,
            "caminhoArq": "C:\\teste\\rubricas_S1010_40168635000117_ID1401686350000002019042416573806878.xml",
            "nomeArquivo": "retorno_rubricas_S1010_40168635000117_ID1401686350000002019042416573806878",
            "eventoAutorizado": "Não",
            "linkXmlRetorno": "<a href=\"http://win-vs-esender:5000/esender/ResumoWeb/XMLRetorno?PIdLote=6114\" download=\"Retorno_retorno_rubricas_S1010_40168635000117_ID1401686350000002019042416573806878_20190515115841.xml\">Arq. Retorno</a>",
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
            "lote": 6115,
            "caminhoArq": "C:\\teste\\rubricas_S1010_40168635000117_ID1401686350000002019042416573806880.xml",
            "nomeArquivo": "retorno_rubricas_S1010_40168635000117_ID1401686350000002019042416573806880",
            "eventoAutorizado": "Não",
            "linkXmlRetorno": "<a href=\"http://win-vs-esender:5000/esender/ResumoWeb/XMLRetorno?PIdLote=6115\" download=\"Retorno_retorno_rubricas_S1010_40168635000117_ID1401686350000002019042416573806880_20190515115841.xml\">Arq. Retorno</a>",
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
            "lote": 6116,
            "caminhoArq": "C:\\teste\\rubricas_S1010_40168635000117_ID1401686350000002019042416573806882.xml",
            "nomeArquivo": "retorno_rubricas_S1010_40168635000117_ID1401686350000002019042416573806882",
            "eventoAutorizado": "Não",
            "linkXmlRetorno": "<a href=\"http://win-vs-esender:5000/esender/ResumoWeb/XMLRetorno?PIdLote=6116\" download=\"Retorno_retorno_rubricas_S1010_40168635000117_ID1401686350000002019042416573806882_20190515115841.xml\">Arq. Retorno</a>",
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
            "lote": 6117,
            "caminhoArq": "C:\\teste\\rubricas_S1010_40168635000117_ID1401686350000002019042416573906884.xml",
            "nomeArquivo": "retorno_rubricas_S1010_40168635000117_ID1401686350000002019042416573906884",
            "eventoAutorizado": "Não",
            "linkXmlRetorno": "<a href=\"http://win-vs-esender:5000/esender/ResumoWeb/XMLRetorno?PIdLote=6117\" download=\"Retorno_retorno_rubricas_S1010_40168635000117_ID1401686350000002019042416573906884_20190515115841.xml\">Arq. Retorno</a>",
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
            "lote": 6118,
            "caminhoArq": "C:\\teste\\rubricas_S1010_40168635000117_ID1401686350000002019042416573906886.xml",
            "nomeArquivo": "retorno_rubricas_S1010_40168635000117_ID1401686350000002019042416573906886",
            "eventoAutorizado": "Não",
            "linkXmlRetorno": "<a href=\"http://win-vs-esender:5000/esender/ResumoWeb/XMLRetorno?PIdLote=6118\" download=\"Retorno_retorno_rubricas_S1010_40168635000117_ID1401686350000002019042416573906886_20190515115841.xml\">Arq. Retorno</a>",
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
            "lote": 6119,
            "caminhoArq": "C:\\teste\\rubricas_S1010_40168635000117_ID1401686350000002019042416573906888.xml",
            "nomeArquivo": "retorno_rubricas_S1010_40168635000117_ID1401686350000002019042416573906888",
            "eventoAutorizado": "Não",
            "linkXmlRetorno": "<a href=\"http://win-vs-esender:5000/esender/ResumoWeb/XMLRetorno?PIdLote=6119\" download=\"Retorno_retorno_rubricas_S1010_40168635000117_ID1401686350000002019042416573906888_20190515115841.xml\">Arq. Retorno</a>",
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
            "lote": 6120,
            "caminhoArq": "C:\\teste\\rubricas_S1010_40168635000117_ID1401686350000002019042416573906890.xml",
            "nomeArquivo": "retorno_rubricas_S1010_40168635000117_ID1401686350000002019042416573906890",
            "eventoAutorizado": "Não",
            "linkXmlRetorno": "<a href=\"http://win-vs-esender:5000/esender/ResumoWeb/XMLRetorno?PIdLote=6120\" download=\"Retorno_retorno_rubricas_S1010_40168635000117_ID1401686350000002019042416573906890_20190515115841.xml\">Arq. Retorno</a>",
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
            "lote": 6121,
            "caminhoArq": "C:\\teste\\rubricas_S1010_40168635000117_ID1401686350000002019042416573906892.xml",
            "nomeArquivo": "retorno_rubricas_S1010_40168635000117_ID1401686350000002019042416573906892",
            "eventoAutorizado": "Não",
            "linkXmlRetorno": "<a href=\"http://win-vs-esender:5000/esender/ResumoWeb/XMLRetorno?PIdLote=6121\" download=\"Retorno_retorno_rubricas_S1010_40168635000117_ID1401686350000002019042416573906892_20190515115841.xml\">Arq. Retorno</a>",
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
            "lote": 6122,
            "caminhoArq": "C:\\teste\\rubricas_S1010_40168635000117_ID1401686350000002019042416573906894.xml",
            "nomeArquivo": "retorno_rubricas_S1010_40168635000117_ID1401686350000002019042416573906894",
            "eventoAutorizado": "Não",
            "linkXmlRetorno": "<a href=\"http://win-vs-esender:5000/esender/ResumoWeb/XMLRetorno?PIdLote=6122\" download=\"Retorno_retorno_rubricas_S1010_40168635000117_ID1401686350000002019042416573906894_20190515115841.xml\">Arq. Retorno</a>",
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
            "lote": 6123,
            "caminhoArq": "C:\\teste\\rubricas_S1010_40168635000117_ID1401686350000002019042416574006896.xml",
            "nomeArquivo": "retorno_rubricas_S1010_40168635000117_ID1401686350000002019042416574006896",
            "eventoAutorizado": "Não",
            "linkXmlRetorno": "<a href=\"http://win-vs-esender:5000/esender/ResumoWeb/XMLRetorno?PIdLote=6123\" download=\"Retorno_retorno_rubricas_S1010_40168635000117_ID1401686350000002019042416574006896_20190515115841.xml\">Arq. Retorno</a>",
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
            "lote": 6124,
            "caminhoArq": "C:\\teste\\rubricas_S1010_40168635000117_ID1401686350000002019042416574006898.xml",
            "nomeArquivo": "retorno_rubricas_S1010_40168635000117_ID1401686350000002019042416574006898",
            "eventoAutorizado": "Não",
            "linkXmlRetorno": "<a href=\"http://win-vs-esender:5000/esender/ResumoWeb/XMLRetorno?PIdLote=6124\" download=\"Retorno_retorno_rubricas_S1010_40168635000117_ID1401686350000002019042416574006898_20190515115841.xml\">Arq. Retorno</a>",
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
            "lote": 6125,
            "caminhoArq": "C:\\teste\\rubricas_S1010_40168635000117_ID1401686350000002019042416574006900.xml",
            "nomeArquivo": "retorno_rubricas_S1010_40168635000117_ID1401686350000002019042416574006900",
            "eventoAutorizado": "Não",
            "linkXmlRetorno": "<a href=\"http://win-vs-esender:5000/esender/ResumoWeb/XMLRetorno?PIdLote=6125\" download=\"Retorno_retorno_rubricas_S1010_40168635000117_ID1401686350000002019042416574006900_20190515115841.xml\">Arq. Retorno</a>",
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
            "lote": 6126,
            "caminhoArq": "C:\\teste\\rubricas_S1010_40168635000117_ID1401686350000002019042416574006902.xml",
            "nomeArquivo": "retorno_rubricas_S1010_40168635000117_ID1401686350000002019042416574006902",
            "eventoAutorizado": "Não",
            "linkXmlRetorno": "<a href=\"http://win-vs-esender:5000/esender/ResumoWeb/XMLRetorno?PIdLote=6126\" download=\"Retorno_retorno_rubricas_S1010_40168635000117_ID1401686350000002019042416574006902_20190515115841.xml\">Arq. Retorno</a>",
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
            "lote": 6127,
            "caminhoArq": "C:\\teste\\rubricas_S1010_40168635000117_ID1401686350000002019042416574106904.xml",
            "nomeArquivo": "retorno_rubricas_S1010_40168635000117_ID1401686350000002019042416574106904",
            "eventoAutorizado": "Não",
            "linkXmlRetorno": "<a href=\"http://win-vs-esender:5000/esender/ResumoWeb/XMLRetorno?PIdLote=6127\" download=\"Retorno_retorno_rubricas_S1010_40168635000117_ID1401686350000002019042416574106904_20190515115841.xml\">Arq. Retorno</a>",
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
            "lote": 6128,
            "caminhoArq": "C:\\teste\\rubricas_S1010_40168635000117_ID1401686350000002019042416574106906.xml",
            "nomeArquivo": "retorno_rubricas_S1010_40168635000117_ID1401686350000002019042416574106906",
            "eventoAutorizado": "Não",
            "linkXmlRetorno": "<a href=\"http://win-vs-esender:5000/esender/ResumoWeb/XMLRetorno?PIdLote=6128\" download=\"Retorno_retorno_rubricas_S1010_40168635000117_ID1401686350000002019042416574106906_20190515115841.xml\">Arq. Retorno</a>",
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
            "lote": 6129,
            "caminhoArq": "C:\\teste\\rubricas_S1010_40168635000117_ID1401686350000002019042416574206908.xml",
            "nomeArquivo": "retorno_rubricas_S1010_40168635000117_ID1401686350000002019042416574206908",
            "eventoAutorizado": "Não",
            "linkXmlRetorno": "<a href=\"http://win-vs-esender:5000/esender/ResumoWeb/XMLRetorno?PIdLote=6129\" download=\"Retorno_retorno_rubricas_S1010_40168635000117_ID1401686350000002019042416574206908_20190515115841.xml\">Arq. Retorno</a>",
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
            "lote": 6130,
            "caminhoArq": "C:\\teste\\rubricas_S1010_40168635000117_ID1401686350000002019042416574206910.xml",
            "nomeArquivo": "retorno_rubricas_S1010_40168635000117_ID1401686350000002019042416574206910",
            "eventoAutorizado": "Não",
            "linkXmlRetorno": "<a href=\"http://win-vs-esender:5000/esender/ResumoWeb/XMLRetorno?PIdLote=6130\" download=\"Retorno_retorno_rubricas_S1010_40168635000117_ID1401686350000002019042416574206910_20190515115841.xml\">Arq. Retorno</a>",
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
            "lote": 6131,
            "caminhoArq": "C:\\teste\\rubricas_S1010_40168635000117_ID1401686350000002019042416574206912.xml",
            "nomeArquivo": "retorno_rubricas_S1010_40168635000117_ID1401686350000002019042416574206912",
            "eventoAutorizado": "Não",
            "linkXmlRetorno": "<a href=\"http://win-vs-esender:5000/esender/ResumoWeb/XMLRetorno?PIdLote=6131\" download=\"Retorno_retorno_rubricas_S1010_40168635000117_ID1401686350000002019042416574206912_20190515115841.xml\">Arq. Retorno</a>",
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
            "lote": 6132,
            "caminhoArq": "C:\\teste\\rubricas_S1010_40168635000117_ID1401686350000002019042416574306914.xml",
            "nomeArquivo": "retorno_rubricas_S1010_40168635000117_ID1401686350000002019042416574306914",
            "eventoAutorizado": "Não",
            "linkXmlRetorno": "<a href=\"http://win-vs-esender:5000/esender/ResumoWeb/XMLRetorno?PIdLote=6132\" download=\"Retorno_retorno_rubricas_S1010_40168635000117_ID1401686350000002019042416574306914_20190515115841.xml\">Arq. Retorno</a>",
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
            "lote": 6133,
            "caminhoArq": "C:\\teste\\rubricas_S1010_40168635000117_ID1401686350000002019042416574306916.xml",
            "nomeArquivo": "retorno_rubricas_S1010_40168635000117_ID1401686350000002019042416574306916",
            "eventoAutorizado": "Não",
            "linkXmlRetorno": "<a href=\"http://win-vs-esender:5000/esender/ResumoWeb/XMLRetorno?PIdLote=6133\" download=\"Retorno_retorno_rubricas_S1010_40168635000117_ID1401686350000002019042416574306916_20190515115841.xml\">Arq. Retorno</a>",
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
            "lote": 6134,
            "caminhoArq": "C:\\teste\\rubricas_S1010_40168635000117_ID1401686350000002019042416574306918.xml",
            "nomeArquivo": "retorno_rubricas_S1010_40168635000117_ID1401686350000002019042416574306918",
            "eventoAutorizado": "Não",
            "linkXmlRetorno": "<a href=\"http://win-vs-esender:5000/esender/ResumoWeb/XMLRetorno?PIdLote=6134\" download=\"Retorno_retorno_rubricas_S1010_40168635000117_ID1401686350000002019042416574306918_20190515115841.xml\">Arq. Retorno</a>",
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
            "lote": 6135,
            "caminhoArq": "C:\\teste\\rubricas_S1010_40168635000117_ID1401686350000002019042416574306920.xml",
            "nomeArquivo": "retorno_rubricas_S1010_40168635000117_ID1401686350000002019042416574306920",
            "eventoAutorizado": "Não",
            "linkXmlRetorno": "<a href=\"http://win-vs-esender:5000/esender/ResumoWeb/XMLRetorno?PIdLote=6135\" download=\"Retorno_retorno_rubricas_S1010_40168635000117_ID1401686350000002019042416574306920_20190515115841.xml\">Arq. Retorno</a>",
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
      }




    this.retorno = this.dadosOcorrencia.lotes;


    let codigoErro, mensagemErro, gravidade

    for (let i = 0; i < this.retorno.length; i++) {

      for (let j of this.retorno[i].erros) {


        codigoErro = j.codigo;
        mensagemErro = j.msgErro;
        gravidade = j.gravidade;



      }


      let url: string;
      let download: string;
      url = this.retorno[i].linkXmlRetorno.substring(this.retorno[i].linkXmlRetorno.indexOf('<a href=') + 8, this.retorno[i].linkXmlRetorno.lastIndexOf('download'));
      download = this.retorno[i].linkXmlRetorno.substring(this.retorno[i].linkXmlRetorno.indexOf('download=') + 9, this.retorno[i].linkXmlRetorno.lastIndexOf('>Arq. Retorno<'))

      this.listaLotes.push({

        'cnpj': this.retorno[i].cnpj,
        'lote': this.retorno[i].lote,
        'caminhoArq': this.retorno[i].caminhoArq,
        'nomeArquivo': this.retorno[i].nomeArquivo,
        'eventoAutorizado': this.retorno[i].eventoAutorizado,
        'linkXmlRetorno': this.retorno[i].linkXmlRetorno,
        'href': url.toString().replace('"', '').replace('"', ''),
        'download': download.toString().replace('"', '').replace('"', ''),
        'retornoDisponivel': this.retorno[i].retornoDisponivel,
        'codigoErro': codigoErro,
        'mensagemErro': mensagemErro,
        'gravidade': gravidade

      });

    }
  }





  redirecionarUrl(url: string) {

    //console.log(url)
    window.location.href = url;
  }

  sanitize(url: string) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }

  ngOnInit() {


  }



}
