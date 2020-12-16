import { Component } from 'react';
import { createPortal } from 'react-dom';
import s from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
  componentDidMount() {
    // слушатель событий на window, для закрытия модалки при нажатии на Esc
    window.addEventListener('keydown', this.handelKeyDown);
  }

  //   при размонтировании снимать слушатель.Почистила
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handelKeyDown);
  }

  handelKeyDown = event => {
    if (event.code === 'Escape') {
      this.props.onClose();
    }
  };

  //   закрытие модалки при клике на серый фон
  handelOverlayClick = event => {
    if (event.currentTarget === event.target) {
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <div className={s.Overlay} onClick={this.handelOverlayClick}>
        <div className={s.Modal}>{this.props.children}</div>
      </div>,
      modalRoot,
    );
  }
}

export default Modal;
