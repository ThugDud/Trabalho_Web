import exa from './gato.png'
import styled from './card.module.css';
export default function Cartaoprod2() {
    return(
        <div className={styled.artao}>
            <img src={exa} className={styled.fotogato} alt='coisa nossa'></img>
            <h1>Ismilinguido choramingando 2</h1>
            <b>Se um gato não é o suficiente, pode contar com seu personal <i>Ismilinguido choramingando!</i> </b>
            <h1 className={styled.prec} >R$: 49.99</h1>
        </div>
    );
}