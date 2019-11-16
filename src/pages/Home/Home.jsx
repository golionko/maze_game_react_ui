import React from "react";
import HomeLoggedOut from "./HomeLoggedOut";
import { useSelector } from "react-redux";

const Home = () => {
  const logged = useSelector(state => state.loginReducer.logged);

  return !logged ? <HomeLoggedOut /> : <h1>Home</h1>;
};

export default Home;
