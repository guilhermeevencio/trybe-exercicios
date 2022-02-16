import { Component } from "react";

const conteudos = [
    {
      conteudo: 'High Order Functions',
      bloco: 8,
      status: 'Aprendido'
    },
    {
      conteudo: 'Composicao de Componentes',
      bloco: 11,
      status: 'Aprendendo',
    },
    {
      conteudo: 'Composicao de Estados',
      bloco: 12,
      status: 'Aprenderei'
    },
    {
      conteudo: 'Redux',
      bloco: 16,
      status: 'Aprenderei'
    },
  ];

  const InfoToRender = conteudos.map(({ conteudo, bloco, status }) => 
  <section className="card">
  <p>{`O conteúdo é: ${conteudo}`}</p>
  <p>{`Status: ${status}`}</p>
  <p>{`Bloco: ${bloco}`}</p>
  </section>)

export default class Content extends Component {
  render() {
      return (
        <div className= 'cards'>
        {InfoToRender}
        </div>
      )
  }
}