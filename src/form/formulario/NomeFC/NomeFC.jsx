import styled from './nomefc.module.css';

export default function Nomefc() {
    return(
        <div className={styled.divfc} >
            <div className={styled.diviv}>
                <h1 className={styled.feed} >FALE CONOSCO!</h1> <br/>
                <input type="text" placeholder="Nome Completo" className={styled.text}/> <br />
                <br />
                <input type="email" placeholder="Email" className={styled.text}/> <br />
                <br />
                <input type='number' placeholder='Telefone' className={styled.text}/> <br/>
                <br/>
                <textarea placeholder='Mensagem' className={styled.textarea} /> <br />
                <br />
                <input type='submit' className={styled.submit} />
            </div>
        </div>
    );
}