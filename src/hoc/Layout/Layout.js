import React, { Component } from 'react';

import Aux from '../Aux';
import classes from './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

//wrapper for the core content component we are rendering to the screen
class Layout extends Component {
  state = {
    showSideDrawer: false
  };

  sideDrawerClosedHandler = () => {
    this.setState( { showSideDrawer: false } );

  };
  // use function form because setState is asynch, may lead to unexpected outcomes
  sideDrawerToggleHandler = () => {
    this.setState( ( prevState ) => {
      return { showSideDrawer: !prevState.showSideDrawer };
    } );
  };

  render() {
    return (
    <Aux>
      <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler}/>
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