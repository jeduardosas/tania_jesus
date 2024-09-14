import data from "../../data"

const DatosNombresPapas = () => {
  return (
    <div className='datos-nombres-papas'>
      <div className='datos-nombres-papas_title'>
        <p>Con la bendición de Dios y nuestros padres</p>
      </div>
      <div className='datos-nombres-papas_cards'>
        <div className='datos-nombres-papas_card'>
          <p>{data.nombre_mama_novia}</p>
          <p>{data.nombre_papa_novia}</p>
        </div> 
        <div className='datos-nombres-papas_card'>
          <p>{data.nombre_mama_novio}</p>
          <p>{data.nombre_papa_novio}</p>
        </div>
      </div>
      <div className="datos_nombres-padrinos">
        <p className="datos_nombres-padrinos_tittle">Padrinos de Velación</p>
        <p className="datos_nombres-padrinos-name">{data.nombre_madrina}</p>
        <p className="datos_nombres-padrinos-name">{data.nombre_padrino}</p>
      </div>
      
    </div> 
  )
}

export default DatosNombresPapas