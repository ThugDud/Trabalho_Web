import img from './ddn2h78-4ba36dd8-4f7f-4998-80e7-e131e62c0e64.gif'
import Styled from './Direct.module.css'

export default function Direct() {
    return(
        <div className={Styled.dov} >
            <div className={Styled.div} >
                <h2>Todos os direitos reservados</h2>
                <h2>Email de contato: abcdefgh@hotmail.com </h2>
                <h2>Whatsapp: (01) 12345-67890</h2>
            </div>
            <div>
                <img className={Styled.asd} src={img}></img>
            </div>
        </div>
    );
}