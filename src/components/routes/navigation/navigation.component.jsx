import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom"
import { ReactComponent as CrwnLogo } from "../../../assets/crown.svg";
import { CartContext } from "../../../contexts/cart.context";
import { UserContext } from "../../../contexts/user.context";
import { signOutUser } from "../../../utils/firebase/firebase.utils";
import CartDropdown from "../../cart-dropdown/cart-dropdown.component";
import CartIcon from "../../cart-icon/cart-icon.component";
import { NavigationContainer, LogoContainer, NavLink, NavLinks } from './navigation.styles.jsx'



const Navigation = () =>{

  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext)

  return(
      <Fragment>
        <NavigationContainer>
            <LogoContainer to="/">
                <CrwnLogo/>
            </LogoContainer>
            <NavLinks>
                <NavLink to="/shop">Shop</NavLink>
              {currentUser ?(<NavLink as='span' onClick={signOutUser}>Sign Out</NavLink>) :
              (<NavLink to="/auth">Sign-in</NavLink>)
              }
              <CartIcon/>                
            </NavLinks>
            {isCartOpen && <CartDropdown/>}
        </NavigationContainer>
        <Outlet/>
      </Fragment>
    )
  };
export default Navigation