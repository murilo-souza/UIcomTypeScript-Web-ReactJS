import styled from 'styled-components';
import {LogoSVG, BurgerSVG} from './IconSVG'
import {motion} from 'framer-motion'

export const Container = styled.div`
    position: sticky;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
`;

export const Header = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;

    display: flex;
    align-items: center;
    justify-content: space-between;
    
    padding: 0 20px
`;

export const Logo = styled(LogoSVG)`
    height: 17px;
    cursor: pointer;
`;

export const Burger = styled(BurgerSVG)`
    width:24px;
    height: 24px;
    cursor: pointer;
    padding-right: 5px;
`;

export const Footer = styled(motion.footer)`
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;

    ul{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        li{
            list-style: none;
            font-size: 14px;

            & + li {
                margin: 10px 0 0;
            }

            a{
                text-decoration: none;
                color: #fff;
                &:hover {
                    color: #fff
                }
                
            }
        }
    }
    margin-bottom: 30px;

    @media (min-width: 600px) {
        margin-bottom:38px;

        ul{
            flex-direction: row;
            li + li {
                margin: 0 0 0 30px;
            }
        }
    }
`;
