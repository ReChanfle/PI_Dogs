import { Link } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { savePage } from '../redux/actions.js';
import SearchBar from './SearchBar.jsx';
import '../styles/Nav.css';

function Nav({onSearch,logOut,deleteSearch}) {

      const dispatch = useDispatch();

      const user = useSelector((state)=> state.nickname);
     
      //boton para desloguearse
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

      function handleDelete(event)
        {
          //seteo pagination a 1 para volver al menu principal y no romper el limit de paginas
            dispatch(savePage(1));
            deleteSearch(false);

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

  

  <div className="topnav " id="myTopnav" >
   
    <Link   to="/home">Home</Link>

    <Link to="/createdogs">New Dog</Link>

    <Link to="/About">About</Link>
   
    
    <SearchBar onSearch={onSearch} />
    <a onClick={handleDelete}>DELETE SEARCH</a>
    

    <a onClick={handleSubmit}>{user}</a>
    
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