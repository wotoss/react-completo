import React, { Component } from "react";

class App extends Component{
    constructor(props){
       super.state = {
           nome: 'Matheus',
           contador: 0
       };
      this.aumentar = this.aumentar.bind(this);
      this.diminuir = this.diminuir.bind(this);
    }

    aumentar(){
        let state = this.state;
        state.contador += 1;
        state.nome = 'José';
        console.setState(state);
    }
    diminuir(){
        let state = this.state;
        if (state.contador === 0){
            alert('Opá chegou a zero');
            return;
        }
        state.contador -= 1;
        this.setState(state);
    }

    render(){
        return(
           <div>
             <h1>Contador</h1>
             {this.state.nome}
             <button onClick={this.diminuir}>-</button>
             <h3>{this.state.contador}</h3>
             <button onClick={this.aumentar}>+</button>
           </div>
        );
    }
}
export default App;