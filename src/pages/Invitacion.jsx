
import { useState } from "react";
import { useLocation, Navigate} from "react-router-dom";
import ReactAudioPlayer from "react-audio-player";
import Modal from "react-modal";
import data from "../../data";
import CountDown from "/@/components/ContDown";
import Header from "/@/components/Header";
import Datos from "/@/components/Datos";
import Ubicaciones from "/@/components/ubicaciones";
import Confirmacion from '/@/components/Confirmacion';
import Reservacion from '/@/components/Reservacion';
import TimeLine from "../components/TimeLine";
import Slider from "../components/Slider";
import Regalos from "../components/Regalos";
import Footer from "../components/Footer";
import useScrollVisible from "/@/hooks/useScrollVisible";
import 'animate.css'
import '/@/styles/invitacion.css'
import '/@/styles/modal.css'

 //estilos para el modal 
const customStyles = {
  content:{
    width:'80%',
    top:'50%',
    left:'50%',
    right:'auto',
    bottom:'auto',
    marginRight:'-50%',
    transform:'translate(-50%, -50%)',
    textAlign:'center',
    border:'none',
    boxShadow:'10px 10px 10px #bdbdbd',
    backgroundColor:'#5e6c5b',

  },
};
const Invitacion = () => {
  const song = '/music/song.mp3'

  //estado para manejar la reproduccion del audio
  const [play,setPlay] = useState(false);
  const [modalIsOpen, setModalIsopen] = useState(true);//estado para manejar el modal
  
  //VALIDACION DE LOS PARAMS DE LA URL
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const pases = params.get("pases") || "";

  if (pases === "") {
    return <Navigate to="/notfound" />;
  }
  if(pases<0 || pases >10){
    return <Navigate to="/notfound" />
  }
  //VARIABLES PARA MANEJAR LAS ANIMACIONES
  const confirmacionVisible = useScrollVisible('confirmacionSection')
  const datosVisible = useScrollVisible('datosSection')
  const datosFechaVisible = useScrollVisible('datosFechaSection')
  const cardCeremoniaVisible = useScrollVisible('cardCeremoniaSection')
  const cardRecepcionVisible = useScrollVisible('cardRecepcionSection')

  const handlePlay = ()=>{
    setPlay(true);
    setModalIsopen(false)
  }

  return (
    <div className="">

      <div className="img-fondo centrar">
        <img loading="lazy" className="img-fondo-1" src={`/img/${data.img_fondo1}`} alt="iimg-fondo" />
        <img loading="lazy" className="img-fondo-2" src={`/img/${data.img_fondo2}`} alt="iimg-fondo" />
      </div>

      {/* REPRODUCTOR */}

      

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={()=>setModalIsopen(false)}
        style={customStyles}
        contentLabel="Confirmacion de Reproducción"
        ariaHideApp={false} //necesario para evitar adverterncias en pruebas yu desarrollo
        shouldCloseOnOverlayClick={false}
      >
        
        {/* <h5 className="modal-tittle-1">{data.event_type === 'boda' ? 'Nuestra Boda' : 'MIS XV AÑOS'}</h5> */}
        <h2 className="modal-tittle-2">
          <p>{data.nombre_novia}</p>
          <p className="modal-tittle2-y">&</p>
          <p>{data.nombre_novio}</p>
        </h2>
        <p className="modal-content">Para una mejor experiencia, por favor acepta la reproducción automatica</p>   
        <button className="modal-button" onClick={handlePlay}>Aceptar</button>
      </Modal>

      {
        play && (
          <>
            <div className="reproductor centrar">
              <ReactAudioPlayer 
                className="reproductor" 
                src={song} 
                autoPlay={true}
                preload="auto"
                controls/>
            </div>
            <div className="centrar">
              <Header/>
            </div>
            

            <div id="datosSection" className="datos">
              <Datos datosVisible={datosVisible} datosFechaVisible={datosFechaVisible} />
            </div>

            <div className="centrar">
            <CountDown />
            </div>

            <div className="ubicaciones centrar">
              <Ubicaciones 
                cardCeremoniaVisible={cardCeremoniaVisible} 
                cardRecepcionVisible={cardRecepcionVisible}/>
            </div>

            <div className="centrar">
            <TimeLine />
            </div>

            <div className="centrar">
            <Regalos />
            </div>

            <div className="slider">
              <Slider />
            </div>

            <div className="lugares centrar">
              <Reservacion pases={pases} />
            </div>

            <div  id='confirmacionSection' className={`confirmar ${confirmacionVisible && 'animate__animated animate__fadeInLeft'}`}>
              <Confirmacion/>
            </div>

            <div>
              <Footer />
            </div>
          </>
        )
      }
      
    </div>
    
    
  );
};

export default Invitacion;
