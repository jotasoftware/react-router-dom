import { Component } from 'react';

export class ApiHome extends Component {
  state = {
    dados: [],
    carregando: true,
    erro: null
  };

  componentDidMount() {
      fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(data => {
            console.log(data)
            this.setState({
                dados: data,
                carregando: false
              });
        })
        .catch(error => {
            this.setState({
                erro: error,
                carregando: false
            });
        });
  }

  render() {
    return (
      <div>
        {this.state.carregando ? <p>Carregando...</p> : <p>Dados carregados!</p>}
        <ul>
          {this.state.dados.map(item => {
            if (item.title === 'teste') {
              return <li key={item.id}>{item.title}</li>;
            } else {
              return null; // Retorna null para os itens que não atendem à condição
            }
          })}
        </ul>
      </div>
    );
  }
}



