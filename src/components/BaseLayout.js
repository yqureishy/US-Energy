import Menu from "./Menu"


const BaseLayout = (props) => {
    return ( 
    <div id="BaseLayoutContainer">
        <div id="header">
            <Menu />
        </div>
            
        <div id="content">

            {props.children}

        </div>


        <footer id="footer" class="footer">
            <p>
            <strong style={{color:"white"}}>US ENERGY</strong> by <a href="https://github.com/yqureishy">Younus Qureishy</a><br></br> All chart data is obtained from the <a href="https://www.eia.gov/"> U.S. Energy Information Administration</a>, a statistical and analytical agency within the U.S. Department of Energy.
            </p>
        </footer>
        
    </div>
     );
}
 
export default BaseLayout;