import { useSelector, useDispatch } from "react-redux";

import classes from "./Header.module.css";
import { authActions } from "../store/auth-slice";

const Header = () => {
  const isAuth = useSelector((state) => state.auth.loggedIn);
  const dispatch = useDispatch();

  const logOutHandler = (event) => {
    event.preventDefault();

    dispatch(authActions.logOut());
  };

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {isAuth && (
        <nav>
          <ul>
            <li>
              <a href="/">My Products</a>
            </li>
            <li>
              <a href="/">My Sales</a>
            </li>
            <li>
              <button onClick={logOutHandler}>Logout</button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
