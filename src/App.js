import React, { Component } from 'react';
import './App.css'
import Navbar from './component/Desk-Navigation/Navbar';
import SideDrawer from './component/Mobile-nav/SideDrawer';
import Backdrop from './component/Backdrop/Backdrop';
import Accueil from './component/Accueil';
import Technos from './component/Technos';
import Projets from './component/Projets';
import Contact from './component/Contact'
import Footer from './Footer'




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
      <div className="container background-img" >
        <Navbar drawerClickHandler={this.drawerToggleClickHandler}/>
        {sideDrawer}
        {backdrop}
        <h2>Qui suis-je</h2>
        <Accueil />
        <Technos />
        <Projets />
        <Contact />
        <Footer />
      </div>
    );
  }
}
