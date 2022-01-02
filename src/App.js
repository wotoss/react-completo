import React, { Component } from "react";
import './estilo.css';



class App extends Component{
    //crio o construtor
    constructor(props){
       super(props);
       this.state = {};
       this.textoFrase = '';
       this.quebraBiscoito = this.quebraBiscoito.bind(this);
       this.frases = ['Siga os bons e aprenda com eles.', 'O bom-senso vale mais do que muito',
                      'O riso é a menor distância entre duas pessoas', 'Deixe de lado as preocupações e seja feliz',
                      'Realize o óbvio, pense no improvável e conquiste o impossível',
                     'Acredite em milagres, mas não dependa deles', 'A maior barreira para o sucesso é o medo do fracasso']
    }

    quebraBiscoito(){
      //acessando as states
      let state = this.state;
      //1- eu pego o tamanho da quantidade de frase que eu tenho (this.frases.length).
      //2- depois eu multiplico o tamanho vezes o numrero radomico ou aliatorio (Math.random())
      //3- logo eu passo ele como numero inteiro (Math.floor).
      //4- por ultimo eu armazeno ele dentro da (let = numeroAleatorio)
      let numeroAleatorio = Math.floor(Math.random() * this.frases.length);
      //exemplo => digamos que o numero aliatorio seja (0) então ele pega a primeira posição que esta a frase (this.frases[numeroAleatorio];)
      //depois passa o estado que vai enviar a fraze para o textoFrase criado ( state.textoFrase )
      state.textoFrase = '" ' + this.frases[numeroAleatorio] + ' "';
      /*aqui nos atualizamos o state*/
      this.setState(state);
    }

    render(){
        return(
            <div className="container">
               <img src={require('./assets/biscoito.png')} className="img" />
               <Botao nome="Abrir biscoito" acaoBtn={this.quebraBiscoito}/>
               <h3 className="textoFrase">{this.state.textoFrase}</h3>
            </div>
        );
    }
}
class Botao extends Component{
  render(){
    return(
      <div>
         <button onClick={this.props.acaoBtn}>{this.props.nome}</button>
      </div>
    );
  }
}


export default App;