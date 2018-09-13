import React from 'react';

import classes from './DrawerToggle.css';

const drawerToggle = (props) => (
  <div className={classes.DrawerToggle} onClick={props.clicked}>
    {/*divs styled to become 3 bars in top right*/}
    <div></div>
    <div></div>
    <div></div>
  </div>
);

export default drawerToggle;