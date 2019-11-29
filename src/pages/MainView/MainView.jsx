import React, { useEffect } from "react";
import Routes from "./Routes";
import { history } from "../../util/history";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Router } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { getMazeStats } from "../../store/actions/mazeStats";
import { getAvatarData } from "../../store/actions/avatar";
import "./MainView.scss";

const MainView = () => {
  const logged = useSelector(state => state.loginReducer.logged);
  const user = useSelector(state => state.loginReducer.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMazeStats());
  }, [dispatch]);

  history.listen(location => {
    if (!logged) {
      dispatch(getMazeStats());
    } else {
      dispatch(getAvatarData(user.avatarId));
    }
  });

  return (
    <Router history={history}>
      <div className="main-view">
        <div className="header">
          <Header />
        </div>
        <div className="sidebar bg-dark text-white rounded-lg">
          <Sidebar />
        </div>
        <div className="main bg-dark text-white h6 rounded-lg">
          <Routes history={history} />
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    </Router>
  );
};

export default MainView;
