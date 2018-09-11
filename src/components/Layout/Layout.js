import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

//wrapper for the core content component we are rendering to the screen
class Layout extends Component {
  state = {
    showSideDrawer: true
  };

  sideDrawerClosedHandler = () => {
    this.setState({showSideDrawer: false});

  };

  render() {
    return (
    <Aux>
      <Toolbar />
      <SideDrawer
        open={this.state.showSideDrawer}
        closed={this.sideDrawerClosedHandler}/>
      <main className={classes.Content}>
        {this.props.children}
      </main>
    </Aux>
    )
  }
}

export default Layout;