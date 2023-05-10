import { Link } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { add_nickname, savePage } from '../redux/actions.js';
import SearchBar from './SearchBar.jsx';
import '../styles/Nav.css';

function Nav({onSearch,deleteSearch}) {

      const dispatch = useDispatch();

      const user = useSelector((state)=> state.nickname);
     
      //boton para desloguearse
      function handleSubmit(event)
        {
          event.preventDefault();
          dispatch(add_nickname(""));
        }

      function responsiveNav() 
      {
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