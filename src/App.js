import logo from './logo.svg';
import './App.css';
import React from 'react';


class App extends React.Component{

  state = {
    nome : ''
  }

  modificarNome = (event) =>{
    this.setState({
      nome:event.target.value
    })

  }

  render(){
    return (
      <>
        <input type="text" value={this.state.nome} onChange={this.modificarNome}></input>
        <h1>Hello {this.state.nome}</h1>
      </>
    )
  }
}

export default App;
