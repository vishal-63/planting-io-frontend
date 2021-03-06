import styled from "styled-components";

export const NavbarContainer = styled.nav`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  background-color: #fff;
  z-index: 10;
  transition: all 0.3s ease;
  position: ${({ scrollNav }) => (scrollNav ? "fixed" : "")};
  top: ${({ scrollNav }) => (scrollNav ? "0px" : "")};
  box-shadow: ${({ scrollNav }) =>
    scrollNav ? "0 5px 20px rgba(0,0,0,0.2)" : ""};

  &.nursery-page {
    position: fixed;
    top: 0px;
  }

  @media (min-width: 768px) {
    padding: 0 6.5vw;
  }

  & .burger {
    display: block;
    cursor: pointer;

    @media (min-width: 769px) {
      display: none;
    }
  }

  & .burger div {
    width: 20px;
    height: 3px;
    margin: 5px 0;
    background-color: #000;
    transition: all 0.3s ease;

    &.line1 {
      width: 15px;
      margin-left: 10px;
    }
    &.line2 {
      width: 25px;
    }
    &.line3 {
      margin-left: 5px;
    }
  }

  & .burger.close-icon div {
    &.line1 {
      width: 25px;
      transform: translateY(8px);
      margin: 5px 0;
    }
    &.line3 {
      margin: 5px 0;
      width: 25px;
      transform: translateY(-8px);
    }
  }
`;

export const NavImg = styled.img`
  @media (max-width: 768px) {
    width: 150px;
  }
`;

export const NavlinkWrapper = styled.ul`
  list-style: none;
  transition: all 0.3s ease;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  @media (min-width: 1100px) {
    gap: 2rem;
  }

  @media (max-width: 768px) {
    &.desktop-menu {
      display: none;
    }
  }

  &.mobile-menu {
    flex-direction: column;
    align-items: flex-end;
    gap: 2rem;

    & li {
      font-size: 1rem;
      padding-bottom: 0.75rem;
      padding-left: 0.5rem;

      @media (min-width: 375px) {
        font-size: 1.25rem;
        padding-bottom: 1rem;
      }
    }

    & li.nursery-page {
      font-size: 1rem;
    }
  }
`;

export const Navlink = styled.li`
  font-size: 1rem;
  line-height: 1.2rem;
  padding: 1rem 0;
  transition: all 0.3s ease;
  position: relative;
  cursor: pointer;

  &:hover {
    border-bottom: 3px solid #115533;
    transition: all 0.3s ease;
  }
`;

export const DropdownContainer = styled.div`
  font-size: 1rem;
  line-height: 1.2rem;
  padding: 1rem 0;
  position: relative;
  cursor: pointer;

  &:hover ul {
    visibility: visible;
  }
`;

export const HoverMenu = styled.ul`
  width: 135px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  position: absolute;
  top: 65px;
  z-index: 1;
  list-style: none;
  visibility: hidden;

  &.services {
    width: 225px;
  }

  & a {
    margin: 1rem 1.2rem;
  }

  & li:hover {
    border: none;
    border-left: 3px solid #115533;
    padding-left: 0.5rem;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 769px) {
    &.desktop-menu {
      margin-left: 10rem;
    }
  }

  @media (max-width: 540px) {
    &.desktop-menu {
      display: none;
    }
  }

  &.mobile-menu {
    flex-direction: column;
  }
`;

export const Button = styled.button`
  font-size: 1.2rem;
  padding: 0.3rem 0.8rem;
  color: ${({ registerBtn }) => (registerBtn ? "#fff" : "#28c274")};
  background-color: ${({ registerBtn }) => (registerBtn ? "#28c274" : "#fff")};
  border: 1.5px solid #28c274;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transition: all 0.3s ease;
    color: #fff;
    background-color: #13864d;
    border-color: #13864d;
  }

  &.mobile-menu {
    padding: 0.5rem 2rem;
  }

  &.nursery-page {
    color: ${({ registerBtn }) => (registerBtn ? "#fff" : "#28C274")};
    background-color: ${({ registerBtn }) =>
      registerBtn ? "#28C274" : "#fff"};
    border-color: #28c274;
    border-radius: 25px;

    @media (max-width: 768px) {
      font-size: 0.875rem;
      padding: 0.5rem 0.8rem;
    }

    &:hover {
      transition: all 0.3s ease;
      box-shadow: 5px 5px 20px #28c27440;
    }
  }
`;

export const MobileMenu = styled.div`
  position: fixed;
  top: ${({ scrollNav }) => (scrollNav ? "80px" : "110px")};
  right: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
  width: 60vw;
  height: ${({ scrollNav }) =>
    scrollNav ? "calc(100vh - 80px)" : "calc(100vh - 110px)"};
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: #fff;
  transition: right 0.3s ease;
  box-shadow: -2px 18px 15px rgba(0, 0, 0, 0.55);
  z-index: 10;
  transition: all 0.2s;

  &.nursery-page {
    top: 60px;
    height: calc(100vh - 60px);
  }
`;
