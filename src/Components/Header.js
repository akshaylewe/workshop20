
import React, { useState } from "react";
import SearchBar from "./search";

//import react pro sidebar components
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
 
  SidebarContent,
} from "react-pro-sidebar";

//import icons from react icons

import {   FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";



//import sidebar css from react-pro-sidebar module and our custom css 
import "react-pro-sidebar/dist/css/styles.css";
import "./Header.css";



const Header = () => {
  
   
    const [menuCollapse, setMenuCollapse] = useState(false)


  const menuIconClick = () => {
    
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

  return (
    <>
    <div
    id="sidebar"
    className="sidebar"
    data-color="black"
    ></div>
    
      <div id="header">
        
        <ProSidebar collapsed={menuCollapse}>
          <SidebarHeader>
          <div className="logotext">
              
              <p ><SearchBar/></p>
            </div>
            <div className="closemenu" onClick={menuIconClick}>
            
              {menuCollapse ? (
                <FiArrowRightCircle/>
              ) : (
                <FiArrowLeftCircle/>
              )}
            </div>
          </SidebarHeader>
          <SidebarContent>
            <Menu iconShape="square">
          <MenuItem active={true} icon={<img src="./user1.png" alt=""/>}> 
             <div class="city"> Sara Smith   <li>15 Aug 2020 </li>
            
          
                </div>
               
                
            </MenuItem> 
              <MenuItem id="one" icon={<img src="./user2.png " alt=""/>}>James Johnson <li>No Clearnace</li>  </MenuItem>
              <MenuItem id="one"  icon={<img src="./user3.png " alt=""/>}>Patrice Page <li>19 Aug 2020</li></MenuItem>
              <MenuItem  id="one"  icon={<img src="./user4.png "alt=""/>}>Derk Diamon <li>21 Aug 2020</li></MenuItem>
              
            </Menu>
          </SidebarContent>
          
        </ProSidebar>
      </div>
      
    </>
  );
};

export default Header;