import LeftSidebar from "./LeftSidebar";
import SettingsMenu from "./SettingsMenu";
import TopBar from "./TopBar";

function Header() {
    return (
        <>
  
  <div className="overlay" />
  
  <div>
    
    <LeftSidebar></LeftSidebar>
    <TopBar></TopBar>
    <SettingsMenu></SettingsMenu>
  </div>
  
</>

    );
}

export default Header;
