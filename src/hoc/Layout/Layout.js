import React, { Component } from "react";
import Auxiliaries from "../Auxiliaries/Auxiliaries";
import classes from "./Layout.css";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";

class Layout extends Component {
    state ={
        showSideDrawer: true
    }
SideDrawerClosedHandler = () => {
    this.setState({showSideDrawer: false})
}
SideDrawerToggleHandler = () => {
    this.setState((prevState) => {
        return {showSideDrawer: !prevState.showSideDrawer};
    })
}
  render() {
    return (
      <Auxiliaries>
        <Toolbar drawerToggleClicked={this.SideDrawerToggleHandler} />
        <SideDrawer open={this.state.showSideDrawer} closed= {this.SideDrawerClosedHandler} />
        <main className={classes.Content}>{this.props.children}</main>
      </Auxiliaries>
    );
  }
}

export default Layout;
