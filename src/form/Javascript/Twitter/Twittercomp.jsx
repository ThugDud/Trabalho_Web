import face from './25347.png'
import styled from './Twitter.module.css'

export default function Twitter() {
    return(
        <button className={styled.face}>
            <img src={face} alt='abc' className={styled.img}></img>
        </button>
    );
}