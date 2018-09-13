import React, { Component } from 'react';

import classes from './Modal.css';
import Aux from '../../../hoc/Aux';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component {

  //only update OrderSummary if Modal visible. Modal wraps OS in BurgerBuilder - wrapping element controls
  // updating of wrapped elem
  shouldComponentUpdate(nextProps, nextState) {
    // if (nextProps.show !== this.props.show) {
    //   return true;
    return nextProps.show !== this.props.show;
    }

   componentWillUpdate() {
    console.log('[Modal] WillUpdate');
   }

  render () {
    return (
      <Aux>
        {/*if the modal is showing, the background should be showing*/}
        <Backdrop show={this.props.show} clicked={this.props.modalClosed}/>
        <div
          className={classes.Modal}
          style={{
            transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: this.props.show ? '1': '0'
          }}>
          {this.props.children}
        </div>
      </Aux>
    );
  }
}

export default Modal;