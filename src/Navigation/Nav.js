import "./Nav.css"
import {FiHeart} from "react-icons/fi"
import {AiOutlineShoppingCart,AiOutlineUserAdd} from "react-icons/ai"

function Navigation({handleInputChange, query }){
    return(
        <nav>
            <div classname="navcontainer">
                <input type="text" classname="searchinput" 
                onChange={handleInputChange}
                value={query}
                placeholder="Enter Product"></input>
            </div>
            <div className="profile">
                <a href="#" >
                    <FiHeart className="nav-icons "/>
                </a>
                <a href="#">
                    <AiOutlineShoppingCart className="nav-icons" />
                </a>
                <a href="#">
                    <AiOutlineUserAdd className="nav-icons" />
                </a>
            </div>
        </nav>
    )
}
export default Navigation;