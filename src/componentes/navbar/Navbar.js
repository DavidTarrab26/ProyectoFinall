import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import foto from "../../assets/img/logEcomerce.png"
import "./Navbar.css"


const Navbar = () => {
    return ( 
   <>
   {/* navbar */} 
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <img className='logoNav' src= {foto} alt= "logo"/>
        <div className="navbar-collapse">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li>
            <Link to="/"><button className='botonMenu btn'>HOME</button></Link>
            </li>
            <li >
            <Link  to="/pantalones"><button className='botonMenu btn' >PANTALONES</button></Link> 
            </li>
            <li >
              <Link to="/bermudas"><button className='botonMenu btn'> BERMUDAS </button></Link>
            </li>
          </ul>
            
          <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Busca tu producto" aria-label="Search"/>
            <button className="btn botonBuscar btn-dark" type="submit">BUSCAR</button>
          </form>
          
        </div>
      </div>
    </nav>
    {/* login */}
        <div className='login d-flex'>
            <Link to="/Registrarse"><button className='btn btn-regis'> Registrate </button></Link>
            <Link to="Login"><button className='btn btn-login'> Login </button></Link>
            <Link to=""><i className="bi bi-cart4"></i> </Link>
        </div>
          
</>
     );
}
 
export default Navbar;