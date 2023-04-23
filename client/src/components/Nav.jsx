import { Link } from 'react-router-dom';
import '../styles/Nav.css';

function Nav({onSearch,logOut}) {

    
    
     
        function handleSubmit(event)
        {
                event.preventDefault();
                logOut(false);

        }
        function responsiveNav() {
          var x = document.getElementById("myTopnav");
          if (x.className === "topnav") {
            x.className += " responsive";
          } else {
            x.className = "topnav";
          }
        }

       

       

        


        const styleLogo = {
          width: '45px',
          heigth: '45px'
        }
        const styleExpandNavLogo ={
          width: '35px',
          heigth: '35px'
        }
       

   return (

   /* <nav >
    <ul>
      <li>
        <Link   to="/home">
                <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/c50a4a55883023.5996f8afa3f5c.gif" style={styleLogo}/> 
              </Link>
      </li>
      <li>
        <Link to="/About">
                <a >About</a>
              </Link>
       
      </li>
      <li>
         <Link to="/favorites">
                <a  >Favs</a>
              </Link>
      </li>
      <li>
        <a href="#">Services</a>
      </li>
      <li>
        <SearchBar onSearch={onSearch} />
            <form   role="search" onSubmit={handleSubmit}>
                          <button  type="submit">Logout</button>
                      </form>  
      </li>
        
    </ul>
  </nav> */

  <div className="topnav " id="myTopnav" >
   
    <Link   to="/home">Home</Link>

    <Link to="/favorites">Favs</Link>

    <Link to="/About">About</Link>
   
    

    

    <a onClick={handleSubmit}>Logout</a>
    
    <a className="icon" onClick={responsiveNav}>
    <i className="fa fa-bars"></i>
    </a>
  </div>
  

   );
}

export default Nav;


/* 

<SearchBar onSearch={onSearch} />
*/