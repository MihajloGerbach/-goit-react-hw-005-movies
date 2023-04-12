import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

export const LogoLink = styled(Link)`
    display: flex;
    justify-content: center;
    gap: 5px;
`
export const LogoWrapper = styled.div`
    font-size: 24px;
`

export const Container = styled.div`
    position: relative; 
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 1200px;
    min-height: 100vh;
    padding-left: 20px;
    padding-right: 20px;
    margin-left: auto;
    margin-right: auto;
    @media screen and (min-width: 320px) {
        width: 320px;
      }
    
      @media screen and (min-width: 768px) {
        width: 768px;
        padding-left: 32px;
        padding-right: 32px;
      }
    
      @media screen and (min-width: 1280px) {
        width: 1280px;
        padding-left: 32px;
        padding-right: 32px;
      }
`

export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;    
    padding: 0 50px;
    background-color: ${(prop)=> prop.theme.header};
    height: 130px;
    @media screen and (min-width: 320px) {
        padding: 10px 50px;
        justify-content: center;
        flex-wrap: wrap;
      }
    
      @media screen and (min-width: 768px) {
        justify-content: space-between;
      }
    
      @media screen and (min-width: 1280px) {
        
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
`

export const Navigation = styled.nav`
    display: flex;
    align-items: center;    
    padding: 2px;
    gap: 40px;
    font-size: 24px;
`
export const StyledLink= styled(NavLink)`
    &:hover,
    &:focus {
        color: ${(prop) => prop.theme.link};
    }
    &.active {
        border-bottom: 2px solid ${(prop) => prop.theme.link};
        padding-bottom: 2px;
    }
`

export const Footer = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80px;
    background-color: ${(prop)=> prop.theme.footer};
    @media screen and (min-width: 320px) {
        p {
            text-align: center;
            line-height: 30px;
        }
        padding: 15px 20px;
        height: 120px;
        flex-wrap: wrap;
      }
`

export const SocialList = styled.ul`
    display: flex;
    align-items: center;
    height: 80px;
    background-color: ${(prop)=> prop.theme.footer};
    gap: 10px;
    @media screen and (min-width: 320px) {
        justify-content: center;
        gap: 25px;
        height: 40px;
       }
    @media screen and (min-width: 768px) {
        margin-left: 25px;
    }
    
    @media screen and (min-width: 1280px) {
        
    }
       
   
`