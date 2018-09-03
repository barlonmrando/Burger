import React from 'react';
import Aux from '../../hoc/Aux';
import classes from './Layout.css';

//wrapper for the core content component we are rendering to the screen
const layout = ( props ) => (
  <Aux>
    <div>Toolbar, SideDrawer, Backdrop</div>
    <main className={classes.Content}>
      {props.children}
      </main>
  </Aux>
);

export default layout;