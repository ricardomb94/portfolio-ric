import React, { Component } from 'react';
import Navbar from './component/Desk-Navigation/Navbar';
import SideDrawer from './component/Mobile-nav/SideDrawer';
import Backdrop from './component/Backdrop/Backdrop';




export default class App extends Component {
  
  state = {
    sideDrawerOpen: false
  };

drawerToggleClickHandler = () => {
    this.setState((prevState)=> {
      return{sideDrawerOpen: !prevState.sideDrawerOpen}
    });
  };

backdropClickHandler = () => {
  this.setState({sideDrawerOpen: false})
}
  render() {
  let sideDrawer;
  let backdrop;
  
  if (this.state.sideDrawerOpen){
    sideDrawer = <SideDrawer />;
    backdrop =  <Backdrop click={this.drawerToggleClickHandler}/>;
  }
    return (
      <div className="container" >
        <Navbar drawerClickHandler={this.drawerToggleClickHandler}/>
        {sideDrawer}
        {backdrop}
        <main className="content">
          The content
        </main>
      </div>
    );
  }
}
