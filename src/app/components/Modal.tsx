import '../../styling/Modal.css';

import XIcon from '../assets/icons/XIcon';

// I dont love this file
// I'd rather just manualy implement this where needed
// Rather than have an abstraction im unfamiliar with but like
// Complaining feels like semantics so this mostly just Acts as reference ? 
// Eh maybe its fine

interface ModalProps {
  handleClose: () => void;
  children?: any;
  className?: string;
  classNameBody?: string;
  classNameHeader?: string;
  title?: string;
}

const Modal = (props: ModalProps) => {
  const {
    className = '',
    classNameBody = 'padding-full',
    classNameHeader = '',
    title = '',
  } = props;

  return (
    <div className={'modal-bg '} onMouseDown={props.handleClose}>
      <div
        onMouseDown={(event) => {
          event.stopPropagation();
        }}
        className={'modal ' + className}
      >
        <div className={'modal-header border-radius-top ' + classNameHeader}>
          <div className="modal-title display-inline-block float-left font-bold">{title}</div>
          <div
            onClick={props.handleClose}
            className="modal-close display-inline-block clickable unselectable"
          >
            <div className="fill-svg-primary"> 
            <XIcon/>
            </div>
          </div>
        </div>
        <div className={'modal-body border-radius-bottom ' + classNameBody}>{props.children}</div>
      </div>
    </div>
  );
};

export default Modal;
