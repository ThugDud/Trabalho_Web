import asf from './ddn2h78-4ba36dd8-4f7f-4998-80e7-e131e62c0e64.gif'
import styled from './header.module.css'

export default function Headeer() {
    return(
        <div>
            <div className={styled.abcd}>
                <div className={styled.abc}>
                    <h2>Questão 9</h2>
                    <img src={asf} alt='picachu' className={styled.pica}/>
                    <h1>OLXXX</h1>
                </div>
                <div className={styled.asd} >
                    <center><h1>Site para compra de <br/> fotos gratuitas do Google</h1></center> 
                </div>
            </div>
            <div className={styled.sss}>
                <h2>SEJA BEM-VINDO, TEMOS OTIMAS IMAGENS PEGADAS DIRETAMENTE DO GOOGLE</h2>
            </div>
        </div>
    );
}