import React from 'react'
import { 
    FoundContainerStyled, 
} from './PageNotFoundStyles';
import Link from '../../UI/Link/Link';

const PageNotFound = () => {
  return (
        <FoundContainerStyled>
            <img src='https://res.cloudinary.com/dqhrvfasu/image/upload/v1688508232/404-3_lg6ckt.jpg' alt='404 error' />
            <p>LA PÁGINA NO FUE ENCONTRADA O FUE REMOVIDA</p>
            <Link to='/'/>
        </FoundContainerStyled>
  );
};

export default PageNotFound;