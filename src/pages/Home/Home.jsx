import React from "react";
import HomeLoggedOut from "./HomeLoggedOut";
import HomeLoggedIn from "./HomeLoggedIn";
import { useSelector } from "react-redux";
import './Home.scss';

const Home = () => {
  const logged = useSelector(state => state.loginReducer.logged);
return <div className="main bg-dark text-white h6 rounded-lg">{logged ? <HomeLoggedIn /> : <HomeLoggedOut />}</div>;
};

export default Home;
