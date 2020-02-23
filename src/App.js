import React, { Component } from 'react';
import Navbar from './component/Desk-Navigation/Navbar';
import SideDrawer from './component/Mobile-nav/SideDrawer';
import Backdrop from './component/Backdrop/Backdrop';



export default class App extends Component {
  constructor(props){
    super(props)
  }
  state = {
    sideDrawerOpen: false
  };

drawToggleClickHandler = () => {
  this.setState((prevState)=> {
    return{sideDrawerOpen: !prevState.sideDrawerOpen}
  });
  
};
  render() {
  let sideDrawer;
  let backdrop;
  
  if (this.state.sideDrawerOpen){
    sideDrawer = <SideDrawer />;
    backdrop =  <Backdrop />;
  }
    return (
      <div style={{height:'100%'}}>
        <Navbar drawerClickHandler={this.props.drawerToggleClickHandler}/>
        {sideDrawer}
        {backdrop}
        <main style={{marginTop:'64px'}}>
          <p>My content will come here</p>
        </main>
      </div>
    )
  }
}
