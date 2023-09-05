import face from './facebook-redesenha-like-03.png'
import styled from './facebook.module.css'

export default function FacebooK() {
    return(
        <button className={styled.face}>
            <img src={face} alt='abc' className={styled.img}></img>
        </button>
    );
}