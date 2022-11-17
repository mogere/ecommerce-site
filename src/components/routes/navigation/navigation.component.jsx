import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom"
import { ReactComponent as CrwnLogo } from "../../../assets/crown.svg";
import { CartContext } from "../../../contexts/cart.context";
import { UserContext } from "../../../contexts/user.context";
import { signOutUser } from "../../../utils/firebase/firebase.utils";
import CartDropdown from "../../cart-dropdown/cart-dropdown.component";
import CartIcon from "../../cart-icon/cart-icon.component";
import './navigation.styles.scss'

const Navigation = () =>{

  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext)

  return(
      <Fragment>
        <div className="navigation">
            <Link className="logo-container" to="/">
                <CrwnLogo/>
            </Link>
            <div className="nav-links-container">
                <Link className="nav-link" to="/shop">Shop</Link>
              {currentUser ?(<span className="nav-link" onClick={signOutUser}>Sign Out</span>) :
              (<Link className="nav-link" to="/auth">Sign-in</Link>)
              }
              <CartIcon/>                
            </div>
            {isCartOpen && <CartDropdown/>}
        </div>
        <Outlet/>
      </Fragment>
    )
  };
export default Navigation