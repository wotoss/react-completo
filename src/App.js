import React, { Component } from "react";



class App extends Component{

    constructor(props){
        super(props);
        this.state = {
            status: false
        };
        this.sair = this.sair.bind(this);
        this.entrar = this.entrar.bind(this);
    }
    entrar(){
        this.setState({status: true});
    }
    sair(){
       this.setState({status: false});
    }

    render(){
        return(
           <div>
              {this.state.status ?
                   <div>
                      <h2>Bem-vindo ao sistema!</h2>
                      <button onClick={this.sair}>Sair</button>
                   </div> :             
                   <div>
                      <h2>Olá visitante, faça o login!</h2>
                      <button onClick={this.entrar}>Entrar no sistema</button>
                   </div>
             }
           </div>
        );
    }
}
export default App;