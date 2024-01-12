import LeftSidebar from "./LeftSidebar";
import SettingsMenu from "./SettingsMenu";
import TopBar from "./TopBar";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <div className="overlay" />

      <div>
        <LeftSidebar></LeftSidebar>
        <TopBar></TopBar>
        <SettingsMenu></SettingsMenu>
      </div>
      <Outlet></Outlet>
    </>
  );
}

export default Layout;
