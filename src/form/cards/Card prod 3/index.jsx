import exa from './mano.png'
import styled from './card.module.css';
export default function Cartaoprod3() {
    return(
        <div className={styled.artao}>
            <img src={exa} className={styled.fotogato} alt='coisa nossa'></img>
            <h1>O que é isso ADM?</h1>
            <b>Use esse artificio compravel como forma de argumento para os momentos mais dificeis contra seu <i>adiministrador!</i></b>
            <h1 className={styled.prec} >R$: 199.99</h1>
        </div>
    );
}