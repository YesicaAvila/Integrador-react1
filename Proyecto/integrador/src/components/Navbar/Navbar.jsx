import React, { useState } from 'react';
import { 
    BackgroundDiv,
    CartStyled,
    HomeContainerStyled, 
    LinkContainerStyled, 
    LinksContainerStyled, 
    MenuContainerStyled, 
    NavbarContainerStyled, 
    SpanStyled, 
    UserContainerStyled, 
    UserNavStyled 
} 
from './NavbarStyles';
import { FcHome } from "react-icons/fc";
import { motion } from "framer-motion";
import CartIcon from '../CartIcon/CartIcon';
import { Link, useNavigate } from 'react-router-dom';
import ModalUser from '../ModalUser/ModalUser';
import ModalCart from '../ModalCart/ModalCart';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenuHidden } from '../redux/user/userSlice';
import BurguerButton from '../BurguerButton/BurguerButton';


function Navbar() {
    const currentUser = useSelector(state => state.user.currentUser);
    const dispatch = useDispatch();
    const navigate = useNavigate(); 

    const [clicked, setClicked] = useState(false)
    const handleClick = () => {
        setClicked(!clicked)
    }

    return (
    <NavbarContainerStyled>
        <ModalCart />
        <ModalUser />
        <div>
            <Link to='/'>
                <img 
            src='https://res.cloudinary.com/dqhrvfasu/image/upload/c_scale,w_65/v1687555476/logo/Free_Sample_By_Wix_1_f4u8nm.jpg' 
            alt='Logo'
            />
            </Link>
        </div>
        <LinksContainerStyled>
            <HomeContainerStyled>
                <motion.div whileTap={{scale:0.97}} >
                    <Link to='/'>
                        <LinkContainerStyled home>
                            <FcHome />
                        </LinkContainerStyled>
                        Home
                    </Link>
                </motion.div>
            </HomeContainerStyled>
            <CartStyled>
                <CartIcon  />
            </CartStyled>
            <UserNavStyled>
                <UserContainerStyled onClick={() => 
                    currentUser
                    ? dispatch(toggleMenuHidden())
                    : navigate("/login")
                }>
                    <SpanStyled>
                        {
                            currentUser ? `${currentUser.name}` : 'Iniciá Sesion'
                        }
                    </SpanStyled>
                </UserContainerStyled>
            </UserNavStyled>
            <motion.div whileTap={{scale:0.95}}>
                <MenuContainerStyled>
                    <div className={`links ${clicked ? 'active' : ''}`}>
                        <Link to='/'>Home</Link>
                        <Link to='/login'>Inicie Sesion</Link>
                        <a href="#categoria">Categorias</a>
                        <a href="#about-us">Acerca de</a>
                    </div>
                    <BurguerButton 
                        clicked={clicked} 
                        handleClick={handleClick} 
                    />
                        <BackgroundDiv 
                        className={`initial ${clicked ? 'active' : ''}`}
                    >
                    </BackgroundDiv>
                </MenuContainerStyled>
            </motion.div>
        </LinksContainerStyled>
    </NavbarContainerStyled>
    );
}

export default Navbar;