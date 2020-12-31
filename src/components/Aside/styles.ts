import styled from 'styled-components';

export const Container = styled.div`
    grid-area: AS;
    border-right: 1px solid ${props => props.theme.colors.gray};
    padding-left: 20px; 
    background-color: ${props => props.theme.colors.secondanry}; 
`;

export const Header = styled.header`
    height: 70px;
    display: flex;
    align-items: center;
`;
export const LogImg = styled.img`
    height: 40px;
    width: 40px;
`;
export const MenuContainer = styled.nav`
    margin-top: 50px;
    display: flex;
    flex-direction: column;
`;
export const MenuLink = styled.a`
    display: flex;
    color: ${props => props.theme.colors.info};
    text-decoration: none;
    transition: opacity .5s;
    margin: 7px 0;
    &:hover {
        opacity: .7;
    }
    > svg {
        font-size: 18px;
        margin-right: 5px;
    }
`;
export const Title = styled.h3`
    color: ${props => props.theme.colors.white};
    margin-left: 10px;
`;