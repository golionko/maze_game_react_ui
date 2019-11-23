import React from "react";
import HomeLoggedOut from "./HomeLoggedOut";
import HomeLoggedIn from "./HomeLoggedIn";
import { useSelector } from "react-redux";

const Home = () => {
  const logged = useSelector(state => state.loginReducer.logged);
  return !logged ? <HomeLoggedOut /> : <HomeLoggedIn />;
};

export default Home;
