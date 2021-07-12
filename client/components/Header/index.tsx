import React, { FC, useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt, faUserEdit } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

import { Navbar, LoginBtn, LogoutBtn } from "@/components/Header/styles";
import { useDispatch, useSelector } from "react-redux";
import { ReducerType } from "@/reducers";
import { logout } from "@/actions/user";

const Header: FC = ({ children }) => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state: ReducerType) => state.user);
  console.log("유저이메일" + isLoggedIn.user.email);

  const onLogout = useCallback(() => {
    dispatch(logout());
  }, []);

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
            <LoginBtn email={isLoggedIn.user.email}>
              <Link href="/login">
                <a>
                  <FontAwesomeIcon icon={faUserEdit} />
                </a>
              </Link>
            </LoginBtn>
            <LogoutBtn email={isLoggedIn.user.email} onClick={onLogout}>
              <Link href="/">
                <a>
                  <FontAwesomeIcon icon={faSignOutAlt} />
                </a>
              </Link>
            </LogoutBtn>
          </ul>
        </div>
      </div>
    </Navbar>
  );
};

export default Header;
