import React, { useState } from "react";
import NavbarTop from "./Components/NavbarTop";
import Menu from "./Components/Menu";
import MemoArea from "./Components/MemoArea";
import Reminders from "./Components/Reminders";
import Archive from "./Components/Archive";
import Trash from "./Components/Trash";
import "./App.css";
import Linkpad from "./Components/Linkpad";

const App = ({ match }) => {
  const [loader , setLoader] = useState(true);
  const { path: id } = match;
  document.title = "The Brain Memo -Bremo";
  const [menuExpanded, setMenuExpanded] = useState(false);
  const compLoc = [
    <MemoArea menuExpanded={menuExpanded} setLoader={setLoader}/>,
    <Trash menuExpanded={menuExpanded} setLoader={setLoader}/>,
    <Archive menuExpanded={menuExpanded} setLoader={setLoader}/>,
    <Reminders menuExpanded={menuExpanded} />,
    <Linkpad menuExpanded={menuExpanded} setLoader={setLoader}/>
  ];
  const menu = (e) => {
    if (menuExpanded) {
      setMenuExpanded(false);
    } else {
      setMenuExpanded(true);
    }
  };
  return (
    <>
      <NavbarTop menu={menu} headerName={id.replace("/", "")} loading={loader}/>
      <Menu menuExpanded={menuExpanded} id={id}/>
      {
        id === "/Reminders"
        ? compLoc[3]
        : id === "/Trash"
        ? compLoc[1]
        : id === "/Archive"
        ? compLoc[2] 
        : id === "/Linkpad"
        ? compLoc[4]
        :compLoc[0]
      }
    </>
  );
};

export default App;
