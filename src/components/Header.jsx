import data from "../../data.js"

const Header = () => { 

  return (  

    
    <>
      
    

        <div className="frase">
          <p className="frase-text">{data.frase}</p>
          <p className="frase_text-nos">¡NOS CASAMOS!</p>
        </div>
      
      {/* <div  className='header-img centrar animate__animated animate__fadeInUp'>
      </div> */}
    </>
  )
}

export default Header