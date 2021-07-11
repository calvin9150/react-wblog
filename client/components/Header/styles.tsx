import { ReducerType } from "@/reducers";
import { useSelector } from "react-redux";
import styled from "styled-components";

export const mobile = `@media only screen and(max - width: 768px)`;

export const LoginBtn = styled.li<any>`
  display: ${(props) => (props.email === undefined ? "block" : "none")};
`;

export const Navbar = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  border-bottom: 5px ridge rgba(135, 137, 137, 0.11);

  .user {
    position: absolute;
    top: 10px;
    right: 50px;
  }

  .header-inner {
    width: 1200px;
    display: flex;
    justify-content: space-between;
    margin: 0 50px;
    font-size: 20px;
  }

  .logo {
    display: flex;
    align-items: center;
    margin: 10px 0 20px;
    font-size: 35px;
  }

  .menu-list {
    display: flex;
    list-style: none;

    ${mobile} {
      display: none;
    }
  }

  .menu-list li {
    position: relative;
    margin: 0 20px;
  }

  .menu-list li::before {
    content: "";
    width: 2px;
    height: 13px;
    background-color: #6e65656c;
    position: absolute;
    right: -20px;
    top: 0;
    bottom: 0;
    margin: auto;
  }

  .menu-list li:last-child:before {
    display: none;
  }

  a {
    text-decoration: none;
    color: #000000;
  }
`;
