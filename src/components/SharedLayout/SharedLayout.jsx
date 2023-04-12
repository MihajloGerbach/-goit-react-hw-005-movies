import { Outlet, Link } from "react-router-dom";
import { Suspense } from "react";
import { FiFilm } from 'react-icons/fi';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { Spinner } from '../Spinner/Spinner';
import { Container, Header, LogoWrapper, Navigation, Footer, StyledLink, SocialList, LogoLink} from './SharedLayout.styled';

const SharedLayout = ()=> {

    return(

        <Container>
            <Header>
                <LogoWrapper>
                    <LogoLink to='/' ><FiFilm />React Filmoteka</LogoLink>
                </LogoWrapper>
            <Navigation>
                <StyledLink to='/'>Home</StyledLink>
                <StyledLink to='movies'>Movies</StyledLink>
            </Navigation>
            </Header>

            <Suspense fallback={<Spinner/>}>
                    <Outlet/>
                </Suspense>

            <Footer>
                <p>© 2023 | All Rights Reserved | Developed by Mihajlo Gerbach </p>
                <SocialList>
                    <li><Link to='https://github.com/MihajloGerbach'><BsGithub size={25}/></Link></li>
                    
                </SocialList>
                
            </Footer>
        </Container>
    )
}

export default SharedLayout;