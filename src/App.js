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

  criaComboBox = () => {
    const opcoes = ["Fulano", "Cicrano"]
    const comboBoxOpcoes = opcoes.map(opcao => <option>{opcao}</option>)
 
    return (
      <select>
        {comboBoxOpcoes}
      </select>
    )

  }

  componentDidMount(){
    console.log("Executou o componentDidMount")
  }

  render(){
    console.log("Executou o render")
    const MeuComboBox = () => this.criaComboBox()

    return (
      [
        <>
       <input type="text" value={this.state.nome} onChange={this.modificarNome}></input>
       <h1>Hello {this.props.nome}</h1>
       {this.criaComboBox()}
   
       //Criar tags com meus components
       <MeuComboBox />
        </>
      ]
    
    )
  }
}

export default App;
