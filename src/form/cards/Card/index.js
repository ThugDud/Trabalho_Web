import exa from './ljZzGm4v_400x400.jpg'
import styled from './card.module.css';
export default function Cartao() {
    return(
        <div className={styled.artao}>
            <img src={exa} className={styled.elon} alt='coisa nossa'></img>
            <h1>Ednaldo Pereira</h1>
            <b className={styled.text} >I really hate your site, it filled me with rage. I can't believe you even think it. I'm so mad and infuriated and filled with vengeance because of it, and now my wife left me because of the rage i cannot let go. Your internet opinion was so important to me i spent all day drinking because of it and now i lost my kids. I wish i never read it, and you are the worst person ever in the history of the world. Why did you do this to me, you sick freak.</b>
        </div>
    );
}