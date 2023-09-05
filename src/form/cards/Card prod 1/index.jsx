import exa from './gato.webp'
import styled from './card.module.css';
export default function Cartaoprod1() {
    return(
        <div className={styled.artao}>
            <img src={exa} className={styled.fotogato} alt='coisa nossa'></img>
            <h1>Gato choramingando</h1>
            <b>Gato choramingando pra fazer varios videos engraçados para a internet</b>
            <h1 className={styled.prec} >R$: 100.00</h1>
        </div>
    );
}