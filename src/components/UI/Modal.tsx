import { ReactNode, useEffect } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

function Backdrop({ onCloseModal }: { onCloseModal: () => void }) {
  return (
    <Styled>
      <div className="backdrop" onClick={onCloseModal} />
    </Styled>
  );
}
function ModalOverlay({ children }: { children: ReactNode }) {
  return (
    <Styled>
      <div className="modal">
        <div>{children}</div>
      </div>
    </Styled>
  );
}

const portalElement = document.querySelector('#overlays') as
  | Element
  | DocumentFragment;
function Modal({
  children,
  onClick,
}: {
  children: ReactNode;
  onClick: () => void;
}) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onCloseModal={onClick} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{children}</ModalOverlay>,
        portalElement
      )}
    </>
  );
}

const Styled = styled.div`
  .backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 20;
    background-color: rgba(0, 0, 0, 0.75);
  }

  .modal {
    position: fixed;
    top: 20vh;
    left: 5%;
    width: 90%;
    background-color: white;
    padding: 1rem;
    border-radius: 14px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
    z-index: 30;
    animation: slide-down 300ms ease-out forwards;
  }

  @media (min-width: 768px) {
    .modal {
      width: 40rem;
      left: calc(50% - 20rem);
    }
  }

  @keyframes slide-down {
    from {
      opacity: 0;
      transform: translateY(-3rem);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
export default Modal;
