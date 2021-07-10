import React, { FC } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserEdit } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

import { Navbar } from "@/components/Header/styles";

const Header: FC = ({ children }) => {
  return (
    <Navbar>
      <div className="header-inner">
        <div className="logo">
          <Link href="/">
            <a>Wblog</a>
          </Link>
        </div>
        <div className="menu">
          <ul className="menu-list">
            <li>
              <Link href="/">
                <a>HOME</a>
              </Link>
            </li>
            <li>
              <Link href="/category/programming">
                <a>프로그래밍</a>
              </Link>
            </li>
            <li>
              <Link href="/category/travel">
                <a>여행</a>
              </Link>
            </li>
            <li>
              <Link href="/login">
                <a>
                  <FontAwesomeIcon icon={faUserEdit} />
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </Navbar>
  );
};

export default Header;
