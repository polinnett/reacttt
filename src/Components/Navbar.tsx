import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";
import {
  ABOUT_ROUTE,
  CONTACTS_ROUTE,
  HOME_ROUTE,
  UNIVERSITY_ROUTE,
} from "../routes/configs";
import { useAuth } from "../hooks/useAuth";
import ChangeThemeIcon from "../assets/icons/ChangeThemeIcon.svg";
import { useCurrentTheme } from "../hooks/useCurrentTheme";
import {FlexProp} from '../Interfaces/IStyledProp';

const Navigation = styled.nav<FlexProp>`
  height: max-content;
  gap: 20px;
  display: ${({displayFlex}) => displayFlex ? displayFlex : 'flex'};
  align-items: center;
  justify-content: space-around;
  font-size: 20px;
  @media (max-width: 720px) {
    flex-direction: column;
    justify-items: center;
    gap: 20px;
  }
`;
const NavigationHeader = styled.header`
  margin: 1.5rem 0;
`;

const Button = styled.button`
  width: 150px;
  height: 100%;
  border-radius: 15px;
  font-size: 20px;
  cursor: pointer;
  border: 0;
  border-radius: 15px;
  padding: 0.75rem 1.5rem;
  background: #1989f9;
`;

const ChangeThemeButton = styled.button`
  color: --text-color;
  width: 100px;
  height: 50px;
  border: 0;
  border-radius: 20px;
  cursor: pointer;
`;

const ChangeThemeIconImage = styled.img`
  width: 80%;
  height: 80%;
  margin: 0 auto;
`;

export const Navbar = () => {
  const { isAuth, setIsAuth } = useAuth();

  const navigate = useNavigate();

  const handleLogin = () => {
    setIsAuth(!isAuth);
  };
  const handleLogout = () => {
    setIsAuth(false);
    navigate("/home");
  };

  const { changeTheme } = useCurrentTheme();

  return (
    <NavigationHeader>
      <Navigation>
        <NavLink className={"link"} to={HOME_ROUTE}>
          Главная
        </NavLink>
        <NavLink className={"link"} to={ABOUT_ROUTE}>
          О нас
        </NavLink>
        <NavLink className={"link"} to={CONTACTS_ROUTE}>
          Контакты
        </NavLink>
        {isAuth && (
          <NavLink className={"link"} to={UNIVERSITY_ROUTE}>
            Университеты
          </NavLink>
        )}
        <Button onClick={isAuth ? handleLogout : handleLogin}>
          {!isAuth ? "Войти" : "Выйти"}
        </Button>
        <ChangeThemeButton onClick={() => changeTheme()}>
          <ChangeThemeIconImage src={ChangeThemeIcon} />
        </ChangeThemeButton>
      </Navigation>
    </NavigationHeader>
  );
};
