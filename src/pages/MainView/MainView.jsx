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
      dispatch(getAvatarData(user.id));
    }
  });

  return (
    <Router history={history}>
      <div
        className="main-view"
        style={{ height: "100vh", background: "#090000" }}
      >
        <Header />
        <div className="row ml-5 h-75">
          <div
            className="col"
            style={{ msFlex: "0 0 300px", flex: "0 0 300px" }}
          >
            {" "}
            <Sidebar />{" "}
          </div>
          <div className="col">
            {" "}
            <Routes history={history} />{" "}
          </div>
        </div>
        <Footer/>
      </div>
    </Router>
  );
};

export default MainView;
