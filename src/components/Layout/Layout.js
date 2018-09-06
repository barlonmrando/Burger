import React from 'react';
import Aux from '../../hoc/Aux';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';

//wrapper for the core content component we are rendering to the screen
const layout = ( props ) => (
  <Aux>
    <Toolbar />
    <main className={classes.Content}>
      {props.children}
      </main>
  </Aux>
);

export default layout;