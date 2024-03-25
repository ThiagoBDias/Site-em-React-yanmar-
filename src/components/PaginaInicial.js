
import  logo from "./Img/capa.jpg"

function PaginaInicial(){
  const divStyle = {
    backgroundImage: `url(${logo})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    textAlign: 'center',
    minHeight: '100vh', // Define a altura da div para ocupar toda a altura da página
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  };
  

  return ( 
    <div style={divStyle}>
    <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.7)', padding: '20px', borderRadius: '5px', textAlign: 'center' }}>
      <h2>teste</h2>
      <button>Conheça nossos modelos </button>
    </div>
  </div>
  )

}

export default PaginaInicial