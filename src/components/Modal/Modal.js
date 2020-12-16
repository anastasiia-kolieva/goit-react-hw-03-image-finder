import { Component } from 'react';
import s from './Modal.module.css';

class Modal extends Component {
  render() {
    return (
      <div className={s.Overlay}>
        <div className={s.Modal}>{this.props.children}</div>
      </div>
    );
  }
}

export default Modal;
