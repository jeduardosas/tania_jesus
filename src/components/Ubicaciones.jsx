import data from "../../data"


const Ubicaciones = ({cardCeremoniaVisible,cardRecepcionVisible}) => {
  
  return (
    <>
      <div className="ubicaciones-title centrar">
          <img src="/img/icons/ubicacion.svg" alt="" />
          <h3>Ubicación</h3>
      </div>
      <div className="ubicaciones-cards">
        <div id='cardCeremoniaSection' className={`ubicaciones-card_card sombra ${cardCeremoniaVisible && 'animate__animated animate__fadeInLeft'}`}>
          <div>
            <h3 className='card-title'>Ceremonia</h3>
          </div>

          <div className='card_icon'>
            <img src='/img/icons/RINGS.svg' alt="icon-church" />
          </div>

          <div>
            <p className='card-hora'>{`${data.religiosa_hora} Horas`}</p>
          </div>

          <div className='card-section'>
            <p className='card-nombre'>{data.religiosa_lugar}</p>
            <p className='card-contenido'>{data.religiosa_direccion}</p>
            <p className='card-contenido'>{data.religiosa_direccion_col}</p>
            <p className='card-from'>{data.religiosa_direccion_cd}</p>
          </div>
          <div className='card-button'>
            <button>
              <a href={`${data.religiosa_ubicacion}`} target='_blank'>ver ubicación</a>
            </button>
          </div>
        </div>

        <div id='cardRecepcionSection' className={`ubicaciones-card_card sombra ${cardRecepcionVisible && 'animate__animated animate__fadeInRight'}`}>
          <div >
            <h3 className='card-title'>Recepción</h3>
          </div>

          <div className='card_icon'>
            <img src="/img/icons/RINGS.svg" alt="" />
          </div>

          <div>
            
            <p className='card-hora'>{data.recepcion_hora}</p>
          </div>

          <div className='card-section'>
            <p className='card-nombre'>{data.recepcion_lugar}</p>
            <p className='card-contenido'>{data.recepcion_direccion}</p>
            <p className='card-contenido'>{data.recepcion_direccion_col}</p>
            <p className='card-from'>{data.recepcion_direccion_cd}</p>
          </div>
          <div className='card-button'>
            <button>
              <a href={`${data.recepcion_ubicacion}`} target='_blank'>ver ubicación</a>
            </button>
          </div>
        </div>
        
      </div>
    </>
  )
}

export default Ubicaciones