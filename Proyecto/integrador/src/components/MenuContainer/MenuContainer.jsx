import React from 'react'
import { useDispatch, useSelector } from 'react-redux' 
import { CloseButtonMenu, CloseMenu, MenuCardContainer, MenuOverlayStyled, TitleMenuStyled } from './MenuContainerStyles';
import { AnimatePresence } from 'framer-motion';
import { AiFillCloseCircle } from 'react-icons/ai';
import { toggleHiddenMenu } from '../redux/menu/menuSlice'; 


const MenuContainer = () => {
    const hiddenMenu = useSelector(state => state.menu)

    const dispatch = useDispatch();

  return (
    <>
        {!hiddenMenu && (
            <MenuOverlayStyled
                onClick={() => dispatch(toggleHiddenMenu())}
                isHidden={hiddenMenu}
            />
        )}
    <AnimatePresence>
        {!hiddenMenu && (
            <MenuCardContainer
            initial={{ translateX: 600 }}
            animate={{ translateX: 0 }}
            exit={{ trnaslateX: 600 }}
            transition={{ duration: 0.5 }}
            key='cart-menu'
        >
            <CloseButtonMenu>
                <CloseMenu
                    whileTap={{ scale: 0.95 }}
                    onClick={() => dispatch(toggleHiddenMenu())}
                >
                    <AiFillCloseCircle size='15px' />
                </CloseMenu>
            </CloseButtonMenu>

            <MenuContainer>
                <TitleMenuStyled>Menú</TitleMenuStyled>
            </MenuContainer>

        </MenuCardContainer>
        )}
    </AnimatePresence>
    </>
  )
}

export default MenuContainer