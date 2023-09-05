import './App.css';
import Headeer from './form/Header/header';
import Lista from './form/Javadeverdade/javadevdd';
import FacebooK from './form/Javascript/Facebook/Facebookcomp';
import Instagram from './form/Javascript/Instagram/Instagramcomp';
import Twitter from './form/Javascript/Twitter/Twittercomp';
import Botaoney from './form/button';
import Cartao from './form/cards/Card';
import Cartaoprod1 from './form/cards/Card prod 1';
import Cartaoprod2 from './form/cards/Card prod 2';
import Cartaoprod3 from './form/cards/Card prod 3';
import Direct from './form/formulario/Direitos/Direct';
import Nomefc from './form/formulario/NomeFC/NomeFC';
import Textname from './form/nome';

function App() {
  return (
    <>
      <div>
        <Headeer/>
      </div>
      <div className='sebartiao'>
        <h2>Questão 6</h2>
        <FacebooK/>
        <Twitter/>
        <Instagram/>
      </div>
      <div className='sebartiao'>
        <h2>Questão 1 e 2</h2>
        <Cartaoprod1/>
        <Cartaoprod2/>
        <Cartaoprod3/>
      </div>
      <div>
        <h2>Questão 3</h2>
        <Botaoney/>
        <h2>Questão 8</h2>
        <Textname/>
        <h2>Questão 4</h2>
        <Lista/>
      </div>
      <div className='sebartiao'>
        <h2>Questão 7</h2>
        <Cartao/>
      </div>
      <div>
        <h2>Questão 5</h2>
        <Nomefc/>
        <h2>Questão 10</h2>
        <Direct/>
      </div>
    </>
  );
}

export default App;
