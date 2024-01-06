import React from "react";
import { NavLink, useNavigate } from 'react-router-dom';
import styled from "styled-components";
import { ABOUT_ROUTE, CONTACTS_ROUTE, HOME_ROUTE, UNIVERSITY_ROUTE } from '../routes/configs';
import { useAuth } from "../hooks/useAuth";


const Navigation = styled.nav`
    height: max-content;
    gap: 20px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-size: 20px;
`
const NavigationHeader = styled.header`
    margin: 1.5rem 0;
`

const Button = styled.button`
    width: 150px;
    height: 100%;
    border-radius: 15px;
    font-size: 20px;
    cursor: pointer;
    border: 0;
    border-radius: 15px;
    padding: 0.75rem 1.5rem;
    background: rgb(167, 221, 7);
`

export const Navbar = () => {
    const { isAuth, setIsAuth } = useAuth();
    
    const navigate = useNavigate();

    const handleLogin = () => {
        setIsAuth(!isAuth);
    }
    const handleLogout = () => {
        setIsAuth(false);
        navigate("/home");
    }

    return (
            <NavigationHeader>
                <Navigation>
                    <NavLink className={'link'} to={HOME_ROUTE}>Главная</NavLink>
                    <NavLink className={'link'} to={ABOUT_ROUTE}>О нас</NavLink>
                    <NavLink className={'link'} to={CONTACTS_ROUTE}>Контакты</NavLink>
                    { isAuth && <NavLink className={'link'} to={UNIVERSITY_ROUTE}>Университеты</NavLink> }
                    <Button onClick={isAuth ? handleLogout : handleLogin}>{!isAuth ? 'Войти' : 'Выйти'}</Button>
                </Navigation>
            </NavigationHeader>
    )
}