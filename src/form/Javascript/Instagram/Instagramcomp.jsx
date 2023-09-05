import face from './8489305175940521.webp'
import styled from './Instagram.module.css'

export default function Instagram() {
    return(
        <button className={styled.face}>
            <img src={face} alt='abc' className={styled.img}></img>
        </button>
    );
}