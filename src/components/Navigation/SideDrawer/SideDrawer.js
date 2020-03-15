import React from "react";

import classes from "./SideDrawer.css";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import Backdrop from "../../UI/Backdrop/Backdrop";
import Auxiliaries from "../../../hoc/Auxiliaries/Auxiliaries"

//  <Logo height="11%"/>
const SideDrawer = (props) => {
        let attachedClasses = [classes.SideDrawer , classes.Close];
        if(props.open){
                attachedClasses=[classes.SideDrawer, classes.Open]
        }
  return (
          <Auxiliaries>
                 
          <Backdrop show={props.open} clicked={props.closed} />
    <div className={attachedClasses.join(' ')}>
      <div className={classes.Logo}>
        <Logo />
      </div>
      <nav>
        <NavigationItems />
      </nav>
    </div>
    </Auxiliaries>
  );
};

export default SideDrawer;
