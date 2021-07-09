import React, { FC } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserEdit } from "@fortawesome/free-solid-svg-icons";

import { Navbar } from "@/components/Header/styles";

const Header: FC = ({ children }) => {
  return (
    <Navbar>
      <div className="header-inner">
        <div className="logo">
          <a href="/">Wblog</a>
        </div>
        <div className="menu">
          <ul className="menu-list">
            <li>
              <a href="/">HOME</a>
            </li>
            <li>
              <a href="/category/programming">프로그래밍</a>
            </li>
            <li>
              <a href="/category/travel">여행</a>
            </li>
            <li>
              <a href="/login">
                <FontAwesomeIcon icon={faUserEdit} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </Navbar>
  );
};

export default Header;
