import img1 from './19a23728ae45ef6f3024e4b04de20369.jpg'
import img2 from './WIN_20230524_11_58_31_Pro.jpg'
import img3 from './chopper-dance.gif'
import img4 from './images-22.jpeg'
import styled from './nome.module.css'

function Textname(){
    return(
        <div className={styled.div} >
            <img src={img1} alt='img1' className={styled.imgs}/>
            <img src={img2} alt='img2' className={styled.imgs}/>
            <img src={img3} alt='img3' className={styled.imgs}/>
            <img src={img4} alt='img4' className={styled.imgs}/>
        </div>
    );
}

export default Textname