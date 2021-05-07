import {NavLink} from 'react-router-dom'

const Menu = (props) => {
    return ( 

<nav class="navbar" role="navigation" aria-label="main navigation">
  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">
      <a class="navbar-item">
        <NavLink to = "/"> Home </NavLink> 
      </a>


      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">
          Non-Renewables
        </a>

        <div class="navbar-dropdown">
          <a class="navbar-item">
            <NavLink to = "/Non-Renewables/Imports_ExportsTotal"> Crude/Petroleum - Imports & Exports </NavLink>
          </a>
          <a class="navbar-item">
            <NavLink to = "/Non-Renewables/Production_ReservesTotal"> Crude - Production & Reserves </NavLink>
          </a>
          
        </div>
        
      </div>

       <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">
          Renewables
        </a>

        <div class="navbar-dropdown">
          <a class="navbar-item">
            <NavLink to = "/Renewables/Geothermal"> Geothermal </NavLink>
          </a>
          <a class="navbar-item">
            <NavLink to = "/Renewables/Hydroelectric"> Hydroelectric </NavLink>
          </a>
          <a class="navbar-item">
            <NavLink to = "/Renewables/Solar"> Solar </NavLink>
          </a>
          <a class="navbar-item">
            <NavLink to = "/Renewables/Wind"> Wind </NavLink>
          </a>
         
      </div>
    </div>
</div>
  </div>
</nav>

        
     );
}
 
export default Menu;

<NavLink to = "/Renewables"> Non-Renewable </NavLink>
