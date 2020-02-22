import React, { Component } from 'react';
import Navbar from './component/Desk-Navigation/Navbar';
import SideDrawer from './component/Mobile-nav/SideDrawer'



export default class App extends Component {
  render() {
    return (
      <div style={{height:'100%'}}>
        <Navbar />
        <SideDrawer />
        <main style={{marginTop:'64px'}}>
          <p>My content will come here</p>
        </main>
      </div>
    )
  }
}
